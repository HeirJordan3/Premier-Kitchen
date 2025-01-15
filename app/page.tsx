import Link from 'next/link'
import Image from 'next/image'
import { Utensils, Truck, Package, Star, Quote } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    content: "The Meals on Wheels service has been a blessing. The food is always fresh, delicious, and perfectly portioned. It's made such a difference in my daily life.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Lunch Meal Customer",
    content: "I've been ordering lunch meals for my office team, and the quality is consistently excellent. The variety keeps everyone happy, and the service is always reliable.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Custom Order Client",
    content: "Premier Kitchen catered my company event, and they exceeded all expectations. The attention to detail and quality of food was impressive. Highly recommended!",
    rating: 5
  }
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2371-WM0MsMrj8leyjZ3vCzDNcFOSeQ4CuJ.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-serif mb-6">
                Premier Kitchen Food Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Delicious Lunch Meals & Meals on Wheels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Navigation Section */}
      <section className="relative bg-[#FDF8F3] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Lunch Meals */}
            <div className="text-center">
              <div className="relative mx-auto w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center">
                  <Utensils className="w-16 h-16 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4">Lunch Meals</h3>
              <p className="text-gray-600 mb-4">
                Complete meals including soup, meat, protein, vegetable, and dessert
              </p>
              <Link 
                href="/lunch-meals" 
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                View Lunch Meals →
              </Link>
            </div>

            {/* Meals on Wheels */}
            <div className="text-center">
              <div className="relative mx-auto w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center">
                  <Truck className="w-16 h-16 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4">Meals on Wheels</h3>
              <p className="text-gray-600 mb-4">
                Nutritious frozen meals delivered right to your door
              </p>
              <Link 
                href="/meals-on-wheels" 
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Custom Orders */}
            <div className="text-center">
              <div className="relative mx-auto w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center">
                  <Package className="w-16 h-16 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4">Custom Orders</h3>
              <p className="text-gray-600 mb-4">
                Tailored meal plans for your specific needs
              </p>
              <Link 
                href="/custom-orders" 
                className="text-green-500 hover:text-green-600 font-medium"
              >
                Start Your Order →
              </Link>
            </div>
          </div>
        </div>

        {/* Curved Dividers (Desktop Only) */}
        <div className="hidden md:block">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[230px] -translate-y-1/2 w-[60px] h-[200px] border-r-2 border-dashed border-gray-300 rounded-r-full"></div>
          <div className="absolute top-1/2 left-1/2 transform translate-x-[170px] -translate-y-1/2 w-[60px] h-[200px] border-l-2 border-dashed border-gray-300 rounded-l-full"></div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-15%2014.33.51%20-%20A%20vibrant%20scene%20showing%20a%20Black%20female%20delivery%20person%20in%20a%20Meals%20on%20Wheels%20uniform%20dropping%20off%20a%20stack%20of%20frozen%20meal%20packages%20at%20a%20community%20center-CfiIO5IavHqdljPXo3E9D0ByyPgKmp.webp"
                  alt="Meals on Wheels delivery at community center"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-15%2014.32.24%20-%20A%20vibrant%20and%20cheerful%20scene%20depicting%20a%20Meals%20on%20Wheels%20delivery%20van%20parked%20in%20a%20suburban%20neighborhood.%20The%20van%20is%20branded%20with%20a%20large,%20colorful%20log-wwj2xaRUjzRRyeNVV70yOuHMFlWXI4.webp"
                  alt="Meals on Wheels delivery van"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-[#FDF8F3]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-center mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Read what our valued customers have to say about their experiences with Premier Kitchen
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-orange-500 mb-4" />
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6">{review.content}</p>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

