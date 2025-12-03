"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const tours = [
  {
    id: 1,
    name: "Spiritual Healing Journey",
    category: "Spiritual Healing",
    location: "Ubud",
    duration: "3 Days",
    price: "$299",
    description:
      "Experience inner peace through traditional Balinese healing rituals",
    image: "/tour1.jpg",
  },
  {
    id: 2,
    name: "Cultural Heritage Tour",
    category: "Cultural",
    location: "Denpasar",
    duration: "2 Days",
    price: "$199",
    description: "Explore ancient temples and traditional Balinese culture",
    image: "/tour2.jpg",
  },
  {
    id: 3,
    name: "Nature & Adventure",
    category: "Nature & Adventure",
    location: "Buleleng",
    duration: "4 Days",
    price: "$399",
    description: "Discover hidden waterfalls and jungle trekking",
    image: "/tour3.jpg",
  },
  {
    id: 4,
    name: "Romantic Honeymoon Package",
    category: "Honeymoon",
    location: "Seminyak",
    duration: "5 Days",
    price: "$599",
    description: "Perfect romantic getaway with sunset dinners and spa",
    image: "/tour4.jpg",
  },
  {
    id: 5,
    name: "Instagram Worthy Tour",
    category: "Instagram Tour",
    location: "Various",
    duration: "2 Days",
    price: "$249",
    description: "Visit the most photogenic spots in Bali",
    image: "/tour5.jpg",
  },
  {
    id: 6,
    name: "Family Fun Adventure",
    category: "Family Tour",
    location: "Sanur",
    duration: "3 Days",
    price: "$449",
    description: "Kid-friendly activities and family bonding experiences",
    image: "/tour6.jpg",
  },
  {
    id: 7,
    name: "Foodie Paradise Tour",
    category: "Foodie Tour",
    location: "Various",
    duration: "2 Days",
    price: "$229",
    description: "Taste authentic Balinese cuisine and street food",
    image: "/tour7.jpg",
  },
  {
    id: 8,
    name: "Complete Bali Experience",
    category: "Complete Bali",
    location: "All Bali",
    duration: "7 Days",
    price: "$899",
    description: "The ultimate Bali tour covering all major attractions",
    image: "/tour8.jpg",
  },
  {
    id: 9,
    name: "Hidden Bali Explorer",
    category: "Hidden Bali Tour",
    location: "East Bali",
    duration: "4 Days",
    price: "$379",
    description: "Discover secret spots unknown to most tourists",
    image: "/tour9.jpg",
  },
  {
    id: 10,
    name: "Ocean Adventure Tour",
    category: "Ocean Tour",
    location: "Nusa Penida",
    duration: "3 Days",
    price: "$349",
    description: "Snorkeling, diving, and island hopping",
    image: "/tour10.jpg",
  },
];

const categories = [
  "All Tours",
  "Spiritual Healing",
  "Cultural",
  "Nature & Adventure",
  "Honeymoon",
  "Instagram Tour",
  "Family Tour",
  "Foodie Tour",
  "Complete Bali",
  "Hidden Bali Tour",
  "Ocean Tour",
];

const durations = [
  "All Durations",
  "2 Days",
  "3 Days",
  "4 Days",
  "5 Days",
  "7 Days",
];

export default function TourPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Tours");
  const [selectedDuration, setSelectedDuration] = useState("All Durations");
  const [showFilters, setShowFilters] = useState(false);
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Tours" || tour.category === selectedCategory;
    const matchesDuration =
      selectedDuration === "All Durations" ||
      tour.duration === selectedDuration;

    return matchesSearch && matchesCategory && matchesDuration;
  });

  return (
    <>
      <div className="pt-24" />
      <div className="min-h-screen bg-gray-50 pt-24 px-4">
        {/* Mobile Filter Toggle */}
        <div className="max-w-7xl mx-auto mb-4 lg:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-white px-4 py-3 rounded-lg shadow-md flex items-center justify-between text-gray-800 font-semibold"
          >
            <span>Filters</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800 text-lg"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside
            className={`w-full lg:w-64 flex-shrink-0 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-white rounded-lg shadow-md p-6 lg:sticky lg:top-28">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition ${
                        selectedCategory === category
                          ? "bg-teal-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Filter */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Duration</h4>
                <div className="space-y-2">
                  {durations.map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setSelectedDuration(duration)}
                      className={`w-full text-left px-3 py-2 rounded-md transition ${
                        selectedDuration === duration
                          ? "bg-teal-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Tour Grid */}
          <main className="flex-1 min-w-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Available Tours ({filteredTours.length})
            </h2>

            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTours.map((tour) => (
                  <a
                    key={tour.id}
                    href={`/tour/detail?id=${tour.id}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
                  >
                    <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-6xl">🏝️</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {tour.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {tour.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>📍 {tour.location}</span>
                        <span>⏱️ {tour.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-teal-600">
                          {tour.price}
                        </span>
                        <span className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition inline-block">
                          View Details
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-xl">
                  No tours found matching your criteria
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
