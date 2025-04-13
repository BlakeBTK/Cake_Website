"use client"

import type React from "react"

import { useState } from "react"
import { Cake, Calendar, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Import the server action at the top of the file
import { submitOrderForm } from "../actions"

export default function CustomOrderPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  // Replace the handleSubmit function with this:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const result = await submitOrderForm(formData)
    if (result.success) {
      setOrderSubmitted(true)
    }
  }

  return (
    <div className="container px-4 py-8 md:py-12 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">Custom Cake Order</h1>
        <p className="mt-4 text-gray-500 md:text-xl max-w-2xl mx-auto">
          Tell us about your dream cake and we'll bring it to life
        </p>
        <p className="mt-2 text-gray-500 md:text-lg max-w-2xl mx-auto">
          We'll get back to you within 24-48 hours after receiving your order request.
        </p>
      </div>

      {orderSubmitted ? (
        <Card className="border-green-100 bg-green-50">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-center text-2xl">Order Submitted Successfully!</CardTitle>
            <CardDescription className="text-center">
              Thank you for your custom cake order. We'll review your request and contact you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              Your order reference:{" "}
              <span className="font-medium">CUS-{Math.floor(100000 + Math.random() * 900000)}</span>
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => (window.location.href = "/")} className="bg-rose-600 hover:bg-rose-700">
              Return to Home
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <div className="flex space-x-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                      step === currentStep
                        ? "bg-rose-600 text-white"
                        : step < currentStep
                          ? "bg-rose-200 text-rose-700"
                          : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-500">Step {currentStep} of 3</div>
            </div>
            <CardTitle>
              {currentStep === 1 && "Cake Details"}
              {currentStep === 2 && "Event Information"}
              {currentStep === 3 && "Contact & Delivery"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Tell us about your perfect cake"}
              {currentStep === 2 && "Tell us about your event"}
              {currentStep === 3 && "Provide your contact and delivery details"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Update the form tag to use the action */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cake-type">Cake Type</Label>
                    <RadioGroup defaultValue="birthday" id="cake-type" className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                        <RadioGroupItem value="birthday" id="birthday" className="peer sr-only" />
                        <Label
                          htmlFor="birthday"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-muted-foreground peer-data-[state=checked]:border-rose-600 [&:has([data-state=checked])]:border-rose-600"
                        >
                          <Cake className="mb-3 h-6 w-6" />
                          Birthday Cake
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="wedding" id="wedding" className="peer sr-only" />
                        <Label
                          htmlFor="wedding"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-muted-foreground peer-data-[state=checked]:border-rose-600 [&:has([data-state=checked])]:border-rose-600"
                        >
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
                            className="mb-3 h-6 w-6"
                          >
                            <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path d="M2 21h20" />
                            <path d="M15.1 21v-5.6c0-1.3.7-2 1.9-2 1.3 0 1.9.7 1.9 2V21" />
                            <path d="M5.1 21v-5.6c0-1.3.7-2 1.9-2 1.3 0 1.9.7 1.9 2V21" />
                            <path d="M10.1 21v-5.6c0-1.3.7-2 1.9-2 1.3 0 1.9.7 1.9 2V21" />
                            <path d="M9 7h6" />
                          </svg>
                          Wedding Cake
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="anniversary" id="anniversary" className="peer sr-only" />
                        <Label
                          htmlFor="anniversary"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-muted-foreground peer-data-[state=checked]:border-rose-600 [&:has([data-state=checked])]:border-rose-600"
                        >
                          <Calendar className="mb-3 h-6 w-6" />
                          Anniversary
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="custom" id="custom" className="peer sr-only" />
                        <Label
                          htmlFor="custom"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-muted-foreground peer-data-[state=checked]:border-rose-600 [&:has([data-state=checked])]:border-rose-600"
                        >
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
                            className="mb-3 h-6 w-6"
                          >
                            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                            <path d="M12 2v2" />
                            <path d="M12 22v-2" />
                            <path d="m17 20.66-1-1.73" />
                            <path d="M11 10.27 7 3.34" />
                            <path d="m20.66 17-1.73-1" />
                            <path d="m3.34 7 1.73 1" />
                            <path d="M14 12h8" />
                            <path d="M2 12h2" />
                            <path d="m20.66 7-1.73 1" />
                            <path d="m3.34 17 1.73-1" />
                            <path d="m17 3.34-1 1.73" />
                            <path d="m7 20.66 1-1.73" />
                          </svg>
                          Other Occasion
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="size">Cake Size</Label>
                      <Select defaultValue="6inch">
                        <SelectTrigger id="size">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="two8inch">Two 8 inch cakes, one layer of filling</SelectItem>
                          <SelectItem value="three8inch">Three 8 inch cakes, two layers of filling</SelectItem>
                          <SelectItem value="mini">Mini cakes (size TBD)</SelectItem>
                          <SelectItem value="cookie">Cookie cake</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="flavor">Cake Flavor</Label>
                      <Select defaultValue="vanilla">
                        <SelectTrigger id="flavor">
                          <SelectValue placeholder="Select flavor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="chocolate">Chocolate</SelectItem>
                          <SelectItem value="vanilla">Vanilla</SelectItem>
                          <SelectItem value="redvelvet">Red Velvet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="filling">Filling</Label>
                      <Select defaultValue="buttercream">
                        <SelectTrigger id="filling">
                          <SelectValue placeholder="Select filling" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pb">Peanut Butter</SelectItem>
                          <SelectItem value="cookies">Cookies and Cream</SelectItem>
                          <SelectItem value="ganache">Chocolate Ganache</SelectItem>
                          <SelectItem value="strawberry">Strawberry Jam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="frosting">Frosting</Label>
                      <Select defaultValue="buttercream">
                        <SelectTrigger id="frosting">
                          <SelectValue placeholder="Select frosting" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buttercream">Vanilla Buttercream</SelectItem>
                          <SelectItem value="cream-cheese">Cream Cheese</SelectItem>
                          <SelectItem value="whipped">Stabilized Whipped Cream</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Cake Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your ideal cake. Include any specific design elements, colors, themes, or dietary restrictions."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reference">Reference Images (Optional)</Label>
                    <Input id="reference" type="file" multiple accept="image/*" />
                    <p className="text-sm text-gray-500">Upload images for design inspiration (max 5 images)</p>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="occasion">Occasion</Label>
                    <Input id="occasion" placeholder="e.g., Birthday, Wedding, Anniversary" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="event-date">Event Date</Label>
                      <Input id="event-date" type="date" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="event-time">Event Time (Optional)</Label>
                      <Input id="event-time" type="time" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input id="guests" type="number" min="1" placeholder="Approximate number of guests" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message on Cake (Optional)</Label>
                    <Input id="message" placeholder="e.g., Happy Birthday Sarah!" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="special-requests">Special Requests</Label>
                    <Textarea
                      id="special-requests"
                      placeholder="Any additional information about your event or special requests"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Delivery Method</Label>
                    <Tabs defaultValue="delivery">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="delivery">Delivery</TabsTrigger>
                        <TabsTrigger value="pickup">Pickup</TabsTrigger>
                      </TabsList>
                      <TabsContent value="delivery" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="address">Delivery Address</Label>
                          <Input id="address" placeholder="Street Address" required />
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input id="zip" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="delivery-instructions">Delivery Instructions (Optional)</Label>
                          <Textarea id="delivery-instructions" placeholder="Any specific instructions for delivery" />
                        </div>
                      </TabsContent>
                      <TabsContent value="pickup" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickup-date">Pickup Date</Label>
                          <Input id="pickup-date" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pickup-time">Pickup Time</Label>
                          <Select defaultValue="morning">
                            <SelectTrigger id="pickup-time">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                              <SelectItem value="evening">Evening (4pm - 7pm)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="rounded-md bg-muted p-4">
                          <p className="text-sm">
                            Pickup Location: <span className="font-medium">Sweet Delights Bakery</span>
                            <br />
                            123 Main Street, Anytown, USA
                            <br />
                            Open Monday-Saturday, 9am-7pm
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {currentStep > 1 ? (
              <Button variant="outline" onClick={handlePrevStep}>
                Previous
              </Button>
            ) : (
              <div></div>
            )}
            {currentStep < 3 ? (
              <Button onClick={handleNextStep} className="bg-rose-600 hover:bg-rose-700">
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-rose-600 hover:bg-rose-700">
                Submit Order
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
