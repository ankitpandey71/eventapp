import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Work() {
  return (
    <>
      <Header />
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Our Work</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <img
              key={i}
              src={`https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80&sig=${i}`}
              alt={`event-${i}`}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}