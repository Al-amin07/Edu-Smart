import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { Link,  useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Details = () => {
  const { user } = useAuth()
  const { id } = useParams();
  console.log(id);
 
  const [assignment, setAssignment] = useState({});

  

  useEffect(() => {
    axios.get(`http://localhost:5000/details/${id}?email=${user.email}`, {withCredentials: true})
    .then(res => {
      setAssignment(res.data)
      console.log(res.data);
    })
    .catch(error => console.log(error))
  }, [])

  const { _id, img_url, title, marks, due_date, description, difficulty, email } =
    assignment;

   
  return (
    <div className="flex flex-col mx-3 md:flex-row gap-6 shadow-2xl p-6 rounded-xl ">
      <div className="flex-1">
        <img src={img_url} alt="" />
      </div>
      <div className="flex-1 space-y-5">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-[#9A9293]">{description}</p>
        <div className=" flex gap-6">
          <h2 className="text-2xl font-semibold text-[#23BE0A]">
            #Marks : {marks}
          </h2>
          <h2 className="text-2xl font-semibold text-[#356feb]">
            #Difficulty : {difficulty}
          </h2>
        </div>
        <p className="text-xl font-medium">Due Date : {due_date}</p>
        <p className="text-[#23BE0A] font-medium text-2xl">
          Created By : {email} <br />
          <span className="text-[#9A9293] font-light">
            Only he or she can delete the assignment.
          </span>
        </p>
        <div>
          {/* <button className="btn text-lg font-medium bg-[#E0EEFF] text-[#538AEC]">
            Take Assignment
          </button> */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <Link to={`takeAssignment/${_id}`}
            className="btn text-lg font-medium bg-[#E0EEFF] text-[#538AEC]"
            
          >
           Take Assignment
          </Link>
          {/* <button
            className="btn text-lg font-medium bg-[#E0EEFF] text-[#538AEC]"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
           Take Assignment
          </button> */}
          {/* <dialog id="my_modal_3" className="modal w-full">
            <div className="modal-box border-2 w-3/4">
              <form method="dialog">
                
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              
              <label>Select pdf/doc file :  </label>
              
       
              
              <form onSubmit={handleSubmit} >
              <input type="file" required name="upload" accept=".doc, .docx, .pdf" /> <br /> <br />
              <label>Short Note :  </label>
              <textarea className="border w-full px-8" required name="area"  rows={6} id=""></textarea>
              <input  className="btn btn-primary my-4
              " type="button" value="Submit" />
              </form>
            </div>
          </dialog> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
