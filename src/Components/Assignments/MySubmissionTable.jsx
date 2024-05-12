import PropTypes from "prop-types";
import { MdFeedback } from "react-icons/md";
const MySubmissionTable = ({ submission }) => {
  console.log(submission);

  const { file_url, img_url, name, title, marks, status, submitEmail } =
    submission;
  return (
    <div className="p-4 shadow-xl hover:shadow-2xl  rounded-xl space-y-4 ">
      <div>
        <img className="h-[200px] w-full" src={img_url} alt="" />
      </div>
      <h2 className="text-2xl font-medium">Assignment Title : {title}</h2>
      <p className="text-lg font-medium">Name : {name}</p>
      <p className="text-lg font-medium">Email : {submitEmail}</p>
      <p className="text-green-600 font-bold text-lg">Status : {status}</p>
      <p className="font-semibold">
        Obtained Marks :{" "}
        {status === "pending" ? "N/A" : submission.obtainedMarks + "/"+marks}
      </p>
      <p>
        {" "}
        <MdFeedback className="text-xl inline-block mr-2" />
        Feedback : {status === "pending" ? "N/A" : submission.feedback}
      </p>
    </div>
  );
};
MySubmissionTable.propTypes = {
  submission: PropTypes.object,
};

export default MySubmissionTable;
