import Link from 'next/link'

interface Event {
  id: number
  title: string
  date: string
  location: string
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      <p className="text-gray-400 mb-2">Date: {event.date}</p>
      <p className="text-gray-400 mb-4">Location: {event.location}</p>
      <Link href={`/events/${event.id}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Details
      </Link>
    </div>
  )
}