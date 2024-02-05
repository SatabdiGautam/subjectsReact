import React,{useState,useEffect} from "react";
import axios from "axios";

export default function SubjectList(){
    
    const [subjects,setSubjects] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9111/subjects')
        .then(response => setSubjects(response.data))
        .catch(error => console.error("Error fetching subjects",error) )
    },[])

    return(
        <div>
            <h1>Subjects</h1>
            {subjects.length === 0 ? (
                <p>No subjects Added</p>
            ) :(
                <ul>
                    {subjects.map(subjects => (
                        <li key={subjects.id}>
                            {`ID:${subjects.id},NAME:${subjects.name} `}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}