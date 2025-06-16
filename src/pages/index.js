import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">We Plan. You Celebrate.</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          From corporate events to fairy tale weddings, we make every event unforgettable.
        </p>
      </section>
      <Testimonial />
      <Footer />
    </>
  )
}