"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, data)
      .then(() => router.push("/"))
      .catch((error) => console.error("Error creating post:", error));
  };

  return (
    <div className="container mx-auto my-10 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Create a New Blog Post
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700">Title</label>
          <input
            {...register("title", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.title && (
            <span className="text-red-500">Title is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700">Content</label>
          <textarea
            {...register("content", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            rows="6"
          ></textarea>
          {errors.content && (
            <span className="text-red-500">Content is required</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-600 transition"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
