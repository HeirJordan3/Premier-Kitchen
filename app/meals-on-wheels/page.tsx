import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export default function MealsOnWheels() {
  return (
    <div className="pt-16">
      <section className="bg-[#FDF8F3] py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">Meals on Wheels</h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-15%2014.36.56%20-%20A%20realistic%20and%20vibrant%20display%20of%20a%20variety%20of%20frozen%20meals%20arranged%20neatly%20on%20a%20kitchen%20countertop.%20The%20meals%20are%20packaged%20in%20clear%20containers%20with%20-kUtSwy8b2hg12dHyS2asVAuZZILQhx.webp"
                    alt="Variety of nutritious frozen meals in clear containers"
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover md:h-full md:w-48"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-serif mb-4">Nutritious Frozen Meals Delivered to Your Door</h2>
                  <p className="text-gray-600 mb-6">
                    Our Meals on Wheels program provides delicious, nutritionally balanced frozen meals for those who need convenient meal options. Perfect for seniors, individuals with limited mobility, or anyone looking for easy, healthy meal solutions.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Variety of meal options to choose from</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Nutritionally balanced and dietitian-approved</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Easy to heat and serve</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Flexible delivery schedules</span>
                    </li>
                  </ul>
                  <Button>Learn More About Our Program</Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-4">How It Works</h3>
              <ol className="text-left inline-block space-y-4">
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-blue-500 text-white rounded-full w-6 h-6 mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Choose your meals from our diverse menu options</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-blue-500 text-white rounded-full w-6 h-6 mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Select your preferred delivery frequency (weekly, bi-weekly, or monthly)</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-blue-500 text-white rounded-full w-6 h-6 mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>Receive your frozen meals, conveniently packaged and ready to heat</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-blue-500 text-white rounded-full w-6 h-6 mr-3 mt-0.5 flex-shrink-0">4</span>
                  <span>Enjoy nutritious and delicious meals at your convenience</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

