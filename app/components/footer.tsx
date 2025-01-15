import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#FDF8F3] border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Premier Kitchen</h3>
            <p className="text-gray-600 mb-4">
              Elevating Culinary Experiences Across Pennsylvania
            </p>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <a href="tel:+15551234567" className="text-gray-600 hover:text-gray-900">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:info@premierkitchen.com" className="text-gray-600 hover:text-gray-900">
                  info@premierkitchen.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-600">
                  123 Main St, Anytown, PA 12345
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/menu" className="block text-gray-600 hover:text-gray-900">
                Build a Menu
              </Link>
              <Link href="/specials" className="block text-gray-600 hover:text-gray-900">
                Monthly Specials
              </Link>
              <Link href="/packages" className="block text-gray-600 hover:text-gray-900">
                Catering Packages
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Premier Kitchen Food Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

