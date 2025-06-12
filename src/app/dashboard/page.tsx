'use client'

import { useState } from 'react'
import { creators } from '../lib/data'

const loggedInUsername = 'michael'

export default function Dashboard() {
  const creator = creators.find((c) => c.username === loggedInUsername)

  const [posts, setPosts] = useState(creator?.posts || [])
  const [newPost, setNewPost] = useState('')

  const handleAddPost = () => {
    if (!newPost.trim()) return
    setPosts([newPost, ...posts])
    setNewPost('')
  }

  if (!creator) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white text-black">
        <h1 className="text-2xl text-red-600">You must be logged in.</h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 text-gray-800 flex justify-center p-4">
      <div className="w-full max-w-3xl border border-gray-200 rounded-xl bg-white/60 backdrop-blur-md shadow-2xl p-6">
        <div className="flex gap-4 items-center mb-6">
          <img
            src={creator.profilePic}
            className="w-20 h-20 rounded-full border-2 border-white shadow"
            alt="Profile"
          />
          <div>
            <h1 className="text-2xl font-bold">{creator.name}</h1>
            <p className="text-gray-600">@{creator.username}</p>
          </div>
        </div>

        <div className="mb-6">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/70 border border-gray-300 text-gray-800 placeholder-gray-500 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="What's on your mind?"
            rows={3}
          />
          <div className="text-right mt-2">
            <button
              onClick={handleAddPost}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition"
            >
              Post
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Your Posts</h2>
          <ul className="space-y-3">
            {posts.map((post, i) => (
              <li key={i} className="bg-white/80 p-4 rounded-lg text-gray-800 border border-gray-200 shadow-sm">
                {post}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
