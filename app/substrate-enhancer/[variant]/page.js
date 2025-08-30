"use client"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  Search,
  ShoppingCart
} from "lucide-react"
import { Input } from "@/components/ui/input"

const productData = {
  solid: {
    name: "Substrate Enhancer - Solid",
    image: '/bag.png',
    description:
      "Premium solid substrate enhancer designed to optimize mushroom growing conditions. This concentrated formula provides essential nutrients and improves substrate structure for enhanced mycelium development and fruiting.",
    variants: [
      { size: "1 lb bag", item: "SE-S1", price: 18.99 },
      { size: "5 lb bag", item: "SE-S5", price: 79.99 },
      { size: "25 lb bag", item: "SE-S25", price: 349.99 },
    ],
  },
  liquid: {
    name: "Substrate Enhancer - Liquid",
    image: '/liquid.png',
    description:
      "Fast-acting liquid substrate enhancer that penetrates quickly into growing media. Perfect for hydrating and enriching substrates with bioavailable nutrients that promote vigorous mushroom growth.",
    variants: [
      { size: "1 gallon", item: "SE-L1", price: 24.99 },
      { size: "5 gallon", item: "SE-L5", price: 109.99 },
      { size: "55 gallon drum", item: "SE-L55", price: 899.99 },
    ],
  },
}

export default function ProductPage({ params }) {
  const { variant } = params

  if (!productData[variant]) {
    notFound()
  }

  const product = productData[variant]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#a8b5a0] text-center py-3">
        <span className="text-gray-700 text-sm">What we know about Golden Oyster</span>
        <button className="ml-4 bg-gray-400 text-white px-4 py-1 text-sm">READ THE BLOG</button>
      </div>

      {/* Top Bar */}
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

      {/* Breadcrumb */}
      <div className="px-6 py-4 text-sm text-gray-600">HOME / SUBSTRATE ENHANCER / {variant.toUpperCase()}</div>

      {/* Product Content */}
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row px-6 pb-8">
        {/* Product Image */}
        <div className="w-1/2 pr-8">
          <div className="relative">
            <Image src={product.image} alt={product.name} width={400} height={400} className="w-full" />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">
              📷 Hover to zoom
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-6">{product.name}</h1>

          {/* Variants */}
          <div className="space-y-4 mb-6">
            {product.variants.map((variant, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{variant.size}</div>
                  <div className="text-sm text-gray-600">Item: {variant.item}</div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold">${variant.price}</span>
                  <div className="flex items-center space-x-2">
                    <button className="bg-gray-300 px-2 py-1 text-sm">-</button>
                    <span className="px-3 py-1 border text-sm">Qty</span>
                    <button className="bg-gray-300 px-2 py-1 text-sm">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-[#a8b5a0] text-white py-3 font-medium mb-8">ADD TO CART</button>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="px-6">
        <div className="flex border-b">
          <button className="px-6 py-3 border-b-2 border-gray-800 font-medium">Details</button>
          <button className="px-6 py-3 text-gray-600">Additional Info</button>
          <button className="px-6 py-3 text-gray-600">Reviews</button>
        </div>

        <div className="py-8 border border-t-0 px-6">
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center space-x-4">
            <span>Follow us</span>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">f</div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">📷</div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">📌</div>
              <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">📺</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-full mr-4"></div>
          </div>

          <div className="flex items-center space-x-4">
            <span>Receive our Newsletter and Special Offers</span>
            <button className="bg-gray-600 px-4 py-2">SIGN UP NOW</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 px-6 py-8 border-t border-gray-700">
          <div>
            <h3 className="font-bold mb-4">Quicklinks</h3>
            <ul className="space-y-2 text-sm">
              <li>Member Account</li>
              <li>FAQs</li>
              <li>Order Tracking</li>
              <li>Ordering & Shipping Information</li>
              <li>Download a Catalog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Shop</li>
              <li>Learn</li>
              <li>Our Story</li>
              <li>Blog</li>
              <li>Recipes</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company Information</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Warranty & Liability</li>
              <li>Return Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Field & Forest Products</h3>
            <div className="text-sm space-y-1">
              <p>Order Toll-Free: (800) 792-6220</p>
              <p>Email: info@fieldforest.net</p>
              <p>501 Hart Dr., Peshtigo WI 54157</p>
            </div>
          </div>
        </div>

        <div className="text-center py-4 border-t border-gray-700 text-sm">
          © Copyright 2025 Field & Forest Products. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
