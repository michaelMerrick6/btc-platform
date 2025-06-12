export type Creator = {
  username: string
  name: string
  bio: string
  profilePic: string
  banner: string
  posts: string[]
}

export const creators: Creator[] = [
  {
    username: 'michael',
    name: 'Michael Merrick',
    bio: 'Bitcoin enthusiast and content creator. I make videos, articles, and behind-the-scenes posts about crypto life.',
    profilePic: 'https://i.pravatar.cc/150?img=3',
    banner: 'https://picsum.photos/seed/michael/800/200',
    posts: [
      'Just published a deep dive on Ordinals!',
      'Behind-the-scenes look at my studio setup 🎥',
      'Q&A livestream this Friday – ask me anything!',
    ],
  },
  {
    username: 'luna',
    name: 'Luna Nakamoto',
    bio: 'Artist, storyteller, and rebel. Sharing exclusive art drops and web3 comics.',
    profilePic: 'https://i.pravatar.cc/150?img=5',
    banner: 'https://picsum.photos/seed/luna/800/200',
    posts: [
      'Drop #1: “The Chain Witch” now live!',
      'Sketching livestream in 10 minutes!',
      'Storyboarding Chapter 3 ✍️',
    ],
  },
]
