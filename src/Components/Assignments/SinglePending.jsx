import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SinglePending = ({ assignment, ind }) => {
  console.log(assignment);
  const { _id, title, marks, name } = assignment;
  return (
    //     <div className="card card-compact w-96 bg-base-100 shadow-xl">
    //     <figure><img src={img_url} alt="Shoes" /></figure>
    //     <div className="card-body">
    //       <h2 className="card-title">Shoes!</h2>
    //       <p>If a dog chews shoes whose shoes does he choose?</p>
    //       <div className="card-actions justify-end">
    //         <button className="btn btn-primary">Buy Now</button>
    //       </div>
    //     </div>
    //   </div>
    <tr className="">
      {/* hover:bg-base-200 */}
      <th className="text-lg ">{ind}</th>
      <td className="text-lg ">{title}</td>
      <td className="text-lg ">{marks}</td>
      <td className="text-lg ">{name}</td>
      {/* <td className="text-lg ">Blue</td> */}
      {/* <Link to={`/marks/${_id}`} className="btn my-3 btn-warning ">Give Mark</Link > */}
      <button  onClick={() => document.getElementById("my_modal_4").showModal()} className="btn my-3 btn-warning ">Give Mark</button>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
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
};

export default SinglePending;
