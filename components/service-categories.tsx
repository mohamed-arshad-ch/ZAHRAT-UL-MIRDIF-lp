"use client"

import Image from "next/image"
import Link from "next/link"
import { FileText, Briefcase, Shield, Building, Users, Award } from "lucide-react"
import { serviceData } from "@/lib/service-data"
import type { JSX } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ServiceCategories() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Map icons to service IDs
  const serviceIcons: Record<string, JSX.Element> = {
    "pro-services": <FileText className="h-6 w-6 text-[#2363eb]" />,
    "visa-services": <Briefcase className="h-6 w-6 text-[#2363eb]" />,
    "insurance-services": <Shield className="h-6 w-6 text-[#2363eb]" />,
    "business-setup": <Building className="h-6 w-6 text-[#2363eb]" />,
    "it-hr-services": <Users className="h-6 w-6 text-[#2363eb]" />,
    "golden-visa": <Award className="h-6 w-6 text-[#2363eb]" />,
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      {/* Decorative Elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2) rotate(0)"
            >
              <path d="M25 0 L50 14.4 L50 38.6 L25 53 L0 38.6 L0 14.4 Z" fill="none" stroke="#2363eb" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Service <span className="text-[#2363eb]">Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of business services designed to support your success in the UAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group block h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.shortTitle}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-sm font-medium">Learn More →</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#2363eb]/10 group-hover:bg-[#2363eb] flex items-center justify-center mr-3 transition-colors duration-300">
                      {serviceIcons[service.id]}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#2363eb] transition-colors duration-300">
                      {service.shortTitle}
                    </h3>
                  </div>
                  <p className="text-gray-600">{service.shortDescription}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
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
  )
}

