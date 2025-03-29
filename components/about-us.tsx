"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Clock, Shield, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-[#2363eb]" />,
      title: "10+ Years",
      description: "Over a decade of experience providing exceptional business services in the UAE market.",
    },
    {
      icon: <Shield className="h-6 w-6 text-[#2363eb]" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your business needs are addressed promptly.",
    },
    {
      icon: <Award className="h-6 w-6 text-[#2363eb]" />,
      title: "Trusted Partner",
      description: "Recognized and approved by government entities and leading businesses across the UAE.",
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
          height="160"
        >
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="absolute -left-20 top-40 w-64 h-64 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                alt="Corporate Team"
                width={600}
                height={450}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
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

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                About <span className="text-[#2363eb]">ZAHRAT UL MIRDIF</span>
              </h2>
              <p className="text-lg text-gray-600">
                We are dedicated to providing exceptional document clearing and business support services in the UAE.
                Our mission is to simplify complex processes and deliver reliable solutions that help businesses thrive
                in this dynamic market. With a commitment to excellence and integrity, we've established ourselves as a
                trusted partner for businesses of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#2363eb]/10 flex items-center justify-center mb-4 mx-auto md:mx-0 group-hover:bg-[#2363eb] group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg text-center md:text-left mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm text-center md:text-left">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

