import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { Link,  useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Details = () => {
  const { user } = useAuth()
  const { id } = useParams();
 
 
  const [assignment, setAssignment] = useState({});

  // https://assignment-11-server-4.vercel.app

  useEffect(() => {
    axios.get(`https://assignment-11-server-4.vercel.app/details/${id}?email=${user.email}`, {withCredentials: true})
    .then(res => {
      setAssignment(res.data)
      
    })
    .catch(error => console.log(error))
  }, [])

  const { _id, img_url, title, marks, due_date, description, difficulty, email } =
    assignment;

   
  return (
    <div>
      {
        assignment.legnth !== 0 ? 
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
      
          <Link to={`takeAssignment/${_id}`}
            className="btn text-lg font-medium bg-[#E0EEFF] text-[#538AEC]"
            
          >
           Take Assignment
          </Link>
        
        </div>
      </div>
    </div>
    : 
    <div className="h-[300px] flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
      }
    </div>
  );
};

export default Details;
