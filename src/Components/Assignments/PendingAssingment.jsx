import axios from "axios";
import { useEffect, useState } from "react";
import SinglePending from "./SinglePending";
import useAuth from "../Hooks/useAuth";

const PendingAssingment = () => {
  const [assignments, setAssignments] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://assignment-11-server-4.vercel.app/submitAssignment?email=${user?.email}`, {withCredentials: true})
      .then((res) => {
        setAssignments(res.data);
        
      })
      .catch((error) => console.log(error));
  }, []);

  

  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center my-8">Pending Asssignments</h2>
      {/* <div>
            {
                assignments.map(assignment => <SinglePending
                key={assignment._id}
                assignment={assignment}
                ></SinglePending>)
            }
          </div> */}
      <div>
        {
            assignments.length !==0 ?
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
              {assignments.map((assignment, ind) => (
                <SinglePending
                  key={assignment._id}
                  ind={ind + 1}
                  
                  assignment={assignment}
                ></SinglePending>
              ))}
            </tbody>
          </table>
        </div> : 
          <div className="h-[300px] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      </div>
    </div>
  );
};

export default PendingAssingment;
