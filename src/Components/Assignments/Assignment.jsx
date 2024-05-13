import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Assignment = ({ assignment, handleAssignmentDelete }) => {
    
    const { _id, title, marks,  difficulty, img_url, description, email   } = assignment;
  return (
    <div className="p-6  border rounded-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={img_url}
          className="w-full md:w-[300px] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold  ">{title}</h1>
         <div className='py-4 flex gap-6'>
            <h2 className='text-xl font-semibold text-[#23BE0A]'>#Marks : {marks}</h2>
            <h2 className='text-xl font-semibold text-[#356feb]'>#Difficulty : {difficulty}</h2>
         </div>
         <p className='md:w-3/4 mb-4'>{description}</p>
         {/* <p className='text-[#23BE0A] font-semibold mb-3'>Created By : {email}</p> */}
          <div className='space-x-5'>
            <Link to={`/update/${_id}`}>
            <button className='btn  font-medium rounded-2xl px-3 py-2 text-[#32A8FF] bg-[#E0EEFF]'>Update</button>
            </Link>
            <button onClick={() => handleAssignmentDelete(_id, email || '')} className='btn btn-error  font-medium rounded-2xl px-3 py-2 text-white'>Delete</button>
            <Link to={`/details/${_id}`}>
            <button className='btn  font-medium rounded-2xl px-3 py-2 text-white bg-[#23BE0A]'>View Assignment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Assignment.propTypes = {
    assignment: PropTypes.object,
    handleAssignmentDelete: PropTypes.func
}

export default Assignment;
