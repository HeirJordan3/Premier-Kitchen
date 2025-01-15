import Image from 'next/image'
import { Button } from "@/components/ui/button"

const lunchMeals = [
  {
    name: "Grilled Chicken Delight",
    description: "Tender grilled chicken breast with charred vegetables, served with a garden fresh salad, homemade soup, and chef's choice dessert.",
    price: "$12.99",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grilled%20Chicken%20Delight%20-lHLo0vLvIIzmWjQG4JzMaPgKo7H8E2.jpeg"
  },
  {
    name: "Hearty Beef Stew",
    description: "Slow-simmered beef stew with tender chunks of meat, carrots, and potatoes in a rich gravy. Served with fresh bread and dessert.",
    price: "$13.99",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hearty%20Beef%20Stew%20-ZY6ooxHeUlQ4FXh8w777tZ6uBmnmHR.jpeg"
  },
  {
    name: "Vegetarian Pasta Primavera",
    description: "Fresh pasta tossed with seasonal vegetables in a light herb sauce, served with minestrone soup, garlic bread, and fresh fruit.",
    price: "$11.99",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vegetarian%20Pasta%20Primavera%20-ZGVFoRbuJA8KOfm6b51q9S59pM7kxF.jpeg"
  },
  {
    name: "Baked Salmon Plate",
    description: "Herb-crusted baked salmon served with steamed broccoli, quinoa pilaf, tomato bisque, and a refreshing lemon dessert.",
    price: "$14.99",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Baked%20Salmon%20Plate%20Herb-crusted%20baked%20salmon,%20quinoa%20pilaf,%20tomato%20bisque,%20steamed%20broccoli,%20and%20lemon%20tart.-0fHONFAnSitwj6bf8vHpkCjC9fSVaN.jpeg"
  }
]

export default function LunchMeals() {
  return (
    <div className="pt-16">
      <section className="bg-[#FDF8F3] py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">Our Lunch Meals</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Each meal comes complete with soup, protein, vegetables, and dessert. Made fresh daily using quality ingredients for a satisfying dining experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {lunchMeals.map((meal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-[1.02]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={meal.image || "/placeholder.svg"}
                    alt={meal.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">{meal.name}</h3>
                  <p className="text-gray-600 mb-4">{meal.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-serif text-orange-500">{meal.price}</span>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

