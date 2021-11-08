import React from "react";

function QuestionItem({ question, url, onDeleteItem, onItemEdit }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteItem() {
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => onDeleteItem(question))
  }

  function handleEditQuestion(e) {
    fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'correctIndex': parseInt(e.target.value)
      })
    })
    .then(r => r.json())
    .then(correctAns => onItemEdit(correctAns))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleEditQuestion} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteItem}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
