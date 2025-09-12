"use client";

import { useState } from "react";

const AuthenticationPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreed: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="flex gap-12 max-w-6xl w-full">
        {/* Dashboard Preview */}
        <div className="bg-[#D8F9B8] w-full max-w-2xl px-6 py-12 rounded-2xl flex items-start justify-center">
          <img src="/dashboard.png" />
        </div>

        {/* Authentication Form */}
        <div className="max-w-md w-full bg-white px-8 py-8 rounded-3xl flex items-center">
          <div className="w-full">
            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-3 px-6 rounded-md text-center font-medium transition-colors ${
                  activeTab === "login"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-3 px-6 rounded-md text-center font-medium transition-colors ${
                  activeTab === "signup"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Login Form */}
            {activeTab === "login" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-3">
                    Email :
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-3">
                    Password :
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreed}
                    onChange={(e) =>
                      handleInputChange("agreed", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the Privacy Policy, Code of Conduct & Terms and
                    Conditions.
                  </label>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    className="w-full bg-gray-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors max-w-24"
                    onClick={() => console.log("Login clicked")}
                  >
                    Login
                  </button>

                  <a
                    className="text-sm text-gray-800 underline hover:no-underline"
                    onClick={() => console.log("Forgot password clicked")}
                  >
                    Forgot password
                  </a>
                </div>
              </div>
            )}

            {/* Sign Up Form */}
            {activeTab === "signup" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-3">
                    Email :
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-3">
                    Username :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-3">
                    Password :
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-3">
                    Confirm Password :
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none"
                  />
                </div>

                <button
                  className="bg-[#2B2D2D] text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => console.log("Sign up clicked")}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
