"use client";

import DatePickerCustom from "@/app/component/datepicker";
import { Appointment, Calendar, LocalTwo } from "@icon-park/react";
import Image from "next/image";

export default function Transport() {
  return (
    <>
      <div className="relative my-16">
        <div className=" h-[60vh] w-0">
          <Image
            src="/Bali_Locator_Map.svg"
            alt="mountain img"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "50% 30%",
            }}
          />
        </div>
        <div className="pl-5 absolute bottom-[20vh] text-white flex flex-col w-full gap-4">
          <div className=" w-full flex items-center justify-center flex-col -mt-12 z-1">
            <div className="flex flex-col justify-center items-start md:items-center rounded-4xl bg-white gap-3.5 drop-shadow-md md:flex-row w-[90vw] md:w-fit md:rounded-full">
              <div className="flex gap-3 items-center rounded-full h-24 px-4 hover:none md:hover:shadow-md">
                <Appointment
                  theme="outline"
                  size="24"
                  fill="#333"
                  strokeWidth={2}
                />
                <div>
                  <div className="relative inline-flex">
                    <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
                      <button
                        type="button"
                        className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                      >
                        Total Passenger
                      </button>

                      <button
                        type="button"
                        className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                        aria-label="Menu"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                    </span>

                    <div
                      role="menu"
                      className="absolute end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
                    >
                      <a
                        href="#"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        role="menuitem"
                      >
                        Less Then 2 Person
                      </a>

                      <a
                        href="#"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        role="menuitem"
                      >
                        2 - 4 Person
                      </a>

                      <a
                        href="#"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        role="menuitem"
                      >
                        4 - 8 Person
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center rounded-full h-24 px-4 hover:none md:hover:shadow-md">
                <LocalTwo
                  theme="outline"
                  size="24"
                  fill="#333"
                  strokeWidth={2}
                />
                <div>
                  <div className="relative inline-flex">
                    <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
                      <button
                        type="button"
                        className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                      >
                        Pick Off
                      </button>

                      <button
                        type="button"
                        className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                        aria-label="Menu"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                    </span>

                    <div
                      role="menu"
                      className="absolute end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
                    >
                      <a
                        href="#"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        role="menuitem"
                      >
                        Buleleng
                      </a>

                      <a
                        href="#"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        role="menuitem"
                      >
                        Denpasar
                      </a>

                      <a
                        href="#"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        role="menuitem"
                      >
                        Jembrana
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center rounded-full h-24 px-4 hover:none md:hover:shadow-md">
                <LocalTwo
                  theme="outline"
                  size="24"
                  fill="#333"
                  strokeWidth={2}
                />
                <div>
                  <div className="relative inline-flex">
                    <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
                      <button
                        type="button"
                        className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                      >
                        Drop Off
                      </button>

                      <button
                        type="button"
                        className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                        aria-label="Menu"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                    </span>

                    <div
                      role="menu"
                      className="absolute end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
                    >
                      <a
                        href="#"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        role="menuitem"
                      >
                        Buleleng
                      </a>

                      <a
                        href="#"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        role="menuitem"
                      >
                        Denpasar
                      </a>

                      <a
                        href="#"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        role="menuitem"
                      >
                        Jembrana
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center rounded-full h-24 px-4 hover:none md:hover:shadow-md">
                <Calendar
                  theme="outline"
                  size="24"
                  fill="#333"
                  strokeWidth={2}
                />
                <div>
                  <p className="text-gray-900">Date</p>
                  <DatePickerCustom />
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-8 py-6 mr-8 ml-5 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Send to Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
