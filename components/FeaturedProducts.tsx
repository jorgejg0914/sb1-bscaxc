import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const featuredProducts = [
  { id: 1, name: "Enterprise Server Solution", price: 4999, image: "/placeholder.svg" },
  { id: 2, name: "Business Analytics Software", price: 1999, image: "/placeholder.svg" },
  { id: 3, name: "Corporate Security Package", price: 2999, image: "/placeholder.svg" },
]

const FeaturedProducts = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="relative w-[200px] h-[200px] mx-auto">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>${product.price.toLocaleString()}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts