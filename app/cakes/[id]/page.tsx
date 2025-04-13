"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function CakeDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)

  // In a real app, you would fetch the cake data based on the ID
  // For this example, we'll use a mock cake
  const cake = {
    id: params.id,
    name: "Chocolate Dream Cake",
    description:
      "Rich chocolate layers with ganache and chocolate buttercream. Perfect for birthdays and special celebrations.",
    longDescription:
      "Our Chocolate Dream Cake is a chocolate lover's paradise. Three layers of moist chocolate cake are filled with silky chocolate ganache and covered in our signature chocolate buttercream. Decorated with chocolate shavings and optional personalized message. This cake is perfect for birthdays, anniversaries, or any celebration that calls for something decadently delicious.",
    price: 45.99,
    images: [
      "/placeholder.svg?height=600&width=600&text=Chocolate+Cake+1",
      "/placeholder.svg?height=600&width=600&text=Chocolate+Cake+2",
      "/placeholder.svg?height=600&width=600&text=Chocolate+Cake+3",
      "/placeholder.svg?height=600&width=600&text=Chocolate+Cake+4",
    ],
    category: "Birthday",
    featured: true,
    sizes: ["6 inch (serves 8)", "8 inch (serves 12)", "10 inch (serves 16)"],
    flavors: ["Chocolate", "Dark Chocolate", "Milk Chocolate"],
    fillings: ["Chocolate Ganache", "Chocolate Mousse", "Chocolate Buttercream"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    nutritionalInfo: {
      calories: "350 per slice",
      fat: "18g",
      carbs: "42g",
      protein: "5g",
    },
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        comment: "This cake was absolutely amazing! So rich and chocolatey. Everyone at the party loved it.",
        date: "June 12, 2023",
      },
      {
        name: "Michael Brown",
        rating: 4,
        comment: "Delicious cake, though a bit rich for some of my guests. The decoration was beautiful.",
        date: "May 3, 2023",
      },
      {
        name: "Emily Davis",
        rating: 5,
        comment: "Perfect birthday cake! Moist, flavorful, and the delivery was right on time.",
        date: "April 18, 2023",
      },
    ],
    relatedProducts: [
      {
        id: "strawberry-delight",
        name: "Strawberry Delight",
        price: 42.99,
        image: "/placeholder.svg?height=300&width=300&text=Strawberry+Cake",
      },
      {
        id: "red-velvet",
        name: "Red Velvet",
        price: 44.99,
        image: "/placeholder.svg?height=300&width=300&text=Red+Velvet",
      },
      {
        id: "vanilla-elegance",
        name: "Vanilla Elegance",
        price: 39.99,
        image: "/placeholder.svg?height=300&width=300&text=Vanilla+Cake",
      },
    ],
  }

  const [selectedImage, setSelectedImage] = useState(cake.images[0])

  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/cakes" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-6">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Cakes
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image src={selectedImage || "/placeholder.svg"} alt={cake.name} fill className="object-cover" />
          </div>
          <div className="flex space-x-2 overflow-auto pb-2">
            {cake.images.map((image, index) => (
              <button
                key={index}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border ${
                  selectedImage === image ? "ring-2 ring-rose-600" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${cake.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{cake.name}</h1>
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">Based on {cake.reviews.length} reviews</span>
            </div>
            <p className="mt-4 text-xl font-bold text-rose-600">${cake.price.toFixed(2)}</p>
            <p className="mt-4 text-gray-600">{cake.description}</p>
          </div>

          <div className="space-y-4 border-t border-b py-6">
            <div className="space-y-2">
              <Label htmlFor="size">Size</Label>
              <Select defaultValue={cake.sizes[0]}>
                <SelectTrigger id="size" className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {cake.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="flavor">Flavor</Label>
              <RadioGroup defaultValue={cake.flavors[0]} className="flex flex-col space-y-1">
                {cake.flavors.map((flavor) => (
                  <div key={flavor} className="flex items-center space-x-2">
                    <RadioGroupItem value={flavor} id={`flavor-${flavor}`} />
                    <Label htmlFor={`flavor-${flavor}`}>{flavor}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="filling">Filling</Label>
              <Select defaultValue={cake.fillings[0]}>
                <SelectTrigger id="filling" className="w-full">
                  <SelectValue placeholder="Select filling" />
                </SelectTrigger>
                <SelectContent>
                  {cake.fillings.map((filling) => (
                    <SelectItem key={filling} value={filling}>
                      {filling}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message on Cake (Optional)</Label>
              <Input id="message" placeholder="Happy Birthday, John!" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <span className="text-lg">-</span>
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <span className="text-lg">+</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <Button size="lg" className="flex-1 bg-rose-600 hover:bg-rose-700">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients & Allergens</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-4">
            <div className="prose max-w-none">
              <p>{cake.longDescription}</p>
              <h3 className="text-lg font-medium mt-4">Cake Details</h3>
              <ul>
                <li>Available in multiple sizes to serve 8-16 people</li>
                <li>Choice of chocolate flavors and fillings</li>
                <li>Personalized message available</li>
                <li>Freshly baked to order</li>
                <li>Best consumed within 3 days of delivery</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="ingredients" className="pt-4">
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium">Ingredients</h3>
              <p>
                Flour, sugar, cocoa powder, eggs, butter, milk, baking powder, baking soda, salt, vanilla extract,
                chocolate chips, heavy cream, powdered sugar.
              </p>

              <h3 className="text-lg font-medium mt-4">Allergens</h3>
              <p>Contains: {cake.allergens.join(", ")}</p>

              <h3 className="text-lg font-medium mt-4">Nutritional Information</h3>
              <ul>
                <li>Calories: {cake.nutritionalInfo.calories}</li>
                <li>Fat: {cake.nutritionalInfo.fat}</li>
                <li>Carbohydrates: {cake.nutritionalInfo.carbs}</li>
                <li>Protein: {cake.nutritionalInfo.protein}</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-4">
            <div className="space-y-6">
              {cake.reviews.map((review, index) => (
                <div key={index} className="border-b pb-6 last:border-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{review.name}</p>
                      <div className="mt-1 flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">You May Also Like</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cake.relatedProducts.map((product) => (
            <Link key={product.id} href={`/cakes/${product.id}`} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg group-hover:text-rose-600 transition-colors">{product.name}</h3>
                  <p className="font-medium text-rose-600 mt-2">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
