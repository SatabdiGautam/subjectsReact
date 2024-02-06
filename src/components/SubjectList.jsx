import React from "react";
import axios from "axios";

export default function SubjectList({ subjects, onSubjectDeleted, onSubjectUpdated }) {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:9111/subjects/${id}`)
      .then(() => {
        onSubjectDeleted();
      })
      .catch((error) => console.error("Error Deleting Subject", error));
  };
  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:9111/subjects/${id}`)
      .then(() => {
        onSubjectUpdated();
      })
      .catch((error) => console.error("Error Updating Subject", error));
  };

  return (
    <div>
      {subjects.length === 0 ? (
        <p className="flex items-center justify-center mt-8">
          Add Subjects to see a list.
        </p>
      ) : (
        <div className="flex items-center justify-center mt-8">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="cursor-pointer border px-4 py-2">ID</th>
                <th className="cursor-pointer border px-4 py-2">
                  Subject Name
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject) => (
                <tr key={subject.id}>
                  <td className="cursor-pointer border px-4 py-2">
                    {subject.id}
                  </td>
                  <td className="border px-4 py-2 flex justify-between items-center">
                    <div
                      className="mr-2"
                      onClick={() => {
                        handleUpdate(subject.id, subject.name);
                      }}
                    >
                      {subject.name}
                    </div>
                    <button
                      className="border rounded p-1 hover:bg-red-500 hover:text-white"
                      onClick={() => handleDelete(subject.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
