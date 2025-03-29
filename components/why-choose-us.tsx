"use client"
import Image from "next/image"
import { Zap, DollarSign, Users, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const reasons = [
    {
      icon: <Zap className="h-8 w-8 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
      title: "Fast Process",
      description:
        "We expedite all document processing to save you valuable time and get your business running quickly.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
      title: "Transparent Pricing",
      description:
        "Clear fee structure with no hidden costs or surprises, ensuring you know exactly what you're paying for.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
      title: "Expert Team",
      description:
        "Our professionals have extensive knowledge of UAE regulations and years of experience in business services.",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
      title: "Complete Support",
      description:
        "End-to-end assistance for all your business needs, from initial setup to ongoing operational support.",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

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
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Sets Us <span className="text-[#2363eb]">Apart</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional service with a focus on efficiency, transparency, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group z-10"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform rotate-45 bg-[#2363eb]/10 group-hover:bg-[#2363eb]/20 w-16 h-16 -top-8 -right-8 transition-colors duration-300"></div>
              </div>

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#2363eb]/10 group-hover:bg-[#2363eb] mb-6 transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#2363eb] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#2363eb]/10 to-[#2363eb]/5 p-8 rounded-2xl max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#2363eb]/20 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2363eb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              </svg>
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "ZAHRAT UL MIRDIF made the entire visa process seamless. Their team was professional and responsive
              throughout. I was impressed by their attention to detail and commitment to meeting deadlines."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Ahmed Al Mansouri"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">Ahmed Al Mansouri</h4>
                <p className="text-sm text-gray-600">Business Owner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

