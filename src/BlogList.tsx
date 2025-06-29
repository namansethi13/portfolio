import {useLoaderData } from "react-router-dom";
import BlogCard from "./components/BlogCard"
import SignInWithGooglePopup from "./components/SignInWithGooglePopup";
import { useState } from "react";
export default function BlogList() {
  const [error, posts] = useLoaderData();
  const [popupOpen, setPopupOpen] = useState(false);
  console.log(error)
  console.log(posts)
  

  return (
    <>
     {/* <button
        onClick={() => setPopupOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded-md"
      >
        Open Google Sign-In Popup
      </button> */}
      {/* <SignInWithGooglePopup open={popupOpen} onClose={() => setPopupOpen(false)} rederictTo={window.location.href}/> */}
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
    </>
  );
}