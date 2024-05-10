import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Assignment from "./Assignment";
import Swal from "sweetalert2";


const Assignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allAssignment')
        .then(res => {
            setAssignments(res.data);
        })
        .catch(error => console.log(error))
    }, [])

    const handleAssignmentDelete = (id) => {
        console.log(id);
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
                .then(res => console.log(res.data))
                .catch(error => console.log(error))
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }

    return (
        <div >
            <div className="space-y-8">
                {
                    assignments.map(assignment => <Assignment
                       key={assignment._id}
                       assignment={assignment}
                       handleAssignmentDelete={handleAssignmentDelete}
                       ></Assignment>)
                }
            </div>
        </div>
    );
};

export default Assignments;