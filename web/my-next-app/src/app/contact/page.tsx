export default function Contact() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

      <div className="bg-white text-gray-700 leading-8 p-8 rounded-2xl shadow-md space-y-4">
        <p>Email: ankit@example.com</p>
        <p>LinkedIn: linkedin.com/in/ankit</p>
        <p>Location: Pune, India</p>

        <button className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition">
          Hire Me
        </button>
      </div>
    </section>
  );
}
