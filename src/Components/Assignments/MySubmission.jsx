import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";


const MySubmission = () => {
    const { user } = useAuth();
    const url = `http://localhost:5000/mysubmission?email=${user.email}`;
    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            My Submission
        </div>
    );
};

export default MySubmission;