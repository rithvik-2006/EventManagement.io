'use client'

import { useState } from 'react'

export default function RegistrationForm({ eventId, onClose }: { eventId: string, onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketQuantity: 1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'ticketQuantity' ? parseInt(value) : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { eventId, ...formData })
    alert('Registration successful!')
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-bold mb-4">Register for Event</h3>
      <div>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-700 rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-700 rounded"
        />
      </div>
      <div>
        <label htmlFor="ticketQuantity" className="block mb-1">Number of Tickets</label>
        <input
          type="number"
          id="ticketQuantity"
          name="ticketQuantity"
          value={formData.ticketQuantity}
          onChange={handleChange}
          min="1"
          required
          className="w-full px-3 py-2 bg-gray-700 rounded"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </div>
    </form>
  )
}