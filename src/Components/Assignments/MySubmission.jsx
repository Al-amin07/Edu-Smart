import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import MySubmissionTable from "./MySubmissionTable";

const MySubmission = () => {
  const { user } = useAuth();
  const [mysubmissions, setMySubmissions] = useState([]);
  const url = `http://localhost:5000/mysubmission?email=${user.email}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMySubmissions(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2 className="text-4xl  mb-6 font-semibold text-center">
        My Submissions
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {/* <div className="overflow-x-auto">
          <table className="table">
           
            <thead>
              <tr>
                <th className="text-xl font-semibold"></th>
                <th className="text-xl font-semibold">Name</th>
                <th className="text-xl font-semibold">Assignment title</th>
                <th className="text-xl font-semibold">Status</th>
                <th className="text-xl font-semibold">Obtained Marks</th>
                <th className="text-xl font-semibold">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {mysubmissions.map((submission, ind) => (
                <MySubmissionTable
                  key={submission._id}
                  i={ind + 1}
                  submission={submission}
                ></MySubmissionTable>
              ))}
            </tbody>
          </table>
        </div> */}
        {
            mysubmissions.map((submission) => <MySubmissionTable
            key={submission._id}
            submission={submission}
            ></MySubmissionTable>)
        }
      </div>
    </div>
  );
};

export default MySubmission;
