"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Wave SVG Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 800"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,149.3C672,160,768,224,864,229.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#2363eb"
              fillOpacity="0.2"
            ></path>
            <path
              d="M0,352L48,341.3C96,331,192,309,288,309.3C384,309,480,331,576,309.3C672,288,768,224,864,213.3C960,203,1056,245,1152,261.3C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="#2363eb"
              fillOpacity="0.1"
            ></path>
          </svg>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-0 w-72 h-72 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4" ref={heroRef}>
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="ml-1 text-[#2363eb] font-medium md:ml-2">Contact Us</span>
                </div>
              </li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
              Contact Us
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Get In <span className="text-[#2363eb]">Touch</span> With Us
            </h1>
            <p className="text-lg text-gray-600">
              Have questions or need assistance? We're here to help. Reach out to our team for prompt and professional
              support.
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Form and Information Section */}
      <section className="relative py-20 overflow-hidden bg-white" ref={formRef}>
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden">
                <div className="absolute transform rotate-45 bg-[#2363eb]/10 w-32 h-32 -top-16 -left-16"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Send className="h-5 w-5 mr-2 text-[#2363eb]" />
                  Send Us a Message
                </h2>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full border-gray-200 focus:border-[#2363eb] focus:ring-[#2363eb]/20 rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="w-full border-gray-200 focus:border-[#2363eb] focus:ring-[#2363eb]/20 rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="w-full border-gray-200 focus:border-[#2363eb] focus:ring-[#2363eb]/20 rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={4}
                      required
                      className="w-full border-gray-200 focus:border-[#2363eb] focus:ring-[#2363eb]/20 rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2363eb] hover:bg-[#1b50c4] text-white rounded-lg py-6 h-auto transition-all duration-300 hover:shadow-md group"
                  >
                    <span className="flex items-center justify-center">
                      {isSubmitting ? "Sending..." : "Submit"}
                      {!isSubmitting && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#2363eb]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#2363eb]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">Phone</h4>
                    <p className="text-gray-600">+971 54 341 2392</p>
                    <p className="text-gray-600">+971 52 592 0744</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#2363eb]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#2363eb]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">Email</h4>
                    <p className="text-gray-600">info@zahratulmirdif.ae</p>
                    <p className="text-gray-600">support@zahratulmirdif.ae</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#2363eb]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#2363eb]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">Office</h4>
                    <p className="text-gray-600">First Motors - Danube Building, 1st Floor</p>
                    <p className="text-gray-600">Office No. 15/3, Dubai, United Arab Emirates</p>
                    <p className="text-gray-600">P.O. Box 12345</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-semibold text-gray-800 text-lg mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#2363eb]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Business Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="text-gray-800 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="text-gray-800 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50" ref={mapRef}>
        {/* Wave SVG Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
            preserveAspectRatio="none"
            height="120"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-0 w-72 h-72 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
              Find Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-[#2363eb]">Location</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Visit us at our office in Al Mirdif, Dubai</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg relative"
          >
            {/* Map Placeholder - In a real implementation, you would use Google Maps or similar */}
            <div className="bg-gray-200 h-96 w-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#2363eb]/5 z-0"></div>
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-md inline-flex flex-col items-center">
                <MapPin className="h-8 w-8 text-[#2363eb] mb-2" />
                <p className="text-gray-800 font-medium">Al Mirdif, Dubai, United Arab Emirates</p>
                <p className="text-gray-600 text-sm">Google Maps would be integrated here</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave SVG Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
            preserveAspectRatio="none"
            height="120"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </main>
  )
}
