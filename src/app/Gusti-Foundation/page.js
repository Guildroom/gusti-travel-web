"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Education for Underprivileged Children",
    description:
      "Providing free education and school supplies to children in remote villages",
    image: "/project1.jpg",
    raised: "$12,500",
    goal: "$20,000",
    percentage: 62,
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    description:
      "Installing water filtration systems in communities without access to clean water",
    image: "/project2.jpg",
    raised: "$8,300",
    goal: "$15,000",
    percentage: 55,
  },
  {
    id: 3,
    title: "Traditional Arts Preservation",
    description:
      "Supporting local artists and preserving Balinese cultural heritage",
    image: "/project3.jpg",
    raised: "$15,700",
    goal: "$25,000",
    percentage: 63,
  },
];

export default function GustiFoundationPage() {
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedProject, setSelectedProject] = useState("general");

  const handleDonate = () => {
    if (!donationAmount || donationAmount <= 0) {
      alert("Please enter a valid donation amount");
      return;
    }

    const message = `Hello! I would like to donate $${donationAmount} to ${
      selectedProject === "general"
        ? "Gusti Foundation (General Fund)"
        : projects.find((p) => p.id.toString() === selectedProject)?.title
    }`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="pt-24" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gusti Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Making a Difference, One Journey at a Time
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-90">
              10% of every tour profit goes directly to supporting local
              communities and preserving Bali's natural and cultural heritage
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Education
              </h3>
              <p className="text-gray-600">
                Supporting education initiatives for underprivileged children in
                rural areas
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Environment
              </h3>
              <p className="text-gray-600">
                Protecting natural resources and promoting sustainable tourism
                practices
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Culture</h3>
              <p className="text-gray-600">
                Preserving traditional arts, crafts, and cultural heritage for
                future generations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Impact in 2024
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">
                1,250+
              </div>
              <div className="text-gray-600">Children Educated</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">45</div>
              <div className="text-gray-600">Villages Supported</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">
                $125K+
              </div>
              <div className="text-gray-600">Funds Raised</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">100+</div>
              <div className="text-gray-600">Artists Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Current Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-6xl">💝</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{project.raised} raised</span>
                      <span>{project.goal} goal</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-teal-600 h-2 rounded-full"
                        style={{ width: `${project.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
              Make a Donation
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Your contribution helps us continue our mission to support local
              communities and preserve Bali's heritage
            </p>

            <div className="space-y-6">
              {/* Project Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Project
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
                >
                  <option value="general">General Fund</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id.toString()}>
                      {project.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Donation Amount */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Donation Amount (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
                  />
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-4 gap-3">
                {[10, 25, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonationAmount(amount.toString())}
                    className="px-4 py-2 border-2 border-teal-500 text-teal-600 rounded-lg hover:bg-teal-500 hover:text-white transition font-semibold"
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition text-lg font-bold shadow-lg hover:shadow-xl"
              >
                Donate Now via WhatsApp
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                You will be redirected to WhatsApp to complete your donation
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              How Your Donation Helps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-bold text-gray-800 mb-2">$25</h4>
                <p className="text-sm text-gray-600">
                  Provides school supplies for one child for a year
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">💧</div>
                <h4 className="font-bold text-gray-800 mb-2">$100</h4>
                <p className="text-sm text-gray-600">
                  Installs a water filter for a family
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="font-bold text-gray-800 mb-2">$250</h4>
                <p className="text-sm text-gray-600">
                  Supports a local artist for three months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Commitment to Transparency
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We believe in full transparency. 10% of our tour profits go directly
            to the foundation, and 90% of all donations are used for project
            implementation, with only 10% for administrative costs.
          </p>
          <div className="bg-teal-50 rounded-lg p-8 inline-block">
            <div className="text-5xl font-bold text-teal-600 mb-2">90%</div>
            <div className="text-gray-700 font-semibold">
              Goes Directly to Projects
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
