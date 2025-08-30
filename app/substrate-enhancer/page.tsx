"use client"
import { Search, ShoppingCart, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"

export default function SubstrateEnhancerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-slate-400 text-white text-center py-2 text-sm">
        What to know about Ginkgo Oyster | READ THE BLOG
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-sm text-gray-600">
              <span className="mr-4">My Account</span>
              <span className="mr-4">Contact Us</span>
              <span>800-792-6220</span>
            </div>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Input type="search" placeholder="Search products..." className="pr-10" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <ShoppingCart className="h-4 w-4 mr-1" />
              <span className="text-red-600">$0.00</span>
              <span className="ml-2">View Cart</span>
            </div>
          </div>

          {/* Logo and Navigation */}
          <div className="text-center py-6" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <style jsx>{`
    nav {
      background: #bcb1a0;
      width:100%;
    }

    nav ul {
      list-style: none;
      display: flex;
      width:100%;
      justify-content:space-evenly;
    }

    nav ul li {
      position: relative;
    }

    nav > ul > li {
      flex: 1;
      text-align: center;
    }

    nav h1, nav p {
      display: block;
      padding: 14px 20px;
      color: #fff;
      text-decoration: none;
      transition: background 0.3s;
    }

    nav h1:hover, nav p:hover {
      background: #6C4F3D;
    }

    nav ul li ul {
      position: absolute;
      top: 100%;
      left: 0;
      background: #6C4F3D;
      min-width: 180px;
      display: none;
      flex-direction: column;
      z-index: 1000;
    }

    nav ul li:hover > ul {
      display: flex;
    }

    nav ul li ul li h1{
      padding: 12px 16px;
      text-align: left;
      white-space: nowrap;
    }

    nav ul li ul li h1:hover, nav ul li ul li p:hover {
      background: #555;
      text-decoration:underline;
    }
      nav h1{
      font-size:16px;
      font-weight: 400;
    line-height: 1.42857143;
      }
    }`}</style>
              <Image src="/logo.png" alt="Field & Forest Products" style={{marginBottom:'10px'}} className="h-20 mr-4" />
            <nav className="bg-tan-200 py-3">
              <ul className="flex justify-center space-x-8 text-sm font-medium text-gray-700">
                <li><p>
                  SHOP
                </p>
                <ul>
                  <li><h1>Shipping-Included Items</h1></li>
<li><p>Shiitake Spawn Inoculation Bundles</p></li>  
<li><p>Inoculation Tool Bundles</p></li>  
<li><p>Bundled Table Top Farm Sets</p></li>  
<li><p>8-Block Sets </p></li>  
<li><h1>By Mushroom</h1></li>
<li><h1>Mushroom Spawn</h1></li>
<li><p>Plug Spawn</p></li>  
<li><p>Sawdust Spawn</p></li>  
<li><p>Grain Spawn</p></li>  
<li><p>Liquid Culture </p></li>  
<li><h1>Mushroom Grow Kits</h1></li>
<li><p>Indoor Grow Kits</p></li>  
<li><p>Outdoor Grow Kits</p></li>  
<li><h1>Sterilized Substrates</h1></li>
<li><h1>Tools</h1></li>
<li><Link href="/supplies"><h1>Supplies</h1></Link></li>
<li><h1>Workshops</h1></li>
<li><h1>Gifts</h1></li>
                  </ul></li>
                <li><p>
                  LEARN
                </p></li>
                <li><p>
                  OUR STORY
                </p></li>
                <li><p>
                  RESOURCES
                </p></li>
                <li><p>
                  CULTURE BANK
                </p></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Substrate Enhancer</h1>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Sort By</span>
              <Select defaultValue="product-options">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="product-options">Product options</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Items/Page</span>
              <Select defaultValue="12">
                <SelectTrigger className="w-16">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="48">48</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-1">
                <Button variant="outline" size="sm">
                  <Grid className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Solid Product */}
          <Link href="/substrate-enhancer/liquid" className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Image
                src="/bag.png"
                alt="Solid Substrate Enhancer"
                className="w-full h-48 object-contain mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Solid</h3>
            <p className="text-gray-600 text-sm mb-4">
              Premium solid substrate enhancer for optimal mushroom cultivation. Easy to mix and apply for consistent
              results.
            </p>
            <div className="text-xl font-bold text-gray-800 mb-4">$29.99</div>
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">VIEW OPTIONS</Button>
          </Link>

          {/* Liquid Product */}
          <Link href="/substrate-enhancer/liquid" className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Image
                src="/liquid.png"
                alt="Liquid Substrate Enhancer"
                className="w-full h-48 object-contain mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Liquid</h3>
            <p className="text-gray-600 text-sm mb-4">
              Fast-acting liquid substrate enhancer for rapid nutrient absorption. Perfect for professional cultivation
              operations.
            </p>
            <div className="text-xl font-bold text-gray-800 mb-4">$34.99</div>
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">VIEW OPTIONS</Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <p className="text-sm mb-2">Follow us</p>
            <div className="flex justify-center gap-4 mb-4">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            </div>
            <p className="text-sm">Explore our Newletters and Special Offers</p>
            <Button
              variant="outline"
              className="mt-2 text-white border-white hover:bg-white hover:text-gray-800 bg-transparent"
            >
              SIGN UP NOW
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Quicklinks</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Member Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    View Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Ordering & Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Download a Catalog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Categories</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Learn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Log Kits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Supplies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Recipes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company Information</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Field & Forest Products</h4>
              <ul className="space-y-1">
                <li>Order Toll Free (800) 792-6220</li>
                <li>Email: info@fieldforest.net</li>
                <li>N3296 Kozuzek Rd, Peshtigo WI 54157</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 pt-4 border-t border-gray-700 text-xs">
            <p>© Copyright 2023 Field & Forest Products. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
