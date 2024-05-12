import axios from "axios";
import { useEffect, useState } from "react";
import SinglePending from "./SinglePending";


const PendingAssingment = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/submitAssignment')
        .then(res => {
            setAssignments(res.data);
            console.log(assignments);
        })
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
          <h2>Pending Asssignment : {assignments.length}</h2>
          {/* <div>
            {
                assignments.map(assignment => <SinglePending
                key={assignment._id}
                assignment={assignment}
                ></SinglePending>)
            }
          </div> */}
          <div>
          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th className="text-2xl font-bold"></th>
        <th className="text-2xl font-bold">Assignment Title</th>
        <th className="text-2xl font-bold">Assignment Marks</th>
        <th className="text-2xl font-bold">Examinee Name</th>
        <th className="text-2xl font-bold">Action</th>
      </tr>
    </thead>
    <tbody>
    {
                assignments.map((assignment, ind) => <SinglePending
                key={assignment._id}
                ind={ind+1}
                assignment={assignment}
                ></SinglePending>)
            }
      
   
    
    </tbody>
  </table>
</div>
          </div>
        </div>
    );
};

export default PendingAssingment;