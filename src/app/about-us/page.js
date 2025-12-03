export default function AboutUsPage() {
  return (
    <>
      <div className="pt-24" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Gusti Travel
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your Gateway to Authentic Balinese Experiences
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2015, Gusti Travel was born from a deep love for
                  Bali and a desire to share its beauty with the world. What
                  started as a small family business has grown into one of
                  Bali's most trusted travel companies.
                </p>
                <p>
                  We believe that travel should be more than just visiting
                  places—it should be about creating meaningful connections with
                  local culture, nature, and communities. Every tour we offer is
                  carefully designed to provide authentic experiences while
                  respecting and preserving Bali's unique heritage.
                </p>
                <p>
                  Our commitment goes beyond tourism. Through the Gusti
                  Foundation, we reinvest 10% of our profits back into local
                  communities, supporting education, environmental conservation,
                  and cultural preservation initiatives.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-9xl">🏝️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600">
                We provide genuine, culturally immersive experiences that
                showcase the real Bali
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Committed to eco-friendly practices that protect Bali's natural
                environment
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                Supporting local communities through fair employment and
                charitable initiatives
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                Delivering exceptional service and unforgettable experiences on
                every journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Gusti Travel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                Our team consists of local Balinese guides who know the island
                inside out
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Personalized Tours
              </h3>
              <p className="text-gray-600">
                Every tour is customizable to match your interests and travel
                style
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Best Value
              </h3>
              <p className="text-gray-600">
                Competitive pricing with transparent costs and no hidden fees
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Safety First
              </h3>
              <p className="text-gray-600">
                Licensed guides, insured vehicles, and adherence to all safety
                protocols
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock customer service to assist you throughout your
                journey
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Trusted Reviews
              </h3>
              <p className="text-gray-600">
                Over 5,000 five-star reviews from satisfied travelers worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Journey in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Certified & Trusted
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">🏆</div>
                <p className="text-sm font-semibold text-gray-700">
                  Licensed Tour Operator
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">🌿</div>
                <p className="text-sm font-semibold text-gray-700">
                  Eco-Tourism Certified
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">✅</div>
                <p className="text-sm font-semibold text-gray-700">
                  Safety Compliant
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">🎖️</div>
                <p className="text-sm font-semibold text-gray-700">
                  Award Winning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Start Your Bali Adventure?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let us help you create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tour"
              className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition font-semibold"
            >
              Explore Tours
            </a>
            <a
              href="#"
              className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-3 rounded-md hover:bg-teal-50 transition font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
