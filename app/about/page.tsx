"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Target, Eye, Shield, Clock, Users, Award, Zap, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutPage() {
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
      {/* Hero Section */}
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
                  <span className="ml-1 text-[#2363eb] font-medium md:ml-2">About Us</span>
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
                About Our Company
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                About <span className="text-[#2363eb]">ZAHRAT UL MIRDIF</span>
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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

      {/* Mission and Vision Section */}
      <section className="relative py-20 overflow-hidden bg-white" ref={missionRef}>
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mission & <span className="text-[#2363eb]">Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                <div className="absolute transform rotate-45 bg-[#2363eb]/10 w-24 h-24 -top-12 -right-12"></div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#2363eb]/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Target className="h-8 w-8 text-[#2363eb]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Our Mission</h3>
                <p className="text-gray-600 text-center md:text-left">
                  To simplify and streamline business processes in the UAE by providing efficient, reliable, and
                  comprehensive document clearing and business support services. We aim to be the bridge that connects
                  businesses to opportunities, helping them navigate regulatory requirements with ease and confidence.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden">
                <div className="absolute transform rotate-45 bg-[#2363eb]/10 w-24 h-24 -top-12 -left-12"></div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#2363eb]/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Eye className="h-8 w-8 text-[#2363eb]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Our Vision</h3>
                <p className="text-gray-600 text-center md:text-left">
                  To be the leading business services provider in the UAE, recognized for our excellence, integrity, and
                  innovation. We envision a future where businesses can focus on their core operations while we handle
                  the complexities of documentation, compliance, and administrative processes with precision and care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50" ref={valuesRef}>
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
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
              Our Principles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core <span className="text-[#2363eb]">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our operations and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Value Cards */}
            {[
              {
                icon: (
                  <Shield className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                ),
                title: "Integrity",
                description:
                  "We uphold the highest standards of honesty, transparency, and ethical conduct in all our dealings.",
              },
              {
                icon: <Zap className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />,
                title: "Efficiency",
                description:
                  "We strive to deliver prompt, accurate, and cost-effective solutions that save our clients time and resources.",
              },
              {
                icon: (
                  <Users className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                ),
                title: "Customer Focus",
                description:
                  "We place our clients at the center of everything we do, tailoring our services to meet their unique needs.",
              },
              {
                icon: (
                  <BarChart className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                ),
                title: "Innovation",
                description:
                  "We continuously seek new and better ways to serve our clients, embracing technology and best practices.",
              },
              {
                icon: (
                  <Award className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                ),
                title: "Excellence",
                description:
                  "We are committed to delivering exceptional quality in every service we provide, exceeding expectations.",
              },
              {
                icon: (
                  <Clock className="h-6 w-6 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                ),
                title: "Reliability",
                description:
                  "We build trust through consistent performance, dependability, and unwavering commitment to our promises.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#2363eb]/10 group-hover:bg-[#2363eb] flex items-center justify-center mb-4 mx-auto transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center group-hover:text-[#2363eb] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
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

      {/* Timeline Section */}
      <section className="relative py-20 overflow-hidden bg-white" ref={timelineRef}>
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Key <span className="text-[#2363eb]">Milestones</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Key milestones in our growth and development</p>
          </motion.div>

          {/* Desktop Timeline (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="hidden md:block relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-[#2363eb]/10 via-[#2363eb]/30 to-[#2363eb]/10 top-1/2 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-4 gap-4 relative">
              {/* Milestone Cards */}
              {[
                { year: "2010", description: "Founded in Dubai with a small team of 5 professionals" },
                { year: "2015", description: "Expanded services to include business setup and PRO services" },
                { year: "2018", description: "Recognized as a preferred partner by major government entities" },
                { year: "2023", description: "Serving over 500 businesses across the UAE with a team of 30+ experts" },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#2363eb] mx-auto mb-4 relative z-10 flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 transform hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-[#2363eb] mb-2">{milestone.year}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Timeline (visible only on mobile) */}
          <div className="md:hidden relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2363eb]/10 via-[#2363eb]/30 to-[#2363eb]/10"></div>

            <div className="space-y-8">
              {/* Milestone Cards */}
              {[
                { year: "2010", description: "Founded in Dubai with a small team of 5 professionals" },
                { year: "2015", description: "Expanded services to include business setup and PRO services" },
                { year: "2018", description: "Recognized as a preferred partner by major government entities" },
                { year: "2023", description: "Serving over 500 businesses across the UAE with a team of 30+ experts" },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-[#2363eb] flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-4">
                    <h3 className="text-lg font-semibold text-[#2363eb] mb-2">{milestone.year}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

