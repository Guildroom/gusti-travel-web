import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full pt-8 min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex justify-center items-center flex-col pt-4">
          <h2 className="text-xl pt-8 font-bold text-[#526b5c] flex items-center justify-center text-center">
            Gusti Travel - Bali’s Eco Adventures, Local Soul, Unmatched Journeys
          </h2>

          <h2 className="text-xl font-bold text-[#526b5c] flex items-center justify-center pt-8">
            Welcome to Gusti Travel
          </h2>

          <p className="mt-2 text-[#526b5c] max-w-1/2 text-center">
            Discover Bali with Gusti Travel, a proudly local-owned travel agent
            bringing you the island’s true essence in a sea of foreign-run
            alternatives. We’re not just another tour operator—we’re Balinese at
            heart, crafting an extraordinary range of experiences that celebrate
            our home. Dive into our diverse themes: find serenity with spiritual
            tours, immerse yourself in rich traditions with cultural journeys,
            unleash your wild side with adventure tours, expand your mind with
            educational escapes, capture stunning moments on Instagram-worthy
            tours, or embrace nature with our eco-friendly adventures. From
            cycling through lush landscapes to trekking hidden paths, we offer
            it all, backed by seamless transportation across every corner of
            Bali—Kuta’s vibrant pulse to Ubud’s tranquil embrace.
          </p>
          <h2 className="text-xl font-bold text-[#526b5c] flex items-center justify-center pt-8">
            Why Choose Us?
          </h2>

          <p className="mt-2 text-[#526b5c] max-w-1/2 text-center">
            Unlike many agents owned by outsiders, Gusti Travel is 100% local,
            born from Bali’s soul and committed to its future—10% of every
            booking supports our island’s communities through local charities.
            Our passionate, homegrown team designs each tour with authenticity
            and care, ensuring you connect deeply with Bali’s spirit while
            leaving a positive mark. With endless options and unmatched local
            insight, we turn your trip into a journey of meaning and wonder.
          </p>
          <h2 className="text-xl font-bold text-[#526b5c] flex items-center justify-center pt-8">
            Ready to Explore?
          </h2>

          <p className="mt-2 text-[#526b5c] max-w-1/2 text-center">
            Step beyond the ordinary with Gusti Travel, where Bali’s beauty
            meets local pride and eco-conscious adventure. Whether you seek
            thrills, culture, or peace, our vast array of tours promises
            something extraordinary for everyone. Book today and experience Bali
            the way it’s meant to be—through the eyes of those who call it home.
            Your adventure awaits!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <div className="p-6 sm:px-8 flex items-center justify-end flex-col">
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <a
              className="mt-4 block rounded-sm border border-[#63806f] bg-[#63806f] px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#63806f] focus:ring-3 focus:outline-hidden sm:mt-6"
              href="#"
            >
              Learn more
            </a>
          </div>
          <div className="grid grid-cols-1 pt-8 h-fit gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 lg:col-span-3">
            <a href="#" className="bg-white p-8 rounded-lg">
              <img
                alt=""
                src="/destination.jpeg"
                className="max-w-full h-80 object-cover lg:h-96"
              />
            </a>
            <a href="#" className="bg-white p-8 rounded-lg">
              <img
                alt=""
                src="/destination.jpeg"
                className="max-w-full h-80 object-cover lg:h-96"
              />
            </a>
            <a href="#" className="bg-white p-8 rounded-lg">
              <img
                alt=""
                src="/destination.jpeg"
                className="max-w-full h-80 object-cover lg:h-96"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
