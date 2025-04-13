"use client";
import { Airplane } from "@icon-park/react";

export default function PricingPlan() {
  return (
    <>
      <div className="w-full min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-[#526b5c]">
        <div className="flex justify-center items-center flex-col pt-4">
          <h2 className="text-4xl font-bold text-white flex items-center justify-center">
            Pricing Plan
          </h2>

          <p className="mt-2 text-white max-w-1/2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="grid grid-cols-1 pt-8 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
            <div className="p-6 sm:px-8">
              <div className="w-full h-full flex items-center justify-center min-h-24 my-4 rounded-xl bg-[#63806f]">
                <Airplane
                  theme="outline"
                  size="48"
                  fill="#ffffff"
                  strokeWidth={"2"}
                />
              </div>
              <h2 className="text-4xl font-bold text-white flex items-center justify-center">
                Basic Plan
                <span className="sr-only">Basic Plan</span>
              </h2>

              <p className="mt-2 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <div className=" flex items-center justify-between">
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-white sm:text-4xl">
                    20$
                  </strong>
                </p>
                <a
                  className="mt-4 block rounded-sm border border-[#63806f] bg-[#63806f] px-12 py-3 text-center text-lg font-bold text-white hover:bg-transparent focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Booking
                </a>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
            <div className="p-6 sm:px-8">
              <div className="w-full h-full flex items-center justify-center min-h-24 my-4 rounded-xl bg-[#63806f]">
                <Airplane
                  theme="outline"
                  size="48"
                  fill="#ffffff"
                  strokeWidth={"2"}
                />
              </div>
              <h2 className="text-4xl font-bold text-black flex items-center justify-center">
                Best Value
                <span className="sr-only">Best Value</span>
              </h2>

              <p className="mt-2 text-[#526b5c]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <div className=" flex items-center justify-between">
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-[#526b5c] sm:text-4xl">
                    20$
                  </strong>
                </p>
                <a
                  className="mt-4 block rounded-sm border border-[#63806f] bg-[#63806f] px-12 py-3 text-center text-lg font-bold text-white hover:bg-transparent hover:text-[#63806f] focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Booking
                </a>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
            <div className="p-6 sm:px-8">
              <div className="w-full h-full flex items-center justify-center min-h-24 my-4 rounded-xl bg-[#63806f]">
                <Airplane
                  theme="outline"
                  size="48"
                  fill="#ffffff"
                  strokeWidth={"2"}
                />
              </div>
              <h2 className="text-4xl font-bold text-white flex items-center justify-center">
                Exclusive
                <span className="sr-only">Exclusive</span>
              </h2>

              <p className="mt-2 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <div className=" flex items-center justify-between">
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-white sm:text-4xl">
                    20$
                  </strong>
                </p>
                <a
                  className="mt-4 block rounded-sm border border-[#63806f] bg-[#63806f] px-12 py-3 text-center text-lg font-bold text-white hover:bg-transparent focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
