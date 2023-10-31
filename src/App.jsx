import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
  const data = [
    {
      id: Math.random(),
      text: "Study github",
      date: "2022-10-12",
    },
    {
      id: Math.random(),
      text: "Buy Milk",
      date: "2022-10-12",
    },
    {
      id: Math.random(),
      text: "Study Bootstrap",
      date: "2022-10-12",
    },
  ];
  const [todos, setTodos] = useState(data);

  const addTodos = (todo) => {
    setTodos([todo, ...todos]);
  };

  const deleteTodos = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const [showForm, setShowForm] = useState(false);
  const handleShow = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="w-50 m-auto">
      <Header handleShow={handleShow} showForm={showForm} />
      {showForm ? <Form addTodos={addTodos} /> : ""}
      <Todos todos={todos} deleteTodos={deleteTodos} />
    </div>
  );
}

export default App;
