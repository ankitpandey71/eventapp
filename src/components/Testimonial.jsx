export default function Testimonial() {
    return (
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {[1,2,3].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <img
                src={`https://randomuser.me/api/portraits/women/${60 + i}.jpg`}
                alt="client"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic">“The team handled everything perfectly. Our wedding was a dream!”</p>
              <p className="mt-2 font-semibold">Client Name</p>
            </div>
          ))}
        </div>
      </section>
    )
  }