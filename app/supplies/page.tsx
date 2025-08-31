"use client"
import { Search, ShoppingCart, Facebook, Twitter, Paintbrush as Pinterest, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import Image from "next/image";

export default function SuppliesPage() {
  const products = [
    {
      id: 1,
      name: "Oyster (Pleurotus ostreatus) Culture",
      price: "$12.00",
      image: "/supplies_1.jpg",
    },
    {id: 2,name: "Wax Containers for Mushroom Cultivation",
      price: "$18.50",image: "/supplies_2.jpg",
    },
    {id: 3,name: "Aluminum Identification Tags",
      price: "$8.75",image: "/supplies_3.jpg",
    },
    {id: 4,name: "Mushroom Fruiting Blankets",
      price: "$32.00",image: "/supplies_4.jpg",
    },
    {id: 5,name: "Red Reishi (Ganoderma lucidum) Culture",
      price: "$15.00",image: "/supplies_5.jpg",
    },
    {id: 6,name: "Mushroom Cultivation Spawn Bags",
      price: "$22.50",image: "/supplies_6.jpg",
    },
    {id: 7,name: "Sterilized Straw Logs for Mushrooms",
      price: "$45.00",image: "/supplies_7.jpg",
    },
    {id: 8,name: "Compost Thermometer Gauge",
      price: "$28.99",image: "/supplies_8.jpg",
    },
    {id: 9,name: "Substrate Enhancer",
      price: "$24.99",
      image: "/both.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-gray-600 text-white text-center py-2 text-sm">
        <span className="mr-8">What we know about Golden Oyster</span>
        <span className="bg-white text-gray-600 px-3 py-1 text-xs">READ THE BLOG</span>
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
      flex-wrap:wrap;
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
      <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Main Content Area */}
          <main className="flex-1" style={{display:'flex',flexDirection:'column'}}>
            <div className="mb-6" style={{textAlign:'center'}}>
              <h1 className="text-2xl font-serif text-gray-800 mb-2">Supplies</h1>
              <p className="text-gray-600">Essential supplies for mushroom cultivation</p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
              {products.map((product) => (
                <Link
                href="/substrate-enhancer"
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <Image
                    src={product.image || "/placeholder.svg?height=200&width=200"}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                </Link>
              ))}
            </div>
          </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm">Follow us</span>
              <Facebook className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
              <Pinterest className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
            </div>

            <div className="flex items-center space-x-4">
              <Image src="/mosa.png" alt="Field & Forest Products" className="h-8 w-8" />
              <span className="text-sm">Receive our Newsletter and Special Offers</span>
              <Button className="bg-white text-gray-800 hover:bg-gray-100 text-xs px-4 py-1">SIGN UP NOW</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-8 text-sm">
              <div>
                <h4 className="font-medium mb-3">QuickLinks</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:underline">
                      Member Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Order Tracking
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Ordering & Shipping Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Download a Catalog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-3">Categories</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:underline">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Learn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Recipes
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-3">Company Information</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Warranty & Liability
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Return Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-3">Field & Forest Products</h4>
                <ul className="space-y-1">
                  <li>Order Toll-Free: (800) 792-6220</li>
                  <li>Email: info@fieldforest.net</li>
                  <li></li>
                  <li>N3296 Kozuzek Rd</li>
                  <li>Peshtigo, WI 54157</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
              <p>© Copyright 2025 Field & Forest Products. All Rights Reserved.</p>
              <div className="mt-2">
                <Image src="/placeholder.svg?height=20&width=60" alt="SSL Secured" className="h-5 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
