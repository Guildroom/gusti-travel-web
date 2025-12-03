"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "How Long Is Your Stay?",
    message: "i want to stay for",
    options: [
      "1 Days",
      "2 Days",
      "3 Days",
      "4 Days",
      "5 Days",
      "6 Days",
      "7 Days",
    ],
  },
  {
    id: 2,
    question: "What Did You Seek?",
    message: "i want to seek",
    options: [
      "Spiritual Healing",
      "Cultural",
      "Conservation ",
      "Nature & Adventure ",
      "Hikking & Trekking",
      "Honeymoon ",
      "Instagram Tour",
      "Family Tour",
      "Foodie Tour",
      "Complate Bali ",
      "Hidden Bali Tour",
      "Ocean Tour",
      "Group ",
      "Safari & Wildlifes",
      "Luxury",
    ],
  },
  {
    id: 3,
    question: "Where do you want to go?",
    message: "i want to go to",
    options: ["Denpasar", "Buleleng", "Taiwan", "Ansterdam"],
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    setStep((prev) => prev + 1);
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
  };

  const handleStartJourney = () => {
    let message = "Hello! I want to book a travel with this preference:\n\n";
    questions.forEach((q) => {
      message += `${q.message} ${answers[q.id]}\n`;
    });

    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="pt-24" />
      <section
        className="relative h-screen pt-24 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-40 z-0"></div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          {step < questions.length ? (
            <div
              key={step}
              className="max-w-xl mx-auto space-y-6 bg-opacity-10 rounded-lg animate-fadeIn"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-pulse">
                {questions[step].question}
              </h1>
              <div className="grid grid-cols-4 gap-4">
                {questions[step].options.map((opt, index) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(questions[step].id, opt)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    className="px-4 py-2 rounded-md bg-gradient-to-br from-teal-400 to-blue-500 text-white hover:from-pink-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-slideIn"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-xl mx-auto p-6 space-y-6 bg-opacity-10 rounded-lg backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-4">Your Answers</h2>
              <ul className="list-disc pl-6 text-left text-white space-y-2">
                {questions.map((q) => (
                  <li key={q.id}>
                    {q.question} →{" "}
                    <span className="font-medium">{answers[q.id]}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleStartJourney}
                  className="flex-1 bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
                >
                  Start Your Jurney
                </button>
                <a
                  href="/tour"
                  className="flex-1 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition text-center"
                >
                  Choose Manually
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
