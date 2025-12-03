"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const activities = [
  {
    id: 1,
    name: "Traditional Balinese Cooking Class",
    category: "Cooking",
    location: "Ubud",
    duration: "4 Hours",
    price: "$45",
    description: "Learn to cook authentic Balinese dishes with local chefs",
    fullDescription:
      "Join our immersive Balinese cooking class in the heart of Ubud. Start your culinary journey with a visit to a traditional market where you'll select fresh ingredients with your chef. Learn to prepare 5 authentic Balinese dishes from scratch, including satay, lawar, and the famous Babi Guling spices. Understand the importance of spices in Balinese cuisine and take home recipes to recreate these dishes. This hands-on class is suitable for all skill levels and vegetarian options are available.",
    highlights: [
      "Traditional market tour for fresh ingredients",
      "Learn to make 5 authentic Balinese dishes",
      "Hands-on cooking experience",
      "Professional chef instruction",
      "Recipe booklet to take home",
      "Enjoy your prepared meal",
    ],
    included: [
      "Market tour and ingredient shopping",
      "All cooking ingredients and equipment",
      "Professional chef instructor",
      "Recipe booklet",
      "Lunch/dinner of prepared dishes",
      "Welcome drink and refreshments",
    ],
    notIncluded: [
      "Hotel pickup and drop-off",
      "Personal shopping at market",
      "Alcoholic beverages",
      "Tips for instructor",
    ],
    schedule: [
      {
        time: "9:00 AM",
        activity: "Arrival and welcome drink",
      },
      {
        time: "9:30 AM",
        activity: "Traditional market tour",
      },
      {
        time: "10:30 AM",
        activity: "Introduction to Balinese spices and techniques",
      },
      {
        time: "11:00 AM",
        activity: "Hands-on cooking session",
      },
      {
        time: "12:30 PM",
        activity: "Enjoy your prepared meal",
      },
      {
        time: "1:00 PM",
        activity: "Class ends, recipe booklet provided",
      },
    ],
  },
  {
    id: 2,
    name: "Scuba Diving Adventure",
    category: "Water Sports",
    location: "Amed",
    duration: "Half Day",
    price: "$89",
    description: "Explore underwater beauty and coral reefs",
    fullDescription:
      "Dive into the crystal-clear waters of Amed, one of Bali's best diving spots. Whether you're a beginner or experienced diver, this half-day adventure offers stunning underwater landscapes, vibrant coral reefs, and diverse marine life. See colorful fish, sea turtles, and if you're lucky, reef sharks and manta rays. All equipment is provided, and PADI-certified instructors ensure your safety throughout the dive.",
    highlights: [
      "Two dive sites in Amed",
      "Vibrant coral reef systems",
      "Diverse marine life spotting",
      "PADI-certified instructors",
      "All equipment included",
      "Small group sizes (max 6 divers)",
    ],
    included: [
      "All diving equipment and gear",
      "PADI-certified dive instructor",
      "Two diving sessions",
      "Hotel pickup from Amed area",
      "Refreshments and snacks",
      "Underwater photos (digital copy)",
    ],
    notIncluded: [
      "PADI certification course",
      "Lunch",
      "Personal underwater camera",
      "Tips for instructor",
    ],
    schedule: [
      {
        time: "7:00 AM",
        activity: "Hotel pickup from Amed area",
      },
      {
        time: "7:30 AM",
        activity: "Dive site arrival and equipment setup",
      },
      {
        time: "8:00 AM",
        activity: "Safety briefing and dive plan",
      },
      {
        time: "8:30 AM",
        activity: "First dive (45 minutes)",
      },
      {
        time: "10:00 AM",
        activity: "Surface interval and refreshments",
      },
      {
        time: "10:45 AM",
        activity: "Second dive (45 minutes)",
      },
      {
        time: "12:00 PM",
        activity: "Return to shore and cleanup",
      },
    ],
  },
  {
    id: 3,
    name: "Sunrise Yoga Session",
    category: "Wellness",
    location: "Canggu",
    duration: "2 Hours",
    price: "$25",
    description: "Start your day with peaceful yoga overlooking rice fields",
    fullDescription:
      "Begin your day with a rejuvenating yoga session in the serene setting of Canggu's rice fields. This 2-hour morning class combines Hatha and Vinyasa flow, suitable for all levels from beginners to advanced practitioners. Watch the sunrise while practicing breathing exercises, sun salutations, and meditation. Our experienced instructors provide personalized attention in a small group setting. End with a healthy tropical breakfast smoothie.",
    highlights: [
      "Sunrise yoga in rice field setting",
      "Mixed Hatha and Vinyasa flow",
      "Suitable for all levels",
      "Experienced yoga instructor",
      "Meditation and breathing exercises",
      "Healthy smoothie included",
    ],
    included: [
      "2-hour yoga class",
      "Yoga mat and props",
      "Experienced yoga instructor",
      "Tropical fruit smoothie",
      "Herbal tea",
      "Small group setting (max 10)",
    ],
    notIncluded: [
      "Hotel transportation",
      "Personal yoga mat (if preferred)",
      "Breakfast meal",
      "Tips for instructor",
    ],
    schedule: [
      {
        time: "5:30 AM",
        activity: "Arrival and registration",
      },
      {
        time: "5:45 AM",
        activity: "Warm-up and breathing exercises",
      },
      {
        time: "6:00 AM",
        activity: "Sunrise yoga flow begins",
      },
      {
        time: "7:00 AM",
        activity: "Cool down and meditation",
      },
      {
        time: "7:20 AM",
        activity: "Closing and group reflection",
      },
      {
        time: "7:30 AM",
        activity: "Smoothie and socializing",
      },
    ],
  },
];

