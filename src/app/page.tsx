"use client";
import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

const Home = () => {
  const title = `{ Developer Quiz }`;
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  //Funções
  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };
  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  const handleAnswered = (answer: number) => {
    //Armazenado a resposta em um array
    setAnswers([...answers, answer]);
    //Carregando a proxima pergunta
    loadNextQuestion();
  };
  return (
    <main
      className="w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-500"
      style={showResult ? { height: "100%" } : { height: "100vh" }}
    >
      <div className="w-full max-w-2xl rounded-md bg-white  text-black shadow shadow-black mx-3 md:mx-1">
        <div className="text-center p-5 font-bold text-2xl  border-b border-gray-300">
          {!showResult ? "{ Developer Quiz }" : "<> Respostas </>"}
        </div>
        <div className="p-5 ">
          {!showResult && (
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          )}
          {showResult && <Results questions={questions} answers={answers} />}
        </div>

        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${
              questions.length === 1 ? "" : "s"
            }`}
          {showResult && (
            <button
              onClick={handleRestartButton}
              className="px-2 py-2 rounded-md bg-purple-600 text-white"
            >
              Reiniciar Quiz
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
