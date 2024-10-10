'use client'

import { useState } from 'react'
import Link from 'next/link'
import RegistrationForm from '../../../components/RegistrationForm'

const event = {
  id: 1,
  title: 'Tech Conference 2023',
  date: '2023-09-15',
  location: 'San Francisco, CA',
  description: 'Join us for the biggest tech conference of the year, featuring keynotes from industry leaders and hands-on workshops.',
  price: 299,
}

export default function EventDetails({ params }: { params: { id: string } }) {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)

  return (
    <div>
      <Link href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">&larr; Back to Events</Link>
      <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
      <p className="text-gray-400 mb-2">Date: {event.date}</p>
      <p className="text-gray-400 mb-4">Location: {event.location}</p>
      <p className="mb-4">{event.description}</p>
      <p className="text-2xl font-bold mb-6">Price: ${event.price}</p>
      <button
        onClick={() => setShowRegistrationForm(true)}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
      >
        Register Now
      </button>
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
            <RegistrationForm eventId={params.id} onClose={() => setShowRegistrationForm(false)} />
          </div>
        </div>
      )}
    </div>
  )
}