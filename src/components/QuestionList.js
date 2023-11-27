import React, { useEffect, useState } from "react";
import Delete from "./Delete";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then((res) => res.json())
      .then((questions) => setQuestions(questions));
  }, []);

  return (
    <section>
      
      {questions.map((question) => (
        <div key={question.id}>
          <h1>{question.prompt}</h1>
          <ul>
            {question.answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
          <Delete prop={question.id}/> 
        </div>
      ))}
    </section>
  );
}

export default QuestionList;