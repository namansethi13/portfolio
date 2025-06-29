import { useState, useEffect } from "react";
import { supabase } from "./../scripts/supabaseClient";
type Props = {
  open: boolean;
  onClose: () => void;
  rederictTo:string;
};
export default function SignInWithGooglePopup({ open, onClose, rederictTo }: Props) {
    // Removed unused session state and effect

   
    const handleSignIn = async () => {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: rederictTo,
        },
      })
    }
    
    return (
    <div className={"fixed inset-0 flex items-center justify-center transition-all ease-in-out" + (open ? '' : ' hidden')} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}  onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
        <button
          onClick={handleSignIn}
          className="inline-flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
        >
          <svg className="h-5 w-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
            <path d="M488 261.8c0-17.8-1.6-35.1-4.6-51.8H249v98h135c-5.9 32-24 59.2-51.2 77.4l82.8 64c48.3-44.5 76-110.1 76-187.6z"/>
            <path d="M249 492c67 0 123.1-22.4 164.1-60.8l-82.8-64c-23.1 15.5-52.5 24.7-81.3 24.7-62.5 0-115.4-42.1-134.4-98.5l-86.2 66.6c39.9 78.4 122.7 132 220.6 132z"/>
            <path d="M114.6 302.9c-10.1-30-10.1-62.4 0-92.4l-86.2-66.6C6.3 185.8 0 217.9 0 251s6.3 65.2 28.4 107.1l86.2-66.6z"/>
            <path d="M249 100.2c35.7 0 67.9 12.3 93.3 36.5l69.8-69.8C374.1 22.4 318 0 249 0 150.1 0 67.3 53.6 27.4 132l86.2 66.6c19-56.4 71.9-98.5 134.4-98.5z"/>
          </svg>
          Sign in or create an account
        </button>
      </div>
    </div>
  )
}