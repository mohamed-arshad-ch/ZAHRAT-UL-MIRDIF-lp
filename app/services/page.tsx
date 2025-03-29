"use client"
import Image from "next/image"
import Link from "next/link"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ServiceCategories from "@/components/service-categories"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"


import { ChevronRight, Target, Eye, Shield, Clock, Users, Award, Zap, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
export default function ServicesPage() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })


  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
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

        {/* Decorative Circles */}
        <div className="absolute top-40 left-0 w-64 h-64 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

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
                  <span className="ml-1 text-[#2363eb] font-medium md:ml-2">Services</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
              Our Services
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Discover Our <span className="text-[#2363eb]">Services</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                Your Trusted Partner for PRO, Business Setup & Visa Solutions in UAE
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ZAHRAT UL MIRDIF DOCUMENTS CLEARING SERVICES CO.L.L.C is a premier business services provider in the
                UAE. With over a decade of experience, we've established ourselves as a trusted partner for businesses
                of all sizes. Our commitment to excellence, integrity, and customer satisfaction has made us a preferred
                choice for document clearing, visa processing, business setup, and PRO services across the Emirates.
              </p>

              {/* Navigation Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#2363eb] hover:bg-[#1b50c4] text-white rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#2363eb] text-[#2363eb] hover:bg-[#2363eb]/10 rounded-full"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                  alt="ZAHRAT UL MIRDIF Team"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2363eb]/20 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#2363eb] rounded-2xl z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2363eb]/10 rounded-2xl z-0"></div>

              {/* Stats Card */}
              <div className="absolute -bottom-10 -right-10 bg-white rounded-xl shadow-lg p-5 z-20 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#2363eb]/10 rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2363eb"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-800">98%</div>
                    <div className="text-sm text-gray-500">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
      {/* Service Categories Grid */}
      <ServiceCategories />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

