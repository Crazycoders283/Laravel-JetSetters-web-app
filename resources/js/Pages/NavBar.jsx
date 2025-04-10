"use client";

import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { auth } = usePage().props; // optional: if you pass auth user from backend

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={route('admin.profile.edit')} className="text-xl font-bold text-[#006d92]">
              AdminPanel
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex sm:items-center space-x-6">
            <Link href={route('admin.user.index')} className="text-gray-700 hover:text-[#006d92] font-medium">
              Users
            </Link>
            <Link href={route('admin.profile.edit')} className="text-gray-700 hover:text-[#006d92] font-medium">
              Profile
            </Link>
            <Link
              href={route('logout')}
              method="post"
              as="button"
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              Logout
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="sm:hidden mt-2 space-y-2">
            <Link href={route('admin.user.index')} className="block text-gray-700 hover:text-[#006d92]">
              Users
            </Link>
            <Link href={route('admin.profile.edit')} className="block text-gray-700 hover:text-[#006d92]">
              Profile
            </Link>
            <Link
              href={route('logout')}
              method="post"
              as="button"
              className="block text-gray-700 hover:text-red-600"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
