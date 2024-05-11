import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const SubmitAssignment = () => {
    const assignment = useLoaderData();
    
    const [files, setFiles] = useState(null)
    // console.log(assignment);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const file = files
        const note = form.area.value;
        console.log(file);
        const newAssignment = {...assignment, note, file}
        // console.log(newAssignment);
        axios.post('http://localhost:5000/submitAssignment', newAssignment)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => console.log(error))
    }

    const handleFileChange = (e) => {
        // const file = fileInputRef.current.files[0];
        const file = e.target.files[0];
        // console.log('Selected file:', file);
        setFiles(file);
    }
    return (
        <div>
          
          <form onSubmit={handleSubmit} >
              <input type="file"
              
        onChange={handleFileChange} required name="upload"
        accept=".doc, .docx, .pdf" /> <br /> <br />
              <label>Short Note :  </label>
              <textarea className="border w-full px-8" required name="area"  rows={6} id=""></textarea>
              <button className="btn">Submit</button>
              </form>
          
        </div>
    );
};

export default SubmitAssignment;