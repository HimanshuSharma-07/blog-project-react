import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="w-full bg-gray-100 border-t-4 border-background-color py-10">
      <div className="mx-auto max-w-6xl p-6">
        <div className="flex justify-between w-full flex-wrap mx-6">

          
          <div className="w-full px-6 mb-8 lg:w-5/12">
            <div className="flex flex-col items-start">
              <Logo width="40px" />
              <p className="mt-4 text-sm text-gray-600">
                &copy; Copyright 2026. All Rights Reserved .
              </p>
            </div>
          </div>

          <div className="w-full px-6 mb-8 sm:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Features</Link></li>
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Pricing</Link></li>
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Affiliate Program</Link></li>
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Press Kit</Link></li>
            </ul>
          </div>

          <div className="w-full px-6 mb-8 sm:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">
              Support
            </h3>
            <ul className="space-y-2">
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Account</Link></li>
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Help</Link></li>
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Contact Us</Link></li>
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Customer Support</Link></li>
            </ul>
          </div>

          <div className="w-full px-6 sm:w-1/2 lg:w-3/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">
              Legals
            </h3>
            <ul className="space-y-2">
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Terms & Conditions</Link></li>
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Privacy Policy</Link></li>
              <li><Link className="text-sm text-gray-800 hover:underline" to="/">Licensing</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer