import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Assignment from "./Assignment";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";


const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
    const { user } = useAuth();
    // console.log(user.email);
    // const [diff, setDiff] = useState(null)
    useEffect(() => {
        axios.get('https://assignment-11-server-4.vercel.app/allAssignment')
        .then(res => {
            setAssignments(res.data);
        })
        .catch(error => console.log(error))
        // fetch('https://assignment-11-server-4.vercel.app/allAssignment')
        // .then(res => res.json())
        // .then(data =>console.log(data))
    }, [])

    const handleAssignmentDelete = (id, email) => {
        if(user?.email !== email){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `SomeOne Created the assignment.
                You Can not Delete!`,
            
              });
            return;
        }
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assignment-11-server-4.vercel.app/assignment/${id}`)
                .then(res => {
                    if(res.data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                          const newAssignments = assignments.filter(ass => ass._id !== id);
                          setAssignments(newAssignments)
                    }
                })
                .catch(error => console.log(error))
                
             
            }
          });
    }

    

    const handleDiffSort = e => {
        console.log(e.target.value);
        const url = `https://assignment-11-server-4.vercel.app/difficulty?diff=${e.target.value}`
        axios.get(url)
        .then(res => {
            setAssignments(res.data);
        })
        .catch(error => console.log(error))
        
    }

    return (
        <div className="px-4">
          <div className="mb-12 flex justify-center">
          <select onChange={handleDiffSort} className="w-[200px] border px-3 py-2 text-lg" name="" id="">
                 <option value="none" selected disabled hidden>
                  Difficulty</option> 
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
          </div>
            <div >
                { assignments.length !== 0 ?
                   <div className="space-y-8">
                    {
                         assignments.map(assignment => <Assignment
                            key={assignment._id}
                            assignment={assignment}
                            handleAssignmentDelete={handleAssignmentDelete}
                            ></Assignment>) 
                    }
                   </div>
                   :
                       <div className="h-[300px] flex justify-center items-center">
                        <span className="loading loading-spinner loading-lg"></span>
                       </div>
                }
            </div>
        </div>
    );
};

export default Assignments;