// src/components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Blog</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/create-post" className="hover:text-gray-300">
              Create Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
