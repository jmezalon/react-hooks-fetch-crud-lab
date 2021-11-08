import React, { useState , useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

const BASE_URL = 'http://localhost:4000/questions'

function App() {
  const [page, setPage] = useState("List");
  const [quiz, setQuiz] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
    .then(r => r.json())
    .then(questionsList => setQuiz(questionsList))
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {
      page === "Form" ? 
      <QuestionForm 
        url={BASE_URL}
        quizQuestions={quiz}
        setQuiz={setQuiz} 
      /> : 
      <QuestionList 
        quizQuestions={quiz} 
        setQuiz={setQuiz}
        url={BASE_URL}
      />
      }
    </main>
  );
}

export default App;
