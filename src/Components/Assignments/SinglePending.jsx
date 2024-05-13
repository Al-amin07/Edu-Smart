
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const SinglePending = ({ assignment, ind}) => {
  // const { user } = useAuth();
  console.log(assignment);
  const { _id,  title, marks, name,  } = assignment;
 

  return (
    <tr className="">
      {/* hover:bg-base-200 */}
      <th className="text-lg ">{ind}</th>
      <td className="text-lg ">{title}</td>
      <td className="text-lg ">{marks}</td>
      <td className="text-lg ">{name}</td>
      <Link to={`/getMark/${_id}`} className="btn my-3 btn-warning">Get Mark</Link>

    </tr>
  );
};

SinglePending.propTypes = {
  assignment: PropTypes.object,
  ind: PropTypes.number,
  
};

export default SinglePending;

