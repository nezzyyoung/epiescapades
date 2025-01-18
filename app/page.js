import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center w-full p-4 bg-white shadow-md">
        <div className="flex items-center">
          <Image
            className="dark:invert rounded-full"
            src="/logo.png"
            alt="Next.js logo"
            width={50}
            height={50}
            priority
          />
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="text-sm sm:text-base hover:text-blue-500">Home</a>
          <a href="#" className="text-sm sm:text-base hover:text-blue-500">Travel</a>
          <a href="#" className="text-sm sm:text-base hover:text-blue-500">Events</a>
          <a href="#" className="text-sm sm:text-base hover:text-blue-500">About Us</a>
          <a href="#" className="text-sm sm:text-base hover:text-blue-500">Contact Us</a>
        </nav>
      </header>
      <main className="flex flex-col gap-8 items-center flex-grow p-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
        <div className="flex flex-col justify-start w-full">
          <h1 className="text-black text-4xl">CONNECT YOUR</h1>
          <h2 className="text-yellow-500 text-6xl">ADVENTURE</h2>
        </div>

        {/* Event Listings Section */}
        <section className="w-full">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="event-item bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl">Event Title</h3>
              <p>Date: MM/DD/YYYY</p>
              <p>Location: Event Location</p>
              <p>Description: Brief description of the event.</p>
              <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Book Now</button>
            </div>
            {/* Repeat for more events */}
          </div>
        </section>

        {/* User Testimonials Section */}
        <section className="w-full">
          <h2 className="text-2xl font-bold">What Our Users Say</h2>
          <div className="testimonials">
            <p className="bg-gray-100 p-4 rounded-lg">&lsquo;This service is amazing!&rsquo; - User Name</p>
            {/* Repeat for more testimonials */}
          </div>
        </section>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center p-4 bg-gray-200">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <p className="text-sm">© 2025 EpiEscapades. All rights reserved.</p>
      </footer>
    </div>
  );
}
