import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Foodie Remix
          </Link>
          <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
            <li><Link href="https://github.com/pratap360/" target="_blank">Github</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

