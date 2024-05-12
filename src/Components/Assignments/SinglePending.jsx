import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const SinglePending = ({ assignment, ind }) => {
  console.log(assignment);
  const { note,file_url, title, marks, name } = assignment;

  const handleForm = e => {
    e.preventDefault();
     document.getElementById('my_modal_4').classList.add('hidden');
    // console.log(form);
    console.log('Submitted!!!!!');
  }
  return (
    <tr className="">
      {/* hover:bg-base-200 */}
      <th className="text-lg ">{ind}</th>
      <td className="text-lg ">{title}</td>
      <td className="text-lg ">{marks}</td>
      <td className="text-lg ">{name}</td>

      <button
        onClick={() => document.getElementById("my_modal_4").classList.remove('hidden')}
        className="btn my-3 btn-warning "
      >
        Give Mark
      </button>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <div id="my_modal_4" className="hidden modal">
        <div className="modal-box  w-11/12 max-w-5xl">
            <h2 className="text-3xl font-semibold text-center mb-3">Feedback Form</h2>
          <p className="py-4 text-lg "><span className="underline">Uploded file :</span> {file_url}</p>
          <h3 className="font-medium text-lg"><span className="underline">Notes  </span> :{note}</h3>
          <div className="modal-action">
            <form id="formSubmit" method="dialog" onSubmit={handleForm} className="w-full border-2 rounded-xl p-5 space-y-3" >
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
            </form>
          </div>
        </div>
      </div>
    </tr>
  );
};

SinglePending.propTypes = {
  assignment: PropTypes.object,
  ind: PropTypes.number,
};

export default SinglePending;
