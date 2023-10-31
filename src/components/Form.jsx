import React, { useState } from "react";

const Form = ({ addTodos }) => {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return setMsg("PLEASE ENTER A TODO");
    }
    const todo = {
      id: Math.random(),
      text: text,
      date: new Date().toDateString(),
    };
    addTodos(todo);
    setText("");
  };
  setTimeout(() => {
    setMsg("");
  }, 3000);
  return (
    <form className="bg-light text-dark p-3">
      <h3>Add Todo</h3>
      <div className="mb-3">
        <label htmlFor="text" className="form-label d-block">
          Enter Todo
        </label>
        <input
          id="text"
          placeholder="Enter a todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`d-block w-100 outline-none p-2 form-control ${
            msg ? "border border-danger" : ""
          }`}
        />
        <span className="text-danger">{msg}</span>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
