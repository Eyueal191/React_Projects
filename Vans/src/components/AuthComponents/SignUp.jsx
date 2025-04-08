import React, { useEffect, useRef, useState } from "react";
import { useActionData, Form } from "react-router-dom";

function SignUp() {
  const data = useActionData();
  const [message, setMessage] = useState(null);

  // Refs for form inputs
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const phone = useRef();
  // function to clean input fields
  function cleanInputFields() {
    email.current.value = "";
    password.current.value = "";
    phone.current.value = "";
    username.current.value = "";
  }

  // Update message and clear inputs on successful signup
  useEffect(() => {
    if (data) {
      setMessage(data.message);
      cleanInputFields();
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign Up
        </h2>

        {message && (
          <p
            className={`text-sm text-center mb-4 ${
              data?.success ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <Form method="post" className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={email}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              ref={username}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your username"
              autoComplete="username"
              required
            />
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              ref={phone}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your phone number"
              autoComplete="tel"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={password}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
              autoComplete="new-password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </Form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
