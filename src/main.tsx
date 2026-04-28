import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.tsx'
import BlogLayout from './BlogLayout.tsx'
import BlogList from './BlogList.tsx';
import BlogPost from './BlogPost.tsx';
import BlogError from './BlogError.tsx';
import { fetchBlogPosts, fetchBlogPost } from './services/service';
async function load_posts(){
  const { error, data } = await fetchBlogPosts();
  return [error, data];
}


async function load_post({params}: any){
  const { error, data } = await fetchBlogPost(params.id);
  return [error, data];
}



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/blog',
    element: <BlogLayout/>,
    errorElement: <BlogError />,
    children: [
      {
        index: true,
        element: <BlogList />,
        loader: load_posts,
      },

      {
        path: '/blog/:id',
        element: <BlogPost />,
        loader: load_post,
      }
    ]
  }
]);

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
