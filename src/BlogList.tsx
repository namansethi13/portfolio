import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "./components/BlogCard"
export default function BlogList() {
  const [error, posts] = useLoaderData();
  console.log(error)
  console.log(posts)
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 mt-16">Blog Posts By Me</h1>
      <section className="w-full h-[100vh] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 max-w-[1600px]">
        {
          error ? <div className="text-red-500 text-center">Error loading posts</div> :
          posts.length === 0 ? <div className="text-gray-500 text-center">No posts available</div> :
          posts.map((post: any) => (
            <BlogCard
              {...post}
            />
          ))
        }
      </section>
    </div>
  );
}