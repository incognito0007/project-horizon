export default function About() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="bg-white p-8 rounded-2xl shadow-md">
        <p className="text-gray-700 leading-8">
          I am a software engineer with experience in .NET, C#, React, Next.js
          and TypeScript. I enjoy building modern web apps and solving real
          business problems.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="bg-blue-100 text-gray-700 leading-8 px-4 py-2 rounded-full">
            React
          </span>
          <span className="bg-blue-100 text-gray-700 leading-8 px-4 py-2 rounded-full">
            Next.js
          </span>
          <span className="bg-blue-100 text-gray-700 leading-8 px-4 py-2 rounded-full">
            TypeScript
          </span>
          <span className="bg-blue-100 text-gray-700 leading-8 px-4 py-2 rounded-full">
            C#
          </span>
        </div>
      </div>
    </section>
  );
}
