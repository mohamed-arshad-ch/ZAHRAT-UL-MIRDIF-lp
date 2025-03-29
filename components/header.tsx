"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#2363eb]">ZAHRAT UL MIRDIF</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`transition-colors ${
              pathname === "/" ? "text-[#2363eb]" : "text-gray-700 hover:text-[#2363eb]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`transition-colors ${
              pathname === "/services" || pathname.startsWith("/services/")
                ? "text-[#2363eb]"
                : "text-gray-700 hover:text-[#2363eb]"
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${
              pathname === "/about" ? "text-[#2363eb]" : "text-gray-700 hover:text-[#2363eb]"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`transition-colors ${
              pathname === "/contact" ? "text-[#2363eb]" : "text-gray-700 hover:text-[#2363eb]"
            }`}
          >
            Contact
          </Link>
          {/* <Button className="bg-[#2363eb] hover:bg-[#1b50c4] text-white rounded-md transition-all duration-300 hover:shadow-lg">
            Get a Quote
          </Button> */}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`py-2 transition-colors ${
                pathname === "/" ? "text-[#2363eb]" : "text-gray-700 hover:text-[#2363eb]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`py-2 transition-colors ${
                pathname === "/services" || pathname.startsWith("/services/")
                  ? "text-[#2363eb]"
                  : "text-gray-700 hover:text-[#2363eb]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`py-2 transition-colors ${
                pathname === "/about" ? "text-[#2363eb]" : "text-gray-700 hover:text-[#2363eb]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`py-2 transition-colors ${
                pathname === "/contact" ? "text-[#2363eb]" : "text-gray-700 hover:text-[#2363eb]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="bg-[#2363eb] hover:bg-[#1b50c4] text-white w-full rounded-md transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

