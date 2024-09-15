"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react"; // ShadCN icon for loader
import { Button } from "@/components/ui/button";

export default function ViewPost() {
  const { id } = useParams();
  const router = useRouter(); // To navigate back
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
        .then((response) => {
          setPost(response.data.post);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin h-10 w-10 text-gray-500" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto text-center my-10">
        <p className="text-xl text-red-500">Post not found!</p>
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="mt-4"
        >
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 max-w-3xl p-6">
      <Card>
        <CardHeader>
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-4">{post.content}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={() => router.back()}>
            Go Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
