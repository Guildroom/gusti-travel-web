"use client";

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
    fullDescription:
      "Embark on a transformative journey through Ubud's spiritual heart. This 3-day healing retreat combines traditional Balinese purification rituals, meditation sessions with local priests, and visits to sacred temples. Experience the ancient art of Balinese healing, participate in water purification ceremonies at Tirta Empul, and learn meditation techniques from experienced spiritual guides. This tour includes accommodation in a peaceful retreat center, all meals featuring organic local cuisine, and personal consultation with a traditional healer.",
    highlights: [
      "Water purification ceremony at Tirta Empul Temple",
      "Private meditation session with Balinese priest",
      "Traditional healing massage and herbal treatment",
      "Visit to sacred mountain temple",
      "Guided yoga and breathwork sessions",
      "Organic vegetarian meals included",
    ],
    included: [
      "2 nights accommodation in spiritual retreat",
      "All entrance fees and donations",
      "Private transportation",
      "English-speaking spiritual guide",
      "All meals and refreshments",
      "Traditional healing session",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Temple Blessing",
        activities: [
          "Pick up from hotel",
          "Visit Tirta Empul for purification ceremony",
          "Lunch at organic restaurant",
          "Check-in at retreat center",
          "Evening meditation session",
        ],
      },
      {
        day: "Day 2",
        title: "Healing & Spiritual Practice",
        activities: [
          "Sunrise yoga session",
          "Traditional healing massage",
          "Visit to sacred mountain temple",
          "Meditation with Balinese priest",
          "Evening sound healing",
        ],
      },
      {
        day: "Day 3",
        title: "Integration & Departure",
        activities: [
          "Morning meditation",
          "Personal consultation with healer",
          "Closing ceremony",
          "Lunch and relaxation",
          "Return to hotel",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Cultural Heritage Tour",
    category: "Cultural",
    location: "Denpasar",
    duration: "2 Days",
    price: "$199",
    description: "Explore ancient temples and traditional Balinese culture",
    fullDescription:
      "Immerse yourself in Bali's rich cultural heritage with this comprehensive 2-day tour. Visit iconic temples including Tanah Lot and Uluwatu, witness traditional dance performances, and explore local markets. Learn about Balinese architecture, religious practices, and daily rituals from expert local guides.",
    highlights: [
      "Tanah Lot Temple at sunset",
      "Uluwatu Temple and Kecak Fire Dance",
      "Traditional market exploration",
      "Balinese royal palace visit",
      "Traditional craft workshops",
      "Authentic Balinese cuisine tasting",
    ],
    included: [
      "1 night hotel accommodation",
      "All temple entrance fees",
      "Private air-conditioned vehicle",
      "English-speaking guide",
      "Breakfast and lunch",
      "Dance performance tickets",
    ],
    notIncluded: [
      "Dinner meals",
      "Personal shopping",
      "Travel insurance",
      "Tips for guide and driver",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Temples & Traditions",
        activities: [
          "Hotel pick up",
          "Taman Ayun Royal Temple",
          "Tanah Lot Temple sunset",
          "Traditional dinner (optional)",
          "Hotel check-in",
        ],
      },
      {
        day: "Day 2",
        title: "Culture & Crafts",
        activities: [
          "Traditional market visit",
          "Batik workshop",
          "Uluwatu Temple tour",
          "Kecak Fire Dance performance",
          "Seafood dinner at Jimbaran Bay",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Nature & Adventure",
    category: "Nature & Adventure",
    location: "Buleleng",
    duration: "4 Days",
    price: "$399",
    description: "Discover hidden waterfalls and jungle trekking",
    fullDescription:
      "Adventure awaits in North Bali! This 4-day expedition takes you through lush jungles, hidden waterfalls, and remote villages. Trek through rice terraces, swim in natural pools, and experience the untouched beauty of Bali's northern region. Perfect for nature lovers and adventure seekers.",
    highlights: [
      "Multiple waterfall visits",
      "Jungle trekking adventures",
      "Rice terrace hiking",
      "Natural pool swimming",
      "Remote village experience",
      "Wildlife spotting opportunities",
    ],
    included: [
      "3 nights accommodation",
      "All meals during tour",
      "Professional trekking guide",
      "Entrance fees to all sites",
      "Transportation in 4WD vehicle",
      "Trekking equipment",
    ],
    notIncluded: [
      "Personal trekking gear",
      "Travel insurance",
      "Alcoholic beverages",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Journey North",
        activities: [
          "Departure from South Bali",
          "Stop at Munduk Twin Lakes",
          "Arrive at base camp",
          "Orientation and preparation",
        ],
      },
      {
        day: "Day 2",
        title: "Waterfall Expedition",
        activities: [
          "Trek to Sekumpul Waterfall",
          "Swim in natural pools",
          "Visit GitGit Waterfall",
          "Traditional lunch in village",
        ],
      },
      {
        day: "Day 3",
        title: "Jungle Adventure",
        activities: [
          "Rice terrace trekking",
          "Jungle exploration",
          "Wildlife observation",
          "Evening campfire",
        ],
      },
      {
        day: "Day 4",
        title: "Return Journey",
        activities: [
          "Morning nature walk",
          "Visit spice plantation",
          "Lunch break",
          "Return to South Bali",
        ],
      },
    ],
  },
];

export default function TourDetailPage() {
  const searchParams = useSearchParams();
  const tourId = searchParams.get("id");

  const tour = tours.find((t) => t.id.toString() === tourId);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Tour Not Found
          </h1>
          <a
            href="/tour"
            className="text-teal-600 hover:text-teal-700 underline"
          >
            Back to Tours
          </a>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    const message = `Hello! I'm interested in booking the "${tour.name}" tour.\n\nDuration: ${tour.duration}\nPrice: ${tour.price}\n\nPlease provide more information.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="pt-24" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4 opacity-90">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>/</span>
            <a href="/tour" className="hover:underline">
              Tours
            </a>
            <span>/</span>
            <span>{tour.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.name}</h1>
          <div className="flex flex-wrap gap-4 text-lg">
            <span className="flex items-center gap-2">📍 {tour.location}</span>
            <span className="flex items-center gap-2">⏱️ {tour.duration}</span>
            <span className="flex items-center gap-2">🏷️ {tour.category}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image */}
              <div className="h-96 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <span className="text-white text-9xl">🏝️</span>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About This Tour
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {tour.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Tour Highlights
                </h2>
                <ul className="space-y-3">
                  {tour.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Itinerary
                </h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                    >
                      <h3 className="font-bold text-teal-600 text-lg mb-2">
                        {day.day}: {day.title}
                      </h3>
                      <ul className="space-y-2">
                        {day.activities.map((activity, actIndex) => (
                          <li
                            key={actIndex}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <span className="text-teal-600 mt-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included/Not Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    What's Not Included
                  </h3>
                  <ul className="space-y-2">
                    {tour.notIncluded.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-red-600 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-xl p-6 sticky top-28 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-teal-600 mb-2">
                    {tour.price}
                  </div>
                  <p className="text-gray-600">per person</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-800">
                      {tour.duration}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Location</span>
                    <span className="font-semibold text-gray-800">
                      {tour.location}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Category</span>
                    <span className="font-semibold text-gray-800">
                      {tour.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBookNow}
                  className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition text-lg font-bold shadow-lg hover:shadow-xl"
                >
                  Book Now via WhatsApp
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Contact us for group discounts and custom itineraries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
