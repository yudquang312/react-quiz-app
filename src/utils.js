export const shuffleArray = array => {
    return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizQuestions = async (amount, difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=9`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
  return data.results.map((question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

export const isEven = num => !(num&1);

export const isOdd = num => num&1;
