'use client';
import { questions } from "@/data/questions";
import { useState } from "react";

const Home = () => {
  const title = "Quiz Developer";
  const[currentQuestion,setCurrentQuestion]=useState(0);
  return (
    <main className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-500">
      {questions.map((item) => (
        <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
          <div className="text-center p-5 font-bold text-2xl border-b border-gray-300">
            {title}
          </div>
          <div className="p-5">{item.question}</div>
          <div className="p-5 text-center border-t border-gray-300">{currentQuestion +1} de {questions.length} pergunta{questions.length <= 1?'':'s'}</div>
        </div>
      ))}
    </main>
  );
};

export default Home;
