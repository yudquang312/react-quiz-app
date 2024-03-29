import React, { useState } from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";
// import Timer from "../Timer/Timer";

const QuestionCart = ({
  question,
  answers,
  checkAnswer,
  userAnswer,
  questionNumber,
  totalQuestions,
  correctAnswer,
}) => {

  const [answerWrong, setAnswerWrong] = useState(null);

  const onClick = (event) => {
    let correct = event.currentTarget.value === correctAnswer;
    checkAnswer(correct);
    if (!correct) {
      setAnswerWrong(event.currentTarget.value);
    }
  };

  return (
    <div className="question-card">
      <div className="question">
        <p className="question-number">
          Question: {questionNumber} / {totalQuestions}
        </p>
        <Progress
          percent={(100 * questionNumber) / totalQuestions}
          steps={totalQuestions}
          strokeColor="rgb(63, 114, 152,0.8)"
          format={() => ""}
        />
        {/* <Timer setTimeOut={setTimeOut} /> */}
        <p dangerouslySetInnerHTML={{__html: question}}></p>
      </div>

      <div className="answer-list">
        {answers.map((answer, index) => {
          return (
            <div key={index} className="answer">
              <button
                className={`answer-btn ${
                  answer === answerWrong ? "answer-btn-wrong" : ""
                } ${
                  answer === correctAnswer && userAnswer
                    ? "answer-btn-right"
                    : ""
                }`}
                disabled={userAnswer}
                value={answer}
                onClick={onClick}
              >
                {answer}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCart;
