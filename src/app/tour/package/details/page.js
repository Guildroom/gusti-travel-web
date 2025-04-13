import DatePickerCustom from "@/app/component/datepicker";
import Image from "next/image";

export default function Details() {
  return (
    <>
      <div className="relative z-[-1] py-8">
        <div className=" h-[60vh] w-0">
          <Image
            src="/Latham-Fiberglass-Pool-Viking-Aruba.jpg"
            alt="mountain img"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "30% 100%",
            }}
          />
        </div>
        <div className="pl-5 absolute bottom-[20vh] text-white flex flex-col w-full gap-4">
          <div className=" md:text-3xl font-bold text-2xl">Package A</div>
          <div className=" md:text-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-8 h-fit gap-4 sm:items-stretch md:grid-cols-3 md:gap-8">
        <div className="pl-8 col-span-1 md:col-span-2 pt-4">
          <h2 className="text-2xl font-bold text-gray-900 flex pt-8">
            About this tour
          </h2>

          <p className="mt-2 text-gray-700  ">
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

          <h2 className="text-2xl font-bold text-gray-900 flex pt-8">
            Highlights
          </h2>

          <p className="mt-2 text-gray-700  ">
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

          <h2 className="text-2xl font-bold text-gray-900 flex pt-8">
            Included/Excluded
          </h2>

          <p className="mt-2 text-gray-700  ">
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
        </div>
        <div className="pl-8 col-span-1 pt-4">
          <div className="p-8 shadow-2xl rounded-2xl flex flex-col gap-8">
            <div>
              <p>Date</p>
              <DatePickerCustom />
            </div>
            <div className="flex justify-between">
              <p>Adult</p>
              <div>
                <label htmlFor="Quantity" className="sr-only">
                  Quantity
                </label>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="size-10 leading-10 rounded-4xl border-solid border-2 border-gray-400 text-gray-600 transition hover:opacity-75"
                  >
                    <span>&#8722;</span>
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    className="h-10 w-16 rounded-sm border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />

                  <button
                    type="button"
                    className="size-10 leading-10 rounded-4xl border-solid border-2 border-gray-400 text-gray-600 transition hover:opacity-75"
                  >
                    <span>&#43;</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Children</p>
              <div>
                <label htmlFor="Quantity" className="sr-only">
                  Quantity
                </label>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="size-10 leading-10 rounded-4xl border-solid border-2 border-gray-400 text-gray-600 transition hover:opacity-75"
                  >
                    <span className="text-xl">&#8722;</span>
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    className="h-10 w-16 rounded-sm border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />

                  <button
                    type="button"
                    className="size-10 leading-10 rounded-4xl border-solid border-2 border-gray-400 text-gray-600 transition hover:opacity-75"
                  >
                    <span>&#43;</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Infant</p>
              <div>
                <label htmlFor="Quantity" className="sr-only">
                  Quantity
                </label>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="size-10 leading-10 rounded-4xl border-solid border-2 border-gray-400 text-gray-600 transition hover:opacity-75"
                  >
                    <span>&#8722;</span>
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    className="h-10 w-16 rounded-sm border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />

                  <button
                    type="button"
                    className="size-10 leading-10 rounded-4xl border-solid border-2 border-gray-400 text-gray-600 transition hover:opacity-75"
                  >
                    <span>&#43;</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-center w-full text-white shadow-sm"
                href="#"
              >
                Place Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
