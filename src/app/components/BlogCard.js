"use client";
import Link from "next/link";

export default function BlogCard({ post, onDelete }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content.slice(0, 150)}...</p>
      <div className="flex justify-between items-center">
        <Link
          href={`/posts/${post.id}`}
          className="text-blue-500 hover:underline"
        >
          Read More
        </Link>
        <button
          onClick={() => onDelete(post.id)}
          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
