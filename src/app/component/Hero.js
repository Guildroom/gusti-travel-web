export default function Hero({ onGetStarted }) {
  return (
    <>
      <div className="pt-16" />
      <section
        className="relative h-screen pt-24 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-40 z-0"></div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to our website
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Every Soul Seeks a Different Bali. Let's Find Yours
          </p>
          <button
            onClick={onGetStarted}
            className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-teal-700 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
