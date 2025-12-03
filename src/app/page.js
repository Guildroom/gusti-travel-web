import QuizSection from "./component/QuizSection";

const recommendedTours = [
  {
    id: 1,
    name: "Spiritual Healing Journey",
    category: "Spiritual Healing",
    location: "Ubud",
    duration: "3 Days",
    price: "$299",
    description:
      "Experience inner peace through traditional Balinese healing rituals",
  },
  {
    id: 2,
    name: "Instagram Worthy Tour",
    category: "Instagram Tour",
    location: "Various",
    duration: "2 Days",
    price: "$249",
    description: "Visit the most photogenic spots in Bali",
  },
  {
    id: 3,
    name: "Complete Bali Experience",
    category: "Complete Bali",
    location: "All Bali",
    duration: "7 Days",
    price: "$899",
    description: "The ultimate Bali tour covering all major attractions",
  },
];

const recommendedActivities = [
  {
    id: 1,
    name: "Traditional Balinese Cooking Class",
    category: "Cooking",
    location: "Ubud",
    duration: "4 Hours",
    price: "$45",
    description: "Learn to cook authentic Balinese dishes with local chefs",
  },
  {
    id: 2,
    name: "Scuba Diving Adventure",
    category: "Water Sports",
    location: "Amed",
    duration: "Half Day",
    price: "$89",
    description: "Explore underwater beauty and coral reefs",
  },
  {
    id: 3,
    name: "Sunrise Yoga Session",
    category: "Wellness",
    location: "Canggu",
    duration: "2 Hours",
    price: "$25",
    description: "Start your day with peaceful yoga overlooking rice fields",
  },
];

export default function Home() {
  return (
    <>
      <QuizSection />

      {/* Recommended Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recommended Tours
            </h2>
            <p className="text-lg text-gray-600">
              Discover our most popular tour packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedTours.map((tour) => (
              <a
                key={tour.id}
                href={`/tour/detail?id=${tour.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
              >
                <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-6xl">🏝️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {tour.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {tour.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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

          <div className="text-center mt-10">
            <a
              href="/tour"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition font-semibold"
            >
              View All Tours
            </a>
          </div>
        </div>
      </section>

      {/* Recommended Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recommended Activities
            </h2>
            <p className="text-lg text-gray-600">
              Experience the best activities Bali has to offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedActivities.map((activity) => (
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
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {activity.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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

          <div className="text-center mt-10">
            <a
              href="/activity"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition font-semibold"
            >
              View All Activities
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
