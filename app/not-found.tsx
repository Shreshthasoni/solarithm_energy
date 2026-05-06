import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-6xl font-bold text-[#F5A623]">404</h1>
      <p className="text-xl text-gray-600 mt-4">Page not found</p>
      <Link href="/" className="mt-8 px-6 py-3 bg-[#F5A623] text-white rounded-lg font-semibold hover:bg-[#d4891a] transition">
        Back to Home
      </Link>
    </main>
  )
}
