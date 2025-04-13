import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ShoppingCart, Menu, Cake } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sweet Delights Bakery",
  description: "Custom cakes for every occasion",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                  <MobileNav />
                  <Link href="/" className="flex items-center gap-2">
                    <Cake className="h-6 w-6 text-rose-600" />
                    <span className="text-xl font-bold tracking-tight text-rose-700">Sweet Delights</span>
                  </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                  <Link href="/" className="text-sm font-medium hover:text-rose-600 transition-colors">
                    Home
                  </Link>
                  <Link href="/cakes" className="text-sm font-medium hover:text-rose-600 transition-colors">
                    Cakes
                  </Link>
                  <Link href="/menu" className="text-sm font-medium hover:text-rose-600 transition-colors">
                    Menu
                  </Link>
                  <Link href="/custom-order" className="text-sm font-medium hover:text-rose-600 transition-colors">
                    Custom Order
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-rose-600 transition-colors">
                    About Us
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:text-rose-600 transition-colors">
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-2">
                  <Link href="/cart">
                    <Button variant="ghost" size="icon" className="relative">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-600 text-[10px] font-medium text-white">
                        0
                      </span>
                      <span className="sr-only">Cart</span>
                    </Button>
                  </Link>
                  <Link href="/login" className="hidden md:block">
                    <Button variant="ghost" size="sm" className="text-sm">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register" className="hidden md:block">
                    <Button size="sm" className="bg-rose-600 hover:bg-rose-700 text-sm">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t bg-muted/40">
              <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-start md:justify-between md:py-12">
                <div className="flex flex-col gap-2">
                  <Link href="/" className="flex items-center gap-2">
                    <Cake className="h-6 w-6 text-rose-600" />
                    <span className="text-xl font-bold tracking-tight text-rose-700">Sweet Delights</span>
                  </Link>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Handcrafted cakes for every occasion. Made with love and the finest ingredients.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Shop</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/cakes"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          All Cakes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/custom-order"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Custom Order
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cart"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Cart
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Company</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/about"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/faq"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Legal</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/terms"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Terms
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Privacy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Connect</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="#"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Instagram
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Facebook
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Pinterest
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t py-6">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Sweet Delights Bakery. All rights reserved.
                  </p>
                  <div className="flex gap-4">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Terms
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Privacy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Cookies
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function MobileNav() {
  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="mr-2" aria-label="Menu">
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  )
}


import './globals.css'