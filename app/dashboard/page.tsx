'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Mock data for demonstration
const mockNeeds = [
  { id: 1, camp: 'Camp A', item: 'Blankets', quantity: 50 },
  { id: 2, camp: 'Camp B', item: 'Water bottles', quantity: 100 },
  { id: 3, camp: 'Camp C', item: 'First aid kits', quantity: 20 },
]

export default function Dashboard() {
  const [userType, setUserType] = useState('donor') // This should be set based on actual user type
  const [newNeed, setNewNeed] = useState({ item: '', quantity: '' })

  const handleAddNeed = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('New need added:', newNeed)
    setNewNeed({ item: '', quantity: '' })
  }

  const handleDonate = (id: number) => {
    // Here you would typically handle the donation process
    console.log('Donating to need:', id)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs value={userType} onValueChange={setUserType}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="donor">Donor Dashboard</TabsTrigger>
          <TabsTrigger value="volunteer">Volunteer Dashboard</TabsTrigger>
        </TabsList>
        <TabsContent value="donor">
          <h2 className="text-2xl font-bold mb-4">Current Relief Camp Needs</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockNeeds.map((need) => (
              <Card key={need.id}>
                <CardHeader>
                  <CardTitle>{need.item}</CardTitle>
                  <CardDescription>{need.camp}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Quantity needed: {need.quantity}</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleDonate(need.id)}>Donate</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="volunteer">
          <h2 className="text-2xl font-bold mb-4">Add New Need</h2>
          <form onSubmit={handleAddNeed} className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="item">Item Needed</Label>
              <Input 
                id="item" 
                value={newNeed.item} 
                onChange={(e) => setNewNeed({...newNeed, item: e.target.value})}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input 
                id="quantity" 
                type="number" 
                value={newNeed.quantity} 
                onChange={(e) => setNewNeed({...newNeed, quantity: e.target.value})}
                required 
              />
            </div>
            <Button type="submit">Add Need</Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}

