import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          Eventify is a premier event management company specializing in crafting unique experiences
          for weddings, corporate gatherings, and special occasions. With passion and precision, we
          turn your vision into reality.
        </p>
      </section>
      <Footer />
    </>
  )
}
