"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "How Long Is Your Stay?",
    options: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    id: 2,
    question: "What Did You Seek?",
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
    options: ["Denpasar", "Buleleng", "Taiwan", "Ansterdam"],
  },
];

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    setStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="pt-24" />
      <section
        className="relative h-screen pt-24 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-opacity-40 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          {!showQuiz ? (
            <>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to our website
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Every Soul Seeks a Different Bali. Let's Find Yours
              </p>
              <button
                onClick={() => setShowQuiz(true)}
                className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-teal-700 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                Get Started
              </button>
            </>
          ) : step < questions.length ? (
            <div className="max-w-xl mx-auto space-y-6 bg-opacity-10 rounded-lg ">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {questions[step].question}
              </h1>
              <div className="grid grid-cols-4 gap-4">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(questions[step].id, opt)}
                    className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
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
              <button
                onClick={() => {
                  setStep(0);
                  setAnswers({});
                  setShowQuiz(false);
                }}
                className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
              >
                Start Your Jurney
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
