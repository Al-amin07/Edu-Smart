
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const SinglePending = ({ assignment, ind, handleSubmit }) => {
  console.log(assignment);
  const { _id, note, file_url, title, marks, name } = assignment;

  //   const handleForm = e => {
  //     e.preventDefault();
  //     //  document.getElementById('my_modal_4').classList.add('hidden');
  //     // console.log(form);
  //     console.log('Submitted!!!!!');
  //   }

//   const handleSubmit = () => {
    
//     const obtainedMarksField = document.getElementById('marks');
//     const obtainedMarks = obtainedMarksField.value
    
//     const feedbackFiled = document.getElementById('feedback');
//     const feedback = feedbackFiled.value;
//     if(feedback === '' || obtainedMarks === ''){
//         return
//     }

//     const status = 'completed'
//     const feedbackData = { 
//         obtainedMarks,
//         feedback,
//         status,
//         id: _id
//     }
//     axios.patch('http://localhost:5000/obtainedMark', feedbackData)
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(error => console.log(error))
//   }
  return (
    <tr className="">
      {/* hover:bg-base-200 */}
      <th className="text-lg ">{ind}</th>
      <td className="text-lg ">{title}</td>
      <td className="text-lg ">{marks}</td>
      <td className="text-lg ">{name}</td>

    
     {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn my-3 btn-warning " onClick={()=>document.getElementById('my_modal_4').showModal()}>Get Mark</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h2 className="text-3xl font-semibold text-center mb-4">Assignment Feedback</h2>
    <h3 className=" text-lg"><span>Uploded File : </span>{file_url}</h3>
    <p className="py-4"><span>Notes : </span>{note}</p>
    <div className="modal-action">
    <form  method="dialog" 
className="w-full border-2 rounded-xl p-5 space-y-3" >
  <div className="form-control">
    <label className="label">
      <span className="label-text text-xl font-medium">Obtained Marks</span>
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
  <button onClick={() => handleSubmit(_id)} className="btn w-full btn-success text-white">Submit</button>
</form> 
    </div>
  </div>
</dialog>
    </tr>
  );
};

SinglePending.propTypes = {
  assignment: PropTypes.object,
  ind: PropTypes.number,
  handleSubmit: PropTypes.func
};

export default SinglePending;


{/* <form  method="dialog" 
className="w-full border-2 rounded-xl p-5 space-y-3" >
  <div className="form-control">
    <label className="label">
      <span className="label-text text-xl font-medium">Obtained Marks</span>
    </label>
    <input
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
    className="input input-bordered h-[150px]"
    name="feedback"
    required
    ></textarea>
  </div>
  <button className="btn w-full btn-success text-white">Submit</button>
</form> */}