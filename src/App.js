import React, { useState } from "react";
import "./App.scss";
import { shuffleArray } from "./utils";
import QuestionCart from "./components/QuestionCard/QuestionCard";

const TOTAL_QUESTIONS = 10;

const fetchQuizQuestions = async (amount, difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=9`;
  const data = await (await fetch(endpoint)).json();
  // console.log(data);
  return data.results.map((question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [totalAnswer, setTotalAnswer] = useState(0);

  // console.log(questions);

  const startTrivia = async () => {
    // console.log(gameOver, totalAnswer);
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, "easy");

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer(false);
    setNumber(0);
    setLoading(false);
    setTotalAnswer(0);
  };

  const checkAnswer = (isRight) => {
    if (!gameOver) {
      setScore((previousState) => previousState + isRight);
      setUserAnswer(true);
      setTotalAnswer((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
      setUserAnswer(false);
    }
  };

  return (
    <div className="app">
      <h1 className="title">React Quiz</h1>
      {gameOver || totalAnswer === TOTAL_QUESTIONS ? (
        <button className="btn-start" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading ? <p>Loading Question ...</p> : null}
      {!loading && !gameOver && (
        <QuestionCart
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer}
          checkAnswer={checkAnswer}
          correctAnswer={questions[number].correct_answer}
        />
      )}
      {!gameOver &&
      !loading &&
      totalAnswer === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="btn-next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
}

export default App;
