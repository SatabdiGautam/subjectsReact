import React, { useState } from "react";
import axios from "axios";

export default function AddSubject({ onSubjectAdded }) {
  const [newSubject, setNewSubject] = useState({ id: "", name: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewSubject((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newSubject.id && newSubject.name) {
      axios
        .post("http://localhost:9111/subjects", newSubject)
        .then(() => {
          onSubjectAdded();
          setNewSubject({ id: "", name: "" });
        })
        .catch((error) => console.error("Error Adding subject", error));
    } else {
      alert("ID and Subject name cannot be empty!");
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center font-bold underline my-4">
          Add Subjects
        </div>
        <div className="flex flex-col">
          <input
            className="border-2 rounded mb-2"
            type="text"
            name="id"
            value={newSubject.id}
            onChange={handleInputChange}
            placeholder="Enter ID"
            pattern="[0-9]*"
          />
          <input
            className="border-2 rounded mb-2"
            type="text"
            name="name"
            value={newSubject.name}
            onChange={handleInputChange}
            placeholder="Enter Subject"
          />
          <button className="border-2 rounded" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
