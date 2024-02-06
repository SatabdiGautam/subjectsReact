import React, { useState } from "react";
import axios from "axios";

export default function AddSubject(){
    const [newSubject,setNewSubject]= useState({id:'id',name:''});
    const handleInputChange = event =>{
        const {name,value}= event.target;
        setNewSubject(prevState => ({...prevState,[name]:value}))
    }
    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:9111/subjects',newSubject)
        .then(()=>{
            onSubjectAdded();
            setNewSubject({id:'',name:''});
        })
        .catch(error => console.error('Error Adding subject',error))
    }
    return(
        <div className="flex items-center justify-center mt-8">
            <h2 className="font-bold">Add Subjects:</h2>
            <form onSubmit={handleSubmit}>
                
            </form> 
        </div>
    )
}