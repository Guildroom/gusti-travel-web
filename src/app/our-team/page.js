const teamMembers = [
  {
    id: 1,
    name: "I Made Gusti",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in tourism, Gusti founded the company to share Bali's beauty with the world",
    image: "/team1.jpg",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Kadek Sari",
    role: "Operations Manager",
    bio: "Ensures every tour runs smoothly and all guests have an exceptional experience",
    image: "/team2.jpg",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Wayan Putra",
    role: "Head Tour Guide",
    bio: "Licensed guide with deep knowledge of Balinese culture, history, and hidden gems",
    image: "/team3.jpg",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Nyoman Dewi",
    role: "Customer Relations",
    bio: "Dedicated to providing 24/7 support and ensuring customer satisfaction",
    image: "/team4.jpg",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    name: "Ketut Agung",
    role: "Activity Coordinator",
    bio: "Specializes in adventure activities and outdoor experiences across Bali",
    image: "/team5.jpg",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 6,
    name: "Made Ayu",
    role: "Cultural Ambassador",
    bio: "Preserves and shares traditional Balinese arts, crafts, and ceremonies",
    image: "/team6.jpg",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 7,
    name: "Komang Rai",
    role: "Transport Manager",
    bio: "Manages our fleet of vehicles and ensures safe, comfortable transportation",
    image: "/team7.jpg",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 8,
    name: "Putu Lestari",
    role: "Marketing Director",
    bio: "Connects with travelers worldwide and shares Bali's stories",
    image: "/team8.jpg",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
];

export default function OurTeamPage() {
  return (
    <>
      <div className="pt-24" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Passionate locals dedicated to making your Bali experience
              unforgettable
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            The Heart of Gusti Travel
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team is our greatest asset. Every member brings their unique
            expertise, local knowledge, and genuine passion for Balinese
            culture. We're not just tour guides—we're storytellers, cultural
            ambassadors, and your friends in Bali. Together, we work tirelessly
            to ensure every guest leaves with memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Profile Image */}
                <div className="h-64 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-7xl">👤</span>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-teal-600 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.instagram}
                      className="text-gray-400 hover:text-pink-600 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for passionate individuals who love Bali and
            want to share its beauty with travelers from around the world. If
            you're interested in joining our growing family, we'd love to hear
            from you!
          </p>
          <a
            href="#"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition font-semibold"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="opacity-90">
                All our team members are born and raised in Bali, bringing
                authentic local knowledge to every tour
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3">Passion for Culture</h3>
              <p className="opacity-90">
                We're deeply committed to preserving and sharing Balinese
                traditions with respect and authenticity
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Personal Touch</h3>
              <p className="opacity-90">
                We treat every guest like family, creating personalized
                experiences and lasting friendships
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
