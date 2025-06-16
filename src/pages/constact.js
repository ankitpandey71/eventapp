import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <Header />
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <ContactForm />
      </section>
      <Footer />
    </>
  )
}
