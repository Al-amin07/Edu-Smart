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

    useEffect(() => {
        axios.get('http://localhost:5000/allAssignment')
        .then(res => {
            setAssignments(res.data);
        })
        .catch(error => console.log(error))
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
                axios.delete(`http://localhost:5000/assignment/${id}`)
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

    return (
        <div >
            <div className="space-y-8">
                { user ?
                    assignments.map(assignment => <Assignment
                       key={assignment._id}
                       assignment={assignment}
                       handleAssignmentDelete={handleAssignmentDelete}
                       ></Assignment>) :
                       <div className="h-[300px] flex justify-center items-center">
                        <span className="loading loading-spinner loading-lg"></span>
                       </div>
                }
            </div>
        </div>
    );
};

export default Assignments;