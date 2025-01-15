import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white py-4 px-6 fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif">
          Premier Kitchen
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/lunch-meals" className="text-gray-600 hover:text-gray-900">Lunch Meals</Link>
          <Link href="/meals-on-wheels" className="text-gray-600 hover:text-gray-900">Meals on Wheels</Link>
          <Link href="/custom-orders" className="text-gray-600 hover:text-gray-900">Custom Orders</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-orange-500" />
          <a href="tel:+15551234567" className="text-lg font-medium">
            (555) 123-4567
          </a>
        </div>
      </div>
    </header>
  )
}

