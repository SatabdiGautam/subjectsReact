import React,{useState,useEffect} from "react";
import axios from "axios";

export default function SubjectList(subject){ 
    const [subjects,setSubjects] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9111/subjects')
        .then(response => setSubjects(response.data))
        .catch(error => console.error("Error fetching subjects",error) )
    },[])

    return(
        <div>
            {subjects.length === 0 ? (
                <p className="flex items-center justify-center mt-8">Add Subjects to see a list.</p>
            ) :(
                <div className="flex items-center justify-center mt-8">
                <table className="table-auto">
                <thead>
                  <tr>
                    <th className="cursor-pointer border px-4 py-2">ID</th>
                    <th className="cursor-pointer border px-4 py-2">Subject Name</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => (
                    <tr key={subject.id}>
                      <td className="cursor-pointer border px-4 py-2">{subject.id}</td>
                      <td className="border px-4 py-2">{subject.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            )}
        </div>
    )}