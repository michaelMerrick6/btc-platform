'use client'

import { useParams } from 'next/navigation'
import { creators } from '../../lib/data'

export default function CreatorProfile() {
  const params = useParams()
  const username = typeof params.username === 'string' ? params.username : ''

  const creator = creators.find((c) => c.username === username)

  if (!creator) {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl text-red-600">Creator not found</h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 text-black">
      <img src={creator.banner} className="w-full h-48 object-cover" />
      <div className="p-6 text-center">
        <img src={creator.profilePic} className="w-24 h-24 rounded-full mx-auto -mt-12 border-4 border-white shadow" />
        <h1 className="text-3xl font-bold mt-4">{creator.name}</h1>
        <p className="text-gray-600 mt-2">{creator.bio}</p>

        <div className="mt-6 text-left max-w-xl mx-auto space-y-3">
          <h2 className="text-xl font-semibold">Recent Posts</h2>
          <ul className="list-disc list-inside">
            {creator.posts.map((post, i) => (
              <li key={i}>{post}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
