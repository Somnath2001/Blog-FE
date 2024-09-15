"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./components/BlogCard";
import Header from "./components/Header";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      .then((response) => setPosts(response.data?.posts))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
      .then(() => setPosts(posts.filter((post) => post.id !== id)))
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <>
      {" "}
      <Header />{" "}
      <div className="container mx-auto my-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Latest Blog Posts
        </h1>
        {posts.length === 0 ? (
          <p className="text-center">No posts available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
