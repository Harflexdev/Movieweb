import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignIn = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Redirect after successful sign-in
      navigate('/'); // Change to the desired route after sign-in
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign In</h2>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="h-[40px] bg-blue-600 text-white rounded-lg transition duration-300 hover:bg-blue-500 transform hover:scale-105 mb-4"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-center mb-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-2 text-gray-600">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center h-[40px] bg-white border border-gray-300 rounded-lg transition duration-300 hover:shadow-lg transform hover:scale-105"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_%22G%22_Logo.svg" 
            alt="Google Logo" 
            className="h-5 mr-2"
          />
          <span className="text-gray-700">Continue with Google</span>
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
