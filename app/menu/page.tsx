import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MenuPage() {
  return (
    <div className="container px-4 py-8 md:py-12 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-700">Our Menu</h1>
        <p className="mt-4 text-gray-500 md:text-xl max-w-2xl mx-auto">
          Explore our delicious cake options and create your perfect dessert
        </p>
      </div>

      <div className="grid gap-8">
        {/* Cake Flavors */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-rose-600">Cake Flavors</CardTitle>
            <CardDescription>Choose your favorite cake base</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Flavor</TableHead>
                  <TableHead className="w-[300px]">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Chocolate</TableCell>
                  <TableCell>Rich, moist chocolate cake made with premium cocoa</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Vanilla</TableCell>
                  <TableCell>Classic vanilla cake with a light, fluffy texture</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Red Velvet</TableCell>
                  <TableCell>Traditional red velvet with a hint of cocoa and smooth texture</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Fillings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-rose-600">Fillings</CardTitle>
            <CardDescription>Select a delicious filling for between your cake layers</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Filling</TableHead>
                  <TableHead className="w-[300px]">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Peanut Butter</TableCell>
                  <TableCell>Creamy peanut butter filling with the perfect balance of sweet and salty</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cookies and Cream</TableCell>
                  <TableCell>Smooth cream filling with crushed chocolate cookie pieces</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Chocolate Ganache</TableCell>
                  <TableCell>Rich, silky chocolate ganache made with premium chocolate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Strawberry Jam</TableCell>
                  <TableCell>Sweet strawberry jam with real fruit pieces</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Icings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-rose-600">Icings</CardTitle>
            <CardDescription>Choose your perfect frosting to finish your cake</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Icing</TableHead>
                  <TableHead className="w-[300px]">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Vanilla Buttercream</TableCell>
                  <TableCell>Classic, smooth vanilla buttercream that's not too sweet</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cream Cheese</TableCell>
                  <TableCell>Tangy cream cheese frosting, perfect for red velvet cakes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Stabilized Whipped Cream</TableCell>
                  <TableCell>Light, airy whipped cream frosting that holds its shape</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Cake Sizes & Pricing */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-rose-600">Sizes & Pricing</CardTitle>
            <CardDescription>Choose the perfect size for your occasion</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Two 8-inch</TableCell>
                  <TableCell>Two 8-inch cake layers with one layer of filling</TableCell>
                  <TableCell className="text-right">$35.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Three 8-inch</TableCell>
                  <TableCell>Three 8-inch cake layers with two layers of filling</TableCell>
                  <TableCell className="text-right">$45.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mini Cakes</TableCell>
                  <TableCell>Individual mini cakes (size TBD)</TableCell>
                  <TableCell className="text-right">$15.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cookie Cake</TableCell>
                  <TableCell>Giant cookie cake (details TBD)</TableCell>
                  <TableCell className="text-right">$25.99</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="mt-6 text-sm text-gray-500">
              <p>* Prices may vary based on design complexity and special requests</p>
              <p>* Custom designs and decorations available upon request</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-6">
          <Link href="/custom-order">
            <Button className="bg-rose-600 hover:bg-rose-700">
              Place Your Custom Order <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
