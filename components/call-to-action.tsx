"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CallToAction() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2363eb]/5 to-gray-50/80 z-0"></div>

      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2363eb]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#2363eb]/10 rounded-full blur-3xl"></div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#2363eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative p-8 md:p-12">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                <div className="absolute transform rotate-45 bg-[#2363eb]/10 w-32 h-32 -top-16 -right-16"></div>
              </div>

              <div className="text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    Ready to <span className="text-[#2363eb]">simplify</span> your business journey?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Let our experts handle the complexities while you focus on growing your business in the UAE.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row justify-center gap-4"
                >
                  <Button
                    asChild
                    className="bg-[#2363eb] hover:bg-[#1b50c4] text-white text-lg py-6 px-10 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(35,99,235,0.3)] h-auto group"
                  >
                    <Link href="#contact">
                      <span className="flex items-center">
                        Get a Free Consultation
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
                      </span>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-[#2363eb] text-[#2363eb] hover:bg-[#2363eb]/10 text-lg py-6 px-10 rounded-full h-auto"
                  >
                    <Link href="/services">View Our Services</Link>
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-8 mt-10"
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
                    <span className="text-gray-700">Trusted by 500+ Businesses</span>
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
                    <span className="text-gray-700">10+ Years Experience</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

