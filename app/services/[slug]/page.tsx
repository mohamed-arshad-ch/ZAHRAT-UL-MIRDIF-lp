"use client"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Check, FileText, Briefcase, Shield, Building, Calculator, Award } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { getServiceBySlug, serviceData } from "@/lib/service-data"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: relatedRef, inView: relatedInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with Breadcrumbs */}
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
        <div className="absolute top-40 left-0 w-64 h-64 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4" ref={heroRef}>
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex mb-8"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-600 hover:text-[#2363eb] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <Link href="/services" className="ml-1 text-gray-600 hover:text-[#2363eb] transition-colors md:ml-2">
                    Services
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="ml-1 text-[#2363eb] font-medium md:ml-2">{service.shortTitle}</span>
                </div>
              </li>
            </ol>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
                {service.shortTitle}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{service.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{service.description}</p>

              <div className="space-y-4 mb-8">
                {service.services.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2363eb]/10 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-[#2363eb]" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href={`https://wa.me/971525920744?text=Hello, I'm interested in your ${service.shortTitle} services. Can you provide more information?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full py-3 px-6 transition-all duration-300 hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send Message on WhatsApp
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={service.detailImage || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2363eb]/20 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[#2363eb] rounded-2xl z-0 hidden lg:block"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2363eb]/10 rounded-2xl z-0 hidden lg:block"></div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50" ref={relatedRef}>
        {/* Decorative Elements */}
        <div className="absolute top-40 right-0 w-72 h-72 bg-[#2363eb]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#2363eb]/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={relatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 bg-[#2363eb]/10 text-[#2363eb] rounded-full text-sm font-medium mb-4">
              Discover More
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore <span className="text-[#2363eb]">Other Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our full range of business support services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show 3 related services, excluding the current one */}
            {serviceData
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="bg-white rounded-xl border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 block h-full group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#2363eb]/10 group-hover:bg-[#2363eb] flex items-center justify-center mb-4 transition-colors duration-300">
                      {relatedService.id === "pro-services" && (
                        <FileText className="h-5 w-5 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                      )}
                      {relatedService.id === "visa-services" && (
                        <Briefcase className="h-5 w-5 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                      )}
                      {relatedService.id === "insurance-services" && (
                        <Shield className="h-5 w-5 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                      )}
                      {relatedService.id === "business-setup" && (
                        <Building className="h-5 w-5 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                      )}
                      {relatedService.id === "corporate-services" && (
                        <Calculator className="h-5 w-5 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                      )}
                      {relatedService.id === "golden-visa" && (
                        <Award className="h-5 w-5 text-[#2363eb] group-hover:text-white transition-colors duration-300" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#2363eb] transition-colors duration-300">
                      {relatedService.shortTitle}
                    </h3>
                    <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                    <span className="text-[#2363eb] font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
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

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
