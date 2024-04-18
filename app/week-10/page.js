"use client";
import React from 'react';

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";


function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handle GitHub sign-in
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  // Handle sign-out
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className=' flex flex-col justify-center items-center h-screen w-screen text-black'>
      <div className=' flex flex-col items-center  w-1/3 h-1/3 bg-white rounded-3xl p-5'>

      {!user ? (
        <div className='flex flex-col justify-between items-center h-full'>
                  <p className='text-2xl font-semibold'>
                  Please Login to Continue
                </p>
        <button
          onClick={handleSignIn}
          className='bg-black text-white px-4 py-2 rounded mt-4 hover:bg-gray-800'
        >
          Login with GitHub
        </button>
        </div>
      ) : (
        <div className="text-center">
          <p className='text-2xl font-semibold'>
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className='flex flex-row items-center justify-center h-full gap-5'>

          <button
            onClick={handleSignOut}
            className='bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600'
            >
            Logout
          </button>
          <a
            href="./week-10/shopping-list"
            className='bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600'
          >
            Go to Shopping List
          </a>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default LandingPage;
