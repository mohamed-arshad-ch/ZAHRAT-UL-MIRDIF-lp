"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      position: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "ZAHRAT UL MIRDIF made the entire visa process seamless. Their team was professional and responsive throughout. I was impressed by their attention to detail and commitment to meeting deadlines. Highly recommended for any business in the UAE!",
    },
    {
      name: "Sarah Johnson",
      position: "HR Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "We've been working with ZAHRAT UL MIRDIF for our company's PRO services for over 3 years. Their attention to detail and efficiency is unmatched. They've saved us countless hours and streamlined our operations significantly.",
    },
    {
      name: "Mohammed Al Qasimi",
      position: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
      text: "Setting up my business in Dubai was made simple with their comprehensive support. They handled all the paperwork professionally and guided me through every step of the process. I couldn't have asked for a better partner.",
    },
    {
      name: "Lisa Chen",
      position: "Operations Manager",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4,
      text: "Their team provided excellent guidance through the complex regulatory requirements. Very knowledgeable and helpful. They were always available to answer my questions and provide updates on our application status.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const testimonialsRef = useRef<HTMLDivElement>(null)

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const nextTestimonial = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gray-50">
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
      <div className="absolute top-40 left-0 w-72 h-72 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-[#2363eb]">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from businesses we've helped throughout the UAE
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative max-w-4xl mx-auto" ref={testimonialsRef}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#2363eb]/20 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-[#2363eb]/20 rounded-full z-0"></div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-xl">
                      <div className="flex flex-col md:flex-row md:items-center mb-6">
                        <div className="relative w-20 h-20 mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2363eb]/20 to-[#2363eb]/10 animate-pulse"></div>
                          <div className="absolute inset-1 overflow-hidden rounded-full">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                            />
                          </div>
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="font-semibold text-gray-800 text-xl">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.position}</p>
                          <div className="flex mt-1 justify-center md:justify-start">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating ? "text-[#2363eb] fill-[#2363eb]" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <svg
                          className="absolute -top-4 -left-4 h-8 w-8 text-[#2363eb]/20"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-gray-600 italic relative z-10">{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#2363eb] hover:bg-[#2363eb]/5 transition-colors border border-gray-100 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#2363eb] scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#2363eb] hover:bg-[#2363eb]/5 transition-colors border border-gray-100 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile Stacked Layout */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-14 h-14 mr-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2363eb]/20 to-[#2363eb]/10"></div>
                  <div className="absolute inset-1 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full grayscale"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < testimonial.rating ? "text-[#2363eb] fill-[#2363eb]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">&ldquo;{testimonial.text}&rdquo;</p>
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

