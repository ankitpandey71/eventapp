export default function Hero() {
    return (
      <div className="bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center">
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-5xl font-bold mb-4">Make Your Event Magical</h1>
          <p className="text-xl mb-6">Planning events that people remember forever.</p>
          <a href="/contact" className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200">
            Book Now
          </a>
        </div>
      </div>
    )
  }