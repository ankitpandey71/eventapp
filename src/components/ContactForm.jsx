export default function ContactForm() {
    return (
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Message" rows="4" className="w-full border p-2 rounded"></textarea>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Send Message
        </button>
      </form>
    )
  }
  