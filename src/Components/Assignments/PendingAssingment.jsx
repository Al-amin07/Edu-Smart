import axios from "axios";
import { useEffect, useState } from "react";


const PendingAssingment = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/submitAssignment')
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
          Pending
        </div>
    );
};

export default PendingAssingment;