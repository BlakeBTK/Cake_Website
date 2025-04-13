import Image from "next/image"
import Link from "next/link"
import { Cake, Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF8F5]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-rose-700">
                  About Sweet Delights
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Crafting delicious memories since 2010. Our passion is creating beautiful, custom cakes for your
                  special moments.
                </p>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex items-center justify-center">
              <Image
                alt="Bakery interior"
                className="rounded-xl object-cover"
                height={500}
                src="/placeholder.svg?height=500&width=500&text=Our+Bakery"
                width={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">Our Story</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How Sweet Delights came to be
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8 space-y-6 text-gray-600">
            <p>
              Sweet Delights began in 2010 when our founder, Emma Johnson, decided to turn her passion for baking into a
              business. What started as a small operation in her home kitchen quickly grew as word spread about her
              delicious and beautiful custom cakes.
            </p>
            <p>
              In 2015, we opened our first storefront in downtown Anytown, where we've been serving the community ever
              since. Our team has grown to include five talented bakers and decorators, each bringing their unique
              skills and creativity to our cakes.
            </p>
            <p>
              We believe that every celebration deserves a cake that not only looks amazing but tastes incredible too.
              That's why we use only the finest ingredients and bake everything fresh to order. From weddings and
              birthdays to anniversaries and graduations, we've been honored to be part of thousands of special moments
              in our customers' lives.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="w-full py-12 md:py-24 bg-[#FFF8F5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">
                Meet Our Team
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The talented people behind our delicious creations
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 items-start pt-10">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-rose-600">{member.role}</p>
                  <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">Our Values</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What drives us every day
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 items-start pt-10">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                <Cake className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold">Quality Ingredients</h3>
              <p className="text-gray-500">
                We use only the finest, freshest ingredients in all our cakes and never take shortcuts.
              </p>
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
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Made with Love</h3>
              <p className="text-gray-500">
                Every cake is crafted with care and attention to detail, just as if it were for our own family.
              </p>
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
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m7 10 2 2 6-6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Customer Satisfaction</h3>
              <p className="text-gray-500">
                Your happiness is our priority. We work closely with you to create the perfect cake for your occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="w-full py-12 md:py-24 bg-[#FFF8F5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">
                Visit Our Bakery
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Come say hello and try our delicious treats
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 items-start pt-10">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">123 Main Street, Anytown, USA 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 7pm</p>
                  <p className="text-gray-600">Saturday: 9am - 5pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Contact</h3>
                  <p className="text-gray-600">Phone: (555) 123-4567</p>
                  <p className="text-gray-600">Email: info@sweetdelights.com</p>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-rose-600 hover:bg-rose-700">Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Map"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>
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
              <Link href="/custom-order">
                <Button size="lg" variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                  Custom Order
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
const team = [
  {
    name: "Emma Johnson",
    role: "Founder & Head Baker",
    bio: "Emma has been baking since she was a child and turned her passion into Sweet Delights in 2010.",
    image: "/placeholder.svg?height=300&width=300&text=Emma",
  },
  {
    name: "Michael Chen",
    role: "Cake Designer",
    bio: "Michael brings artistic flair to our cakes with his background in fine arts and culinary training.",
    image: "/placeholder.svg?height=300&width=300&text=Michael",
  },
  {
    name: "Sophia Rodriguez",
    role: "Pastry Chef",
    bio: "Sophia specializes in creating delicious fillings and frostings that make our cakes truly special.",
    image: "/placeholder.svg?height=300&width=300&text=Sophia",
  },
]
