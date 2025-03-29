"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative pt-28 pb-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
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

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content - Takes 7 columns on desktop */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
                Business Services in UAE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Empowering Your <span className="text-[#2363eb]">Business Journey</span> in UAE
              </h1>
              <p className="text-lg text-gray-600 mt-6 max-w-xl mx-auto lg:mx-0">
                Comprehensive solutions for Visa Processing, Business Licensing, Company Setup, and Professional PRO
                Support services to streamline your business operations in the UAE.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                className="bg-[#2363eb] hover:bg-[#1b50c4] text-white rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(35,99,235,0.4)] h-12 px-8"
                size="lg"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#2363eb] text-[#2363eb] hover:bg-[#2363eb]/10 rounded-full h-12 px-8"
                size="lg"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#2363eb]/10 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2363eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Trusted by 500+ Businesses</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#2363eb]/10 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2363eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m12 6 4 6-4 6-4-6 4-6" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">10+ Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Image - Takes 5 columns on desktop */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
                  alt="Business Services"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2363eb]/20 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-[200px] hidden md:block">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#2363eb]/10 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2363eb"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">Fast Processing</span>
                </div>
                <p className="text-xs text-gray-600">Quick and efficient document processing for your business needs</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#2363eb]/10 rounded-full hidden md:block"></div>
              <div className="absolute top-1/2 -right-10 w-12 h-12 bg-[#2363eb]/20 rounded-full hidden md:block"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave SVG */}
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
  )
}

