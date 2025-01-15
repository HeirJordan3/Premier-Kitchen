'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface PricingOption {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

interface OrderFormData {
  pricingOption: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  deliveryInstructions?: string;
  specialRequirements?: string;
}

const pricingOptions: PricingOption[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 25,
    description: 'Perfect for small gatherings',
    features: [
      'Up to 20 guests',
      '3 appetizers',
      '2 main courses',
      '1 dessert',
      'Basic table setup',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 50,
    description: 'Ideal for medium-sized events',
    features: [
      'Up to 50 guests',
      '5 appetizers',
      '3 main courses',
      '2 desserts',
      'Standard table setup',
      '1 bartender',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 100,
    description: 'Best for large events',
    features: [
      'Up to 100 guests',
      '7 appetizers',
      '4 main courses',
      '3 desserts',
      'Premium table setup',
      '2 bartenders',
      'Custom menu options',
    ],
  },
]

const formSchema = z.object({
  pricingOption: z.string().min(1, 'Please select a pricing option'),
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your full address'),
  deliveryInstructions: z.string().optional(),
  specialRequirements: z.string().optional(),
})

export default function CustomOrdersPage() {
  const [step, setStep] = useState(1)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<OrderFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pricingOption: '',
      customerName: '',
      email: '',
      phone: '',
      address: '',
      deliveryInstructions: '',
      specialRequirements: '',
    },
  })

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true)
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
      console.log('Form submitted:', data)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error (e.g., show error message to user)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
    form.setValue('pricingOption', optionId)
  }

  const proceedToDetails = () => {
    if (!selectedOption) {
      form.setError('pricingOption', {
        type: 'manual',
        message: 'Please select a pricing option to proceed',
      })
      return
    }
    setStep(2)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FDF8F3] pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Alert className="bg-green-50 border-green-200">
              <AlertTitle className="text-green-800 text-lg font-semibold">Order Submitted Successfully!</AlertTitle>
              <AlertDescription className="text-green-700">
                Thank you for your order. Our team will review your request and contact you shortly with further details. 
                If you have any questions, please don't hesitate to reach out to us.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDF8F3] pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif text-center mb-8">Custom Orders</h1>
          
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {pricingOptions.map((option) => (
                    <Card
                      key={option.id}
                      className={`cursor-pointer transition-all ${
                        selectedOption === option.id
                          ? 'ring-2 ring-orange-500 shadow-lg'
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-serif">{option.name}</h3>
                            <p className="text-2xl font-serif text-orange-500">
                              ${option.price}
                              <span className="text-sm text-gray-500">/person</span>
                            </p>
                          </div>
                          {selectedOption === option.id && (
                            <div className="h-6 w-6 bg-orange-500 rounded-full flex items-center justify-center">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">{option.description}</p>
                        <ul className="space-y-2">
                          {option.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <Check className="h-4 w-4 text-orange-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {form.formState.errors.pricingOption && (
                  <p className="text-red-500 text-center mb-4">
                    {form.formState.errors.pricingOption.message}
                  </p>
                )}
                <div className="text-center">
                  <Button
                    onClick={proceedToDetails}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Continue to Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="bg-orange-50 p-4 rounded-lg mb-6">
                      <p className="text-orange-800">
                        Selected Package: {' '}
                        <span className="font-semibold">
                          {pricingOptions.find(opt => opt.id === selectedOption)?.name} - $
                          {pricingOptions.find(opt => opt.id === selectedOption)?.price}/person
                        </span>
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="customerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Delivery Address</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter your full address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="deliveryInstructions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Delivery Instructions (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Any specific delivery instructions?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specialRequirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requirements (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Any dietary restrictions or special requests?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Order'}
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

