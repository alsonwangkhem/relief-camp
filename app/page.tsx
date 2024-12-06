import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <header className="bg-gray-500 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Relief Connect</h1>
          </div>
        </header>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Relief Camp Donation Management</h2>
          <p className="text-xl text-gray-600 mb-8">Connecting donors with relief camps to make a difference.</p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/auth">Sign Up</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/auth">Log In</Link>
            </Button>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">For Donors</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>View current needs of relief camps</li>
              <li>Pledge donations for specific items</li>
              <li>Track your donation history</li>
              <li>Make a real impact in times of crisis</li>
            </ul>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">For Relief Camp Volunteers</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Add and update your camps needs</li>
              <li>Manage incoming donations</li>
              <li>Coordinate with donors and delivery personnel</li>
              <li>Efficiently allocate resources</li>
            </ul>
          </div>
        </section>
        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold mb-2">1. Sign Up</h4>
              <p>Create an account as a donor or relief camp volunteer.</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold mb-2">2. Connect</h4>
              <p>Donors view needs, camps post requirements.</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold mb-2">3. Donate</h4>
              <p>Pledge donations and coordinate delivery.</p>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            © 2023 Relief Camp Donation Management System
          </div>
        </footer>
    </div>
  )
}

