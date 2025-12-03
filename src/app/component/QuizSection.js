"use client";

import { useState } from "react";
import Hero from "./Hero";
import Quiz from "./Quiz";

export default function QuizSection() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      {!showQuiz ? <Hero onGetStarted={() => setShowQuiz(true)} /> : <Quiz />}
    </>
  );
}
