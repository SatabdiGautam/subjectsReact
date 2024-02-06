import React, { useState } from "react";
import axios from "axios";

export default function SubjectList({
  subjects,
  onSubjectDeleted,
  onSubjectUpdated,
}) {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:9111/subjects/${id}`)
      .then(() => {
        onSubjectDeleted();
      })
      .catch((error) => console.error("Error Deleting Subject", error));
  };

  const handleUpdate = (id, newName) => {
    axios
      .put(`http://localhost:9111/subjects/${id}`, { id: id, name: newName })
      .then(() => {
        onSubjectUpdated();
      })
      .catch((error) => console.error("Error Updating Subject", error));
  };

  const [editingSubjectId, setEditingSubjectId] = useState(null);
  const [newSubjectName, setNewSubjectName] = useState("");

  const handleEdit = (id, name) => {
    setEditingSubjectId(id);
    setNewSubjectName(name);
  };

  const handleSave = () => {
    handleUpdate(editingSubjectId, newSubjectName);
    setEditingSubjectId(null);
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
                    {editingSubjectId === subject.id ? (
                      <>
                        <input
                          type="text"
                          value={newSubjectName}
                          onChange={(e) => setNewSubjectName(e.target.value)}
                          className="border rounded px-2 py-1"
                        />
                        <button
                          className="border rounded p-1 ml-2 bg-blue-500 text-white"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                      </>
                    ) : (
                      <>
                        <div
                          className="mr-2 cursor-pointer"
                          onClick={() => handleEdit(subject.id, subject.name)}
                        >
                          {subject.name}
                        </div>
                        <button
                          className="border rounded p-1 hover:bg-red-500 hover:text-white"
                          onClick={() => handleDelete(subject.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
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