function ActivityDetailContent() {
  const searchParams = useSearchParams();
  const activityId = searchParams.get("id");

  const activity = activities.find((a) => a.id.toString() === activityId);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Activity Not Found
          </h1>
          <a
            href="/activity"
            className="text-purple-600 hover:text-purple-700 underline"
          >
            Back to Activities
          </a>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    const message = `Hello! I'm interested in booking the "${activity.name}" activity.\n\nDuration: ${activity.duration}\nPrice: ${activity.price}\n\nPlease provide more information.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const getCategoryEmoji = (category) => {
    const emojis = {
      "Water Sports": "🏄",
      Cooking: "🍳",
      Wellness: "🧘",
      Adventure: "🚵",
      Cultural: "💃",
      Craft: "🎨",
    };
    return emojis[category] || "⭐";
  };

  return (
    <>
      <div className="pt-24" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-500 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4 opacity-90">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>/</span>
            <a href="/activity" className="hover:underline">
              Activities
            </a>
            <span>/</span>
            <span>{activity.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {activity.name}
          </h1>
          <div className="flex flex-wrap gap-4 text-lg">
            <span className="flex items-center gap-2">
              📍 {activity.location}
            </span>
            <span className="flex items-center gap-2">
              ⏱️ {activity.duration}
            </span>
            <span className="flex items-center gap-2">
              🏷️ {activity.category}
            </span>
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
              <div className="h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                <span className="text-white text-9xl">
                  {getCategoryEmoji(activity.category)}
                </span>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About This Activity
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {activity.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Activity Highlights
                </h2>
                <ul className="space-y-3">
                  {activity.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="text-purple-600 mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Schedule
                </h2>
                <div className="space-y-3">
                  {activity.schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-start bg-gray-50 rounded-lg p-4 border border-gray-200"
                    >
                      <div className="font-bold text-purple-600 min-w-[80px]">
                        {item.time}
                      </div>
                      <div className="text-gray-600">{item.activity}</div>
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
                    {activity.included.map((item, index) => (
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
                    {activity.notIncluded.map((item, index) => (
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
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {activity.price}
                  </div>
                  <p className="text-gray-600">per person</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-800">
                      {activity.duration}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Location</span>
                    <span className="font-semibold text-gray-800">
                      {activity.location}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Category</span>
                    <span className="font-semibold text-gray-800">
                      {activity.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBookNow}
                  className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition text-lg font-bold shadow-lg hover:shadow-xl"
                >
                  Book Now via WhatsApp
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Available daily. Book at least 24 hours in advance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ActivityDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading activity details...</p>
          </div>
        </div>
      }
    >
      <ActivityDetailContent />
    </Suspense>
  );
}
