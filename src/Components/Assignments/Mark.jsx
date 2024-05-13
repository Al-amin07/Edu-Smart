import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Mark = () => {
  const data = useLoaderData();
  console.log(data);
  const { _id, note, file_url, marks } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainedMarks = form.obtainedMarks.value;
    if (parseFloat(obtainedMarks) > parseFloat(marks)) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Obtained mark exceeds question mark limit",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    const feedback = form.feedback.value;
    const status = "completed";
    const feedbackData = {
      obtainedMarks,
      feedback,
      status,
      id: _id,
    };
    console.log(feedbackData);
    axios.patch("http://localhost:5000/obtainedMark", feedbackData)
    .then(res => {
        if(res.data.matchedCount || res.data.modifiedCount){
             Swal.fire({
                position: "center",
                icon: "success",
                title: "Your assignment has been carefully reviewed and assessed",
                showConfirmButton: false,
                timer: 1500,
              }); 
        }
    })
    .catch(errro => console.log(errro))
  };
  return (
    <div
      style={{
        backgroundImage: "url('/submit2.jpeg')",
      }}
      className="bg-cover bg-center bg-no-repeat mx-auto px-8 py-6 rounded-xl w-11/12 max-w-4xl"
    >
      <h2 className="text-3xl font-semibold text-center mb-4">
        Assignment Feedback
      </h2>
      <h3 className=" text-lg font-medium">
        Uploded File : <span className="underline">{file_url}</span>
      </h3>
      <p className="py-4">
        <span>Notes : </span>
        {note}
      </p>
      <div className="modal-action">
        <form
          onSubmit={handleSubmit}
          method=""
          className="w-full border-2 rounded-xl p-5 space-y-3"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium">
                Obtained Marks
              </span>
            </label>
            <input
              id="marks"
              type="number"
              name="obtainedMarks"
              placeholder="Marks"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium">Feedback</span>
            </label>
            <textarea
              rows={5}
              id="feedback"
              className="input input-bordered h-[150px]"
              name="feedback"
              required
            ></textarea>
          </div>
          <button className="btn w-full btn-success text-white">Submit</button>
        </form>
      </div>
    </div>
  );
};
// onClick={() => handleSubmit(_id)}

export default Mark;
