'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

// Mock data for demonstration
const mockDonations = [
  { id: 1, donor: 'Alson', item: 'Blankets', quantity: 20, status: 'Pending' },
  { id: 2, donor: 'Ronaldo', item: 'Water bottles', quantity: 50, status: 'Pending' },
  { id: 3, donor: 'Brilliant', item: 'First aid kits', quantity: 10, status: 'In Transit' },
]

export default function AdminDashboard() {
  const [donations, setDonations] = useState(mockDonations)

  const handleAssignDelivery = (id: number) => {
    // Here you would typically assign a delivery person and update the status
    setDonations(donations.map(donation => 
      donation.id === id ? {...donation, status: 'In Transit'} : donation
    ))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Donor</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donations.map((donation) => (
            <TableRow key={donation.id}>
              <TableCell>{donation.donor}</TableCell>
              <TableCell>{donation.item}</TableCell>
              <TableCell>{donation.quantity}</TableCell>
              <TableCell>{donation.status}</TableCell>
              <TableCell>
                {donation.status === 'Pending' && (
                  <Button onClick={() => handleAssignDelivery(donation.id)}>
                    Assign Delivery
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

