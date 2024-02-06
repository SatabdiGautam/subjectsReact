import React, { useState, useEffect } from "react";
import AddSubject from "./components/AddSubject";
import axios from "axios";
import SubjectList from "./components/subjectList";

export default function App() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = () => {
    axios.get('http://localhost:9111/subjects')
      .then(response => setSubjects(response.data))
      .catch(error => console.error("Error Fetching Subjects", error))
  }

  const handleSubjectAdded = () => {
    fetchSubjects();
  }

  return (
    <>
      <h1 className="cursor-pointer flex items-center justify-center text-3xl font-bold underline">Subjects</h1>
      <AddSubject onSubjectAdded={handleSubjectAdded} />
      <SubjectList subjects={subjects} />
    </>
  )
}
