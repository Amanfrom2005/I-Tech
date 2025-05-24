import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
      <div className="w-full max-w-md bg-[#1e1e2f] text-white rounded-xl shadow-2xl p-8 animate-fade-in relative">

        {/* Back to Home (Using Link) */}
        <Link
          to="/"
          className="absolute left-6 top-6 flex items-center text-sm text-neon-green hover:underline"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
        </Link>

        <h2 className="text-3xl font-bold text-center mb-2 text-neon-green">Login</h2>
        <p className="text-center text-gray-400 mb-8">
          Enter your credentials to continue
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
              <input
                id="email"
                type="email"
                required
                placeholder="example@gmail.com"
                className="w-full pl-10 pr-4 py-2 bg-[#2a2a3b] text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
              <input
                id="password"
                type="password"
                required
                placeholder="********"
                className="w-full pl-10 pr-4 py-2 bg-[#2a2a3b] text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="text-right text-sm mt-1">
              <Link to="/forgot-password" className="text-neon-green hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="clip-path w-full bg-neon-green bg-secondary hover:bg-primary text-primary hover:text-secondary font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Login
          </button>

          <button
            type="button"
            className="clip-path w-full flex items-center justify-center bg-secondary hover:bg-primary text-gray-300 hover:text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            <i className="bx bxl-google" /> &nbsp; Login with Google
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-neon-green hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
