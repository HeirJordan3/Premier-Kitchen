import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Basic",
    price: 25,
    features: [
      "Up to 20 guests",
      "3 appetizers",
      "2 main courses",
      "1 dessert",
      "Basic table setup",
    ],
  },
  {
    name: "Standard",
    price: 50,
    features: [
      "Up to 50 guests",
      "5 appetizers",
      "3 main courses",
      "2 desserts",
      "Standard table setup",
      "1 bartender",
    ],
  },
  {
    name: "Premium",
    price: 100,
    features: [
      "Up to 100 guests",
      "7 appetizers",
      "4 main courses",
      "3 desserts",
      "Premium table setup",
      "2 bartenders",
      "Custom menu options",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Pricing Plans</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Choose the perfect plan for your event. All plans include our premium service and high-quality ingredients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
                <p className="text-4xl font-bold mb-6">${plan.price}<span className="text-xl font-normal text-gray-600">/person</span></p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom plan? We've got you covered!</p>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us for Custom Pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

