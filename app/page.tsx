import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

