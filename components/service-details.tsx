"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServiceDetails() {
  const serviceDetails = [
    {
      id: "pro-services",
      title: "PRO & Government Services",
      description: "Our PRO services handle all your government-related paperwork and transactions efficiently.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
      services: [
        "MOL: Open File, E-Signature, Quota Application",
        "Immigration: Establishment Card, Entry Permits",
        "Document Clearing at all Government Departments",
        "Trade License Renewal and Amendments",
        "Ejari Registration and Tenancy Contracts",
        "Company Stamp and Documentation",
        "Legal Translation Services",
        "Power of Attorney Processing",
      ],
    },
    {
      id: "visa-services",
      title: "Visa Assistance",
      description: "Comprehensive visa services for residents, visitors, and employees in the UAE.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      services: [
        "New Residence Visa Applications",
        "Visa Renewals and Amendments",
        "Visit and Tourist Visa Processing",
        "Family Sponsorship Visas",
        "Employment Visas for All Categories",
        "Visa Cancellation and Status Adjustment",
        "Medical Test Coordination",
        "Emirates ID Registration and Renewal",
      ],
    },
    {
      id: "insurance-services",
      title: "Insurance Support",
      description: "Comprehensive insurance solutions for individuals and businesses.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      services: [
        "Health Insurance for Individuals and Groups",
        "Business Liability Insurance",
        "Property and Asset Insurance",
        "Employee Insurance Packages",
        "Insurance Documentation and Processing",
        "Claims Assistance and Follow-up",
        "Insurance Renewal Services",
        "Insurance Consultation and Advisory",
      ],
    },
    {
      id: "business-setup",
      title: "Business Setup",
      description: "Complete business formation and licensing services in the UAE.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      services: [
        "Mainland Company Formation",
        "Free Zone Company Setup",
        "Trade License Acquisition",
        "Corporate Bank Account Opening Assistance",
        "Business Activity Selection and Approval",
        "Office Space and Location Guidance",
        "Legal Structure Consultation",
        "Business Expansion Services",
      ],
    },
    {
      id: "it-hr-services",
      title: "IT & HR Services",
      description: "Technology and human resource solutions for your business.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      services: [
        "IT Infrastructure Setup and Support",
        "HR Policy Development",
        "Recruitment and Staffing Assistance",
        "Payroll Management Services",
        "Employee Documentation and WPS Setup",
        "Training and Development Coordination",
        "Performance Management Systems",
        "IT Security and Compliance",
      ],
    },
    {
      id: "golden-visa",
      title: "Golden Visa",
      description: "Long-term residence visa services for investors and specialized talents.",
      image:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      services: [
        "Eligibility Assessment for Golden Visa",
        "Documentation Preparation and Verification",
        "Application Submission and Follow-up",
        "Investor Golden Visa Processing",
        "Specialized Talent Visa Applications",
        "Family Member Inclusion",
        "Golden Visa Renewal Services",
        "Post-Approval Support and Guidance",
      ],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {serviceDetails.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`py-16 ${index !== serviceDetails.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 lg:order-1 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative overflow-hidden rounded-xl shadow-md max-w-md mx-auto">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover grayscale"
                  />
                </div>
              </div>
              <div className={`order-1 lg:order-2 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2363eb]/10 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-[#2363eb]" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="bg-[#2363eb] hover:bg-[#1b50c4] text-white rounded-md transition-all duration-300 hover:shadow-lg"
                  onClick={() => (window.location.href = "#contact")}
                >
                  Contact Us for Assistance
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

