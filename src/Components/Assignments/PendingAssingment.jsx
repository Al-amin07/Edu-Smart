import axios from "axios";
import { useEffect, useState } from "react";
import SinglePending from "./SinglePending";
import useAuth from "../Hooks/useAuth";

const PendingAssingment = () => {
  const [assignments, setAssignments] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/submitAssignment?email=${user?.email}`, {withCredentials: true})
      .then((res) => {
        setAssignments(res.data);
        console.log(assignments);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (_id) => {
    console.log(_id);
    const obtainedMarksField = document.getElementById("marks");
    const obtainedMarks = obtainedMarksField.value;

    const feedbackField = document.getElementById("feedback");
    const feedback = feedbackField.value;
    if (feedback === "" || obtainedMarks === "") {
      return;
    }

    const status = "completed";
    const feedbackData = {
      obtainedMarks,
      feedback,
      status,
      id: _id,
    };
    console.log(feedbackData);
    // axios
    //   .patch("http://localhost:5000/obtainedMark", feedbackData)
    //   .then((res) => {
    //     console.log(res.data);
    //     const newAssignments = assignments.filter((ass) => ass._id !== _id);
    //     setAssignments(newAssignments);
    //     obtainedMarksField.value = "";
    //     feedbackField.value = "";
    //   })
    //   .catch((error) => console.log(error));
  };

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
                  handleSubmit={handleSubmit}
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
