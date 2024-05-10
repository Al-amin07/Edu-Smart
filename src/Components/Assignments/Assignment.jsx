import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Assignment = ({ assignment, handleAssignmentDelete }) => {
    
    const { _id, title, marks,  difficulty, img_url, description, email   } = assignment;
  return (
    <div className="p-6  bg-base-200">
      <div className="flex gap-6">
        <img
          src={img_url}
          className="w-[400px] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold  ">{title}</h1>
         <div className='py-4 flex gap-6'>
            <h2 className='text-2xl font-semibold text-[#23BE0A]'>#Marks : {marks}</h2>
            <h2 className='text-2xl font-semibold text-[#356feb]'>#Difficulty : {difficulty}</h2>
         </div>
         <p className='w-3/4 mb-4'>{description}</p>
         <p className='text-[#23BE0A] font-semibold mb-3'>Created By : {email}</p>
          <div className='space-x-5'>
            <Link to={`/update/${_id}`}>
            <button className='btn text-xl font-medium rounded-2xl px-3 py-2 text-[#32A8FF] bg-[#E0EEFF]'>Update</button>
            </Link>
            <button onClick={() => handleAssignmentDelete(_id, email || '')} className='btn btn-error text-xl font-medium rounded-2xl px-3 py-2 text-white'>Delete</button>
            <button className='btn text-xl font-medium rounded-2xl px-3 py-2 text-white bg-[#23BE0A]'>View Assignment</button>
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
