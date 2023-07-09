import { Question } from "@/types/Question";

type Props = {
  questions: Question[];
  answers: number[];
};
export const Results = ({ questions, answers }: Props) => {
  return (
    <div className="h-full m-5">
      {questions.map((item, key) => (
        <div key={key} className="mb-3">
          <div className="font-bold">
            {key + 1}. {item.question}
          </div>
          <div className="font-bold">
            <span
              style={
                item.answer === answers[key]
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              ({item.answer === answers[key] ? "ACERTOU!" : "ERROU!"}) -{" "}
            </span>
            {item.options[item.answer]}
          </div>
          <hr className="my-1"/>
        </div>
      ))}
    </div>
  );
};
