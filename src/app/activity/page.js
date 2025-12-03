"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const activities = [
  {
    id: 1,
    name: "Traditional Balinese Cooking Class",
    category: "Cooking",
    location: "Ubud",
    duration: "4 Hours",
    price: "$45",
    description: "Learn to cook authentic Balinese dishes with local chefs",
    image: "/activity1.jpg",
  },
  {
    id: 2,
    name: "Scuba Diving Adventure",
    category: "Water Sports",
    location: "Amed",
    duration: "Half Day",
    price: "$89",
    description: "Explore underwater beauty and coral reefs",
    image: "/activity2.jpg",
  },
  {
    id: 3,
    name: "Sunrise Yoga Session",
    category: "Wellness",
    location: "Canggu",
    duration: "2 Hours",
    price: "$25",
    description: "Start your day with peaceful yoga overlooking rice fields",
    image: "/activity3.jpg",
  },
  {
    id: 4,
    name: "White Water Rafting",
    category: "Adventure",
    location: "Ayung River",
    duration: "3 Hours",
    price: "$55",
    description: "Thrilling rafting experience through tropical jungle",
    image: "/activity4.jpg",
  },
  {
    id: 5,
    name: "Balinese Dance Workshop",
    category: "Cultural",
    location: "Denpasar",
    duration: "3 Hours",
    price: "$35",
    description: "Learn traditional Balinese dance movements and culture",
    image: "/activity5.jpg",
  },
  {
    id: 6,
    name: "Surfing Lessons",
    category: "Water Sports",
    location: "Kuta Beach",
    duration: "2 Hours",
    price: "$40",
    description: "Perfect waves for beginners and intermediate surfers",
    image: "/activity6.jpg",
  },
  {
    id: 7,
    name: "Traditional Spa & Massage",
    category: "Wellness",
    location: "Seminyak",
    duration: "2 Hours",
    price: "$50",
    description: "Rejuvenating massage with traditional Balinese techniques",
    image: "/activity7.jpg",
  },
  {
    id: 8,
    name: "ATV Quad Bike Adventure",
    category: "Adventure",
    location: "Ubud",
    duration: "2 Hours",
    price: "$65",
    description: "Ride through rice fields, jungle, and muddy tracks",
    image: "/activity8.jpg",
  },
  {
    id: 9,
    name: "Snorkeling at Blue Lagoon",
    category: "Water Sports",
    location: "Padang Bai",
    duration: "4 Hours",
    price: "$35",
    description: "Discover colorful marine life and crystal clear waters",
    image: "/activity9.jpg",
  },
  {
    id: 10,
    name: "Silver Jewelry Making Workshop",
    category: "Craft",
    location: "Celuk",
    duration: "3 Hours",
    price: "$60",
    description: "Create your own silver jewelry with master craftsmen",
    image: "/activity10.jpg",
  },
  {
    id: 11,
    name: "Parasailing Experience",
    category: "Water Sports",
    location: "Tanjung Benoa",
    duration: "1 Hour",
    price: "$45",
    description: "Soar above the ocean and enjoy breathtaking views",
    image: "/activity11.jpg",
  },
  {
    id: 12,
    name: "Batik Painting Class",
    category: "Craft",
    location: "Ubud",
    duration: "3 Hours",
    price: "$40",
    description: "Learn traditional Indonesian batik painting techniques",
    image: "/activity12.jpg",
  },
  {
    id: 13,
    name: "Mountain Cycling Tour",
    category: "Adventure",
    location: "Kintamani",
    duration: "5 Hours",
    price: "$70",
    description: "Cycle through volcanic landscapes and traditional villages",
    image: "/activity13.jpg",
  },
  {
    id: 14,
    name: "Meditation & Sound Healing",
    category: "Wellness",
    location: "Ubud",
    duration: "2 Hours",
    price: "$30",
    description: "Deep relaxation through guided meditation and sound therapy",
    image: "/activity14.jpg",
  },
  {
    id: 15,
    name: "Fruit Carving Workshop",
    category: "Cooking",
    location: "Sanur",
    duration: "2 Hours",
    price: "$35",
    description: "Master the art of traditional fruit carving",
    image: "/activity15.jpg",
  },
];

const categories = [
  "All Activities",
  "Water Sports",
  "Cooking",
  "Wellness",
  "Adventure",
  "Cultural",
  "Craft",
];

const durations = [
  "All Durations",
  "1 Hour",
  "2 Hours",
  "3 Hours",
  "4 Hours",
  "Half Day",
  "5 Hours",
];

export default function ActivityPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Activities");
  const [selectedDuration, setSelectedDuration] = useState("All Durations");
  const [showFilters, setShowFilters] = useState(false);
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Activities" ||
      activity.category === selectedCategory;
    const matchesDuration =
      selectedDuration === "All Durations" ||
      activity.duration === selectedDuration;

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
              placeholder="Search activities..."
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

          {/* Activity Grid */}
          <main className="flex-1 min-w-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Available Activities ({filteredActivities.length})
            </h2>

            {filteredActivities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActivities.map((activity) => (
                  <a
                    key={activity.id}
                    href={`/activity/detail?id=${activity.id}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
                  >
                    <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                      <span className="text-white text-6xl">
                        {activity.category === "Water Sports" && "🏄"}
                        {activity.category === "Cooking" && "🍳"}
                        {activity.category === "Wellness" && "🧘"}
                        {activity.category === "Adventure" && "🚵"}
                        {activity.category === "Cultural" && "💃"}
                        {activity.category === "Craft" && "🎨"}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {activity.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {activity.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>📍 {activity.location}</span>
                        <span>⏱️ {activity.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-purple-600">
                          {activity.price}
                        </span>
                        <span className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition inline-block">
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
                  No activities found matching your criteria
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
