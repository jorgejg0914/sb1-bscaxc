import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const products = [
  { id: 1, name: "Enterprise Server Solution", price: 4999, image: "/placeholder.svg", description: "High-performance server for large-scale operations" },
  { id: 2, name: "Business Analytics Software", price: 1999, image: "/placeholder.svg", description: "Advanced analytics tool for data-driven decisions" },
  { id: 3, name: "Corporate Security Package", price: 2999, image: "/placeholder.svg", description: "Comprehensive security suite for enterprise protection" },
  { id: 4, name: "Cloud Integration Platform", price: 3499, image: "/placeholder.svg", description: "Seamless cloud integration for your business processes" },
  { id: 5, name: "AI-Powered CRM System", price: 2499, image: "/placeholder.svg", description: "Intelligent customer relationship management solution" },
  { id: 6, name: "Enterprise Collaboration Suite", price: 1799, image: "/placeholder.svg", description: "Boost teamwork with our advanced collaboration tools" },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="relative w-full h-[200px]">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>${product.price.toLocaleString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}