import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};
export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);
      onAnswer(key);
    }
  };
  return (
    <div>
      <div className="text-3xl font-bold mb-5">
        {count}. {question.question}
      </div>
      <div>
        {question.options.map((item, key) => (
          <div
            key={key}
            onClick={() => checkQuestion(key)}
            className={`border border-blue-300 px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 hover:opacity-60
            ${selectedAnswer !== null && "cursor-auto hover:opacity-100"}
            ${
              selectedAnswer !== null &&
              selectedAnswer === question.answer &&
              selectedAnswer === key &&
              "bg-green-100 border-green-400"
            }
            ${
              selectedAnswer !== null &&
              selectedAnswer !== question.answer &&
              selectedAnswer === key &&
              "bg-red-100 border-red-400"
            }

            `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};