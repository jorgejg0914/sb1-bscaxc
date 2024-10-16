import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, TrendingUp, Shield, Users } from 'lucide-react'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategoryGrid from '@/components/CategoryGrid'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Empower Your Business with Our Enterprise Solutions</h1>
              <p className="text-xl text-muted-foreground mb-6">Streamline operations, boost productivity, and drive growth with our cutting-edge B2B products and services.</p>
              <div className="flex space-x-4">
                <Button size="lg">Explore Solutions</Button>
                <Button size="lg" variant="outline">Schedule a Demo</Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Enterprise Solutions"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <FeaturedProducts />

        <CategoryGrid />

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Why Choose B2B Solutions?</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="expertise">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="expertise">Expertise</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                  <TabsTrigger value="innovation">Innovation</TabsTrigger>
                </TabsList>
                <TabsContent value="expertise">
                  <p>With over 20 years of experience, our team of experts provides tailored solutions for businesses of all sizes.</p>
                </TabsContent>
                <TabsContent value="support">
                  <p>Our 24/7 customer support ensures that your business operations run smoothly without interruptions.</p>
                </TabsContent>
                <TabsContent value="innovation">
                  <p>We continuously invest in R&D to bring you the latest technologies and keep your business ahead of the curve.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>Subscribe to our newsletter for the latest product updates and industry insights.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}