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
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/blog',
    element: <BlogLayout/>,
    children: [
      {
        index: true,
        element: <BlogList />,
        loader: load_posts,
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
