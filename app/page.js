import React from "react";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-8">
      <img src="/logo.png" alt="Drain Pros FL Logo" className="mx-auto w-48" />
        <h1 className="text-4xl font-bold text-blue-600 mt-4">Expert Drain Cleaning Services</h1>
        <p className="text-lg text-gray-700">Keeping Broward Flowing, One Pipe at a Time!</p>
        <a href="#booking" className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded-lg text-lg">Schedule a Service</a>
      </header>

      <section className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600">Our Services</h2>
        <ul className="list-disc ml-6 text-gray-700 mt-2">
          <li>✅ Clogged Drain Cleaning</li>
          <li>✅ Hydro Jetting</li>
          <li>✅ Video Camera Pipe Inspection</li>
          <li>✅ Root Removal from Drains</li>
          <li>✅ Kitchen & Bathroom Drain Cleaning</li>
          <li>✅ Toilet Drain Clearing</li>
          <li>✅ Commercial Drain Cleaning</li>
          <li>✅ Preventative Drain Maintenance</li>
        </ul>
      </section>

      <section id="booking" className="max-w-3xl mx-auto bg-white p-6 mt-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600">Book a Drain Cleaning Service</h2>
        <form className="mt-4">
          <label className="block mb-2 text-gray-700">Full Name</label>
          <input type="text" className="w-full border p-2 rounded-md" placeholder="Enter your name" />

          <label className="block mt-4 mb-2 text-gray-700">Phone Number</label>
          <input type="text" className="w-full border p-2 rounded-md" placeholder="Enter your phone number" />

          <label className="block mt-4 mb-2 text-gray-700">Preferred Service Date</label>
          <input type="date" className="w-full border p-2 rounded-md" />

          <button type="submit" className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg text-lg">Submit Request</button>
        </form>
      </section>
    </main>
  );
}
