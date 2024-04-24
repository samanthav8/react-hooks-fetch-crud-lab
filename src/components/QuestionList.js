import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((resp) => resp.json())
    .then((data) => setQuestions(data))
  }, [])

  function handleDeleteItem(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
        return <QuestionItem key={question.id}question={question} onDeleteItem={handleDeleteItem}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;
