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
    <div>
      {!user ? (
        <button
          onClick={handleSignIn}
        >
          Login with GitHub
        </button>
      ) : (
        <div className="text-center">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleSignOut}
            >
            Logout
          </button>
          <a
            href="./week-8/shopping-list"
          >
            Go to Shopping List
          </a>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
