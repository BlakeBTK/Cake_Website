import Link from "next/link"
import Image from "next/image"
import { Cake, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF8F5]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-rose-700">
                  Delicious Custom Cakes for Every Occasion
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Handcrafted with love and the finest ingredients. Make your celebration unforgettable with our custom
                  cakes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/cakes">
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                    Browse Our Cakes
                  </Button>
                </Link>
                <Link href="/custom-order">
                  <Button size="lg" variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                    Custom Order
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex items-center justify-center">
              <Image
                alt="Featured cake"
                className="rounded-xl object-cover"
                height={500}
                src="/placeholder.svg?height=500&width=500"
                width={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">
                Our Most Popular Cakes
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our bestsellers that customers love
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start pt-10">
            {featuredCakes.map((cake) => (
              <Link key={cake.id} href={`/cakes/${cake.id}`} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={cake.image || "/placeholder.svg"}
                      alt={cake.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg group-hover:text-rose-600 transition-colors">{cake.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{cake.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <p className="font-medium text-rose-600">${cake.price.toFixed(2)}</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 -mr-2"
                      >
                        View <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/cakes">
              <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                View All Cakes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 bg-[#FFF8F5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">
                How It Works
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ordering your perfect cake is simple
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 items-start pt-10">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                <Cake className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold">Browse Our Selection</h3>
              <p className="text-gray-500">Explore our catalog of beautiful cakes or request a custom design</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-rose-600"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h.01" />
                  <path d="M11 7h.01" />
                  <path d="M15 7h.01" />
                  <path d="M7 11h.01" />
                  <path d="M11 11h.01" />
                  <path d="M15 11h.01" />
                  <path d="M7 15h.01" />
                  <path d="M11 15h.01" />
                  <path d="M15 15h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Place Your Order</h3>
              <p className="text-gray-500">Select your cake, customize it, and choose your delivery date</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-rose-600"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Enjoy Your Cake</h3>
              <p className="text-gray-500">We'll bake and deliver your cake fresh for your special occasion</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/menu">
            <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
              View Our Menu
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">
                What Our Customers Say
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start pt-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#FFF8F5]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 italic">&quot;{testimonial.comment}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 bg-rose-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">
                Ready to Order Your Dream Cake?
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let us make your celebration extra special with a custom cake
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/cakes">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                  Browse Our Cakes
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredCakes = [
  {
    id: "chocolate-dream",
    name: "Chocolate Dream",
    description: "Rich chocolate layers with ganache and chocolate buttercream",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300&text=Chocolate+Cake",
  },
  {
    id: "strawberry-delight",
    name: "Strawberry Delight",
    description: "Fresh strawberry cake with cream cheese frosting",
    price: 42.99,
    image: "/placeholder.svg?height=300&width=300&text=Strawberry+Cake",
  },
  {
    id: "vanilla-elegance",
    name: "Vanilla Elegance",
    description: "Classic vanilla cake with smooth vanilla buttercream",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300&text=Vanilla+Cake",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "The birthday cake was absolutely stunning and tasted even better! Everyone at the party was impressed.",
  },
  {
    name: "Michael Brown",
    rating: 5,
    comment: "Our wedding cake was perfect. The design was exactly what we wanted and the flavor was incredible.",
  },
  {
    name: "Emily Davis",
    rating: 4,
    comment: "Ordered a custom cake for my daughter's graduation. It was beautiful and delicious!",
  },
]
