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
async function load_posts(){
  let api_base_url = import.meta.env.VITE_API_BASE_URL;
  let res = await fetch(api_base_url+"/blog/");
  let error = res.status !== 200;
  let response = null;
  if(!error){
    response = await res.json()
  }

  return [error , response]
}


async function load_post({params}: any){
  let api_base_url = import.meta.env.VITE_API_BASE_URL;
  let res = await fetch(api_base_url+"/blog/"+params.id);
  let error = res.status !== 200;
  let response = null;
  if(!error){
    response = await res.json()
  }

  return [error , response]
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
