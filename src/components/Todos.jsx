import React from "react";
import { BsTrash } from "react-icons/bs";

const Todos = ({ todos, deleteTodos }) => {
  return (
    <div className="bg-light border p-3">
      {todos.length === 0 && (
        <p className="text-center m-0">There is no todo on your list</p>
      )}
      {todos.map((x) => (
        <div className="border mb-3 p-3 position-relative" key={x.id}>
          <h5>{x.text}</h5>
          <span>{x.date}</span>
          <div style={{ fontSize: "30px", cursor: "pointer" }}>
            <BsTrash
              className="position-absolute top-0 end-0 m-3"
              onClick={() => deleteTodos(x.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
