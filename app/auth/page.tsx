'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'

export default function AuthPage() {
  const [userType, setUserType] = useState('donor')
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically handle the authentication logic
    console.log('Form submitted')
    // Redirect to dashboard after successful auth
    router.push('/dashboard')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <Tabs defaultValue="signup" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="signin">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-name">Name</Label>
              <Input id="signup-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input id="signup-email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input id="signup-password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" required />
            </div>
            <RadioGroup defaultValue="donor" onValueChange={setUserType} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="donor" id="signup-donor" />
                <Label htmlFor="signup-donor">Donor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="volunteer" id="signup-volunteer" />
                <Label htmlFor="signup-volunteer">Volunteer</Label>
              </div>
            </RadioGroup>
            {userType === 'volunteer' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="camp-name">Relief Camp Name</Label>
                  <Input id="camp-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="camp-address">Relief Camp Address</Label>
                  <Textarea id="camp-address" required />
                </div>
              </>
            )}
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
        </TabsContent>
        <TabsContent value="signin">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signin-email">Email</Label>
              <Input id="signin-email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signin-password">Password</Label>
              <Input id="signin-password" type="password" required />
            </div>
            <RadioGroup defaultValue="donor" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="donor" id="signin-donor" />
                <Label htmlFor="signin-donor">Donor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="volunteer" id="signin-volunteer" />
                <Label htmlFor="signin-volunteer">Volunteer</Label>
              </div>
            </RadioGroup>
            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}

