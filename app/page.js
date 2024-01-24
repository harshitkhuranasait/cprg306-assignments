import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> This is an update for the weekly work done</h1>
      <Link href = "./week-2"> Hello </Link>
      </main>
     
  )
}
