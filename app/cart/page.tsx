"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"

export default function CartPage() {
  // Sample cart data - in a real app, this would come from a state management solution
  const [cartItems, setCartItems] = useState([
    {
      id: "chocolate-dream",
      name: "Chocolate Dream Cake",
      price: 45.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100&text=Chocolate+Cake",
      options: "8 inch, Chocolate Buttercream",
    },
    {
      id: "strawberry-delight",
      name: "Strawberry Delight Cake",
      price: 42.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100&text=Strawberry+Cake",
      options: "6 inch, Cream Cheese Frosting",
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10.0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="container px-4 py-8 md:py-12 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">Your Cart</h1>
        <p className="mt-4 text-gray-500 md:text-xl">Review your items before checkout</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any cakes to your cart yet.</p>
          <Link href="/cakes">
            <Button className="bg-rose-600 hover:bg-rose-700">Browse Our Cakes</Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4 border-b last:border-0"
                  >
                    <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/cakes/${item.id}`} className="font-medium hover:text-rose-600 transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-500">{item.options}</p>
                      <p className="font-medium text-rose-600 mt-1">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-500"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Link href="/cakes" className="inline-flex items-center text-rose-600 hover:text-rose-700">
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Continue Shopping
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="pt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="coupon">Coupon Code</Label>
                    <div className="flex gap-2">
                      <Input id="coupon" placeholder="Enter coupon" />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-rose-600 hover:bg-rose-700">Proceed to Checkout</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
