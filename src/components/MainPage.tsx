import Link from 'next/link'
import EventCard from './EventCard'

const events = [
  { id: 1, title: 'Tech Conference 2023', date: '2023-09-15', location: 'San Francisco, CA' },
  { id: 2, title: 'Music Festival', date: '2023-10-01', location: 'Austin, TX' },
  { id: 3, title: 'Food & Wine Expo', date: '2023-11-05', location: 'New York, NY' },
]

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}