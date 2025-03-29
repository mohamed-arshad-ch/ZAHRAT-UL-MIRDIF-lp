"use client"
import Image from "next/image"
import Link from "next/link"
import { FileText, Briefcase, Shield, Building, Users, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Visa Assistance",
      description: "Residence, visit, and employment visa processing and renewals.",
      icon: <Briefcase className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      slug: "visa-services",
    },
    {
      title: "PRO Services",
      description: "Document processing, government transactions, and administrative support.",
      icon: <FileText className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
      slug: "pro-services",
    },
    {
      title: "Insurance Support",
      description: "Health, liability, and business insurance solutions and processing.",
      icon: <Shield className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      slug: "insurance-services",
    },
    {
      title: "Business Setup",
      description: "Company formation, licensing, and legal structure establishment.",
      icon: <Building className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      slug: "business-setup",
    },
    {
      title: "IT & HR Services",
      description: "Technology solutions and human resource management support.",
      icon: <Users className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      slug: "it-hr-services",
    },
    {
      title: "Golden Visa",
      description: "Long-term residence visa application and processing for investors.",
      icon: <Award className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
      image:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      slug: "golden-visa",
    },
  ]

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gray-50">
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

      {/* Decorative Circles */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-[#2363eb]">Comprehensive</span> Services
          </h2>
          <div className="w-24 h-1 bg-[#2363eb] mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            We offer a wide range of business support services to help you navigate the UAE market with ease.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
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
                    alt={service.title}
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
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#2363eb] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
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

