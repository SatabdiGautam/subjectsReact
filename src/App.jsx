import React,{useState,useEffect} from "react";
import SubjectList from "./components/SubjectList";
import AddSubject from "./components/AddSubject";
import axios from "axios";

export default function app(){
  const [subjects,setSubjects] =useState([])
  useEffect(()=>{
    fetchSubjects();
  },[])
  const fetchSubjects= ()=>{
    axios.get('http://localhost:9111/subjects')
    .then(Response => setSubjects(Response.data))
    .catch(error => console.error("Error Fetching Subjects",error))
  }
  const handleSubjectAdded =()=>{
    fetchSubjects()
  }
  return(
    <>
    <h1 className="cursor-pointer flex items-center justify-center text-3xl font-bold underline">Subjects</h1>
    <AddSubject subjects={subjects}/>
    <SubjectList onSubjectAdded={handleSubjectAdded}/>
    </>
  )
}