"use client";

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer id="contact" className="bg-[var(--color-primary-color)] text-black font-secondary px-6 py-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Column 1: Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="mb-2">hello@journeylondon.com</p>
          <p className="mb-2">(+44) 0207 866 2974</p>
          <p>Studio 1A, 249 Chapel Street, London, EC1 2AJ</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Contact</Link></li>
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 3: Newsletter Form */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle form logic here
            }}
            className="flex flex-col sm:flex-row items-start sm:items-center "
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2  outline-1 outline-black  w-full sm:w-auto text-black "
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-[10px]  font-bold hover:bg-gray-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
