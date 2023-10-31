import React from "react";

const Header = ({ showForm, handleShow }) => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between bg-primary text-light p-3">
        <p className="h4">Todo Application</p>
        <span>V.0.0.1</span>
      </div>
      <div className="d-flex align-items-center justify-content-between bg-light text-dark p-3 py-2">
        <p className="h4">Toggle Form</p>
        <button
          className={showForm ? "btn btn-danger" : "btn btn-success"}
          onClick={handleShow}
        >
          {showForm ? "CLOSE" : "OPEN"}
        </button>
      </div>
    </div>
  );
};

export default Header;
