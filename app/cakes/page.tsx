import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CakesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 bg-[#FFF8F5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">
                Our Cake Collection
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our selection of handcrafted cakes for every occasion
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <Input type="search" placeholder="Search cakes..." className="pl-8 bg-white" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="featured">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cakes.map((cake) => (
              <Link key={cake.id} href={`/cakes/${cake.id}`} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={cake.image || "/placeholder.svg"}
                      alt={cake.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {cake.featured && (
                      <div className="absolute top-2 right-2 bg-rose-600 text-white text-xs font-medium px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{cake.category}</div>
                    <h3 className="font-semibold text-lg group-hover:text-rose-600 transition-colors">{cake.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{cake.description}</p>
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
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronRight className="h-4 w-4 rotate-180" />
              </Button>
              <Button variant="outline" size="sm" className="bg-rose-50 border-rose-200 text-rose-700">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const cakes = [
  {
    id: "chocolate-dream",
    name: "Chocolate Dream",
    description: "Rich chocolate layers with ganache and chocolate buttercream",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300&text=Chocolate+Cake",
    category: "Birthday",
    featured: true,
  },
  {
    id: "strawberry-delight",
    name: "Strawberry Delight",
    description: "Fresh strawberry cake with cream cheese frosting",
    price: 42.99,
    image: "/placeholder.svg?height=300&width=300&text=Strawberry+Cake",
    category: "Birthday",
    featured: false,
  },
  {
    id: "vanilla-elegance",
    name: "Vanilla Elegance",
    description: "Classic vanilla cake with smooth vanilla buttercream",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300&text=Vanilla+Cake",
    category: "Birthday",
    featured: false,
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    description: "Velvety red cake with cream cheese frosting",
    price: 44.99,
    image: "/placeholder.svg?height=300&width=300&text=Red+Velvet",
    category: "Anniversary",
    featured: true,
  },
  {
    id: "lemon-bliss",
    name: "Lemon Bliss",
    description: "Zesty lemon cake with lemon buttercream",
    price: 41.99,
    image: "/placeholder.svg?height=300&width=300&text=Lemon+Cake",
    category: "Birthday",
    featured: false,
  },
  {
    id: "carrot-spice",
    name: "Carrot Spice",
    description: "Spiced carrot cake with cream cheese frosting and walnuts",
    price: 43.99,
    image: "/placeholder.svg?height=300&width=300&text=Carrot+Cake",
    category: "Birthday",
    featured: false,
  },
  {
    id: "wedding-classic",
    name: "Wedding Classic",
    description: "Elegant white cake with buttercream and fondant details",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300&text=Wedding+Cake",
    category: "Wedding",
    featured: true,
  },
  {
    id: "black-forest",
    name: "Black Forest",
    description: "Chocolate cake with cherries and whipped cream",
    price: 46.99,
    image: "/placeholder.svg?height=300&width=300&text=Black+Forest",
    category: "Birthday",
    featured: false,
  },
]
