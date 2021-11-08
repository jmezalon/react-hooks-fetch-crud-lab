import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({ quizQuestions, setQuiz, url }) {

  if (quizQuestions.length === 0) {
    return <p>Loading...</p>
  }

  function handleDeleteItem(questions) {
    const updatedQuestions = quizQuestions.filter(question => questions.id !== question.id)
    setQuiz(updatedQuestions)
  }

  function handleEditItem(questionObj) {
    const updatedItem = quizQuestions.map(question => {
      if (question.id === questionObj.id) {
        return questionObj
      } else {
        return question
      }
    })
    setQuiz(updatedItem)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{quizQuestions.map(question => <QuestionItem 
        key={question.id} 
        question={question} 
        onDeleteItem={handleDeleteItem}
        onItemEdit={handleEditItem}
        url={url}
      />)}</ul>
    </section>
  );
}

export default QuestionList;
