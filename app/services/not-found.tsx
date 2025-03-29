import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ServiceNotFound() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Service Not Found</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We couldn't find the service you're looking for. Please check our available services or contact us for
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#2363eb] hover:bg-[#1b50c4] text-white rounded-md">
              <Link href="/services">View All Services</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#2363eb] text-[#2363eb] hover:bg-[#2363eb]/10">
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

