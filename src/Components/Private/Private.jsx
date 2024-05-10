import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types'

const Private = ({children}) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location.pathname);
  if(loading){
    return <div className="h-[300px] flex justify-center items-center">
        <span className=" loading loading-spinner loading-lg"></span>
    </div>
  }
  if(user){
    return children;
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
};

Private.propTypes = {
    children: PropTypes.node
}


export default Private;