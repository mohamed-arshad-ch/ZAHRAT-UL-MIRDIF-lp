import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Service List */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  PRO Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  Visa Assistance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  Insurance Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  Business Setup
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  IT & HR Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
            <p className="text-gray-600 mb-4">Follow us on social media for updates, tips, and business insights.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#2363eb] hover:text-[#1b50c4] transition-colors">
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#2363eb] hover:text-[#1b50c4] transition-colors">
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#2363eb] hover:text-[#1b50c4] transition-colors">
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#2363eb] hover:text-[#1b50c4] transition-colors">
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-l-md border-r-0 focus:ring-[#2363eb]/20 focus:border-[#2363eb]"
              />
              <Button className="bg-[#2363eb] hover:bg-[#1b50c4] text-white rounded-l-none">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} ZAHRAT UL MIRDIF DOCUMENTS CLEARING SERVICES CO.L.L.C. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

