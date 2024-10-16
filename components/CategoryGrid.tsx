import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, TrendingUp, Shield, Users } from 'lucide-react'

const categories = [
  { name: "Hardware", icon: <Building2 className="h-6 w-6" /> },
  { name: "Software", icon: <TrendingUp className="h-6 w-6" /> },
  { name: "Security", icon: <Shield className="h-6 w-6" /> },
  { name: "Consulting", icon: <Users className="h-6 w-6" /> },
]

const CategoryGrid = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary-foreground rounded-full p-4 inline-block">
                {category.icon}
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>{category.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid