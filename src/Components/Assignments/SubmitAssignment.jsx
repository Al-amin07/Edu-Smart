import axios from "axios";

import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const SubmitAssignment = () => {
  const { user } = useAuth();
  const assignment = useLoaderData();
  const navigate = useNavigate();
  const { title, marks, difficulty, img_url
, due_date  } = assignment;


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
 
      const name = form.name.value;
      const note = form.area.value;
      const file_url = form.upload.value;
      // const file = files;
      const submitEmail = form.email.value;
    //  console.log(name,submitEmail, file_url, note);
     const SubmittedAssignment = {
      title,
      marks, 
      difficulty, 
      img_url,
      due_date,
      name,
      submitEmail, 
      file_url, 
      note,
      status: 'pending'
     }
     console.log(SubmittedAssignment);
   
    axios.post('https://assignment-11-server-4.vercel.app/submitAssignment', SubmittedAssignment)
    .then(res => {
        // console.log('Success', res.data)
        if(res.data.success){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/assignment')
        }
    })
    .catch(error => console.log(error))
    

   
  };

 
  return (
    <div className="mx-3">
      <form style={{
        backgroundImage: "url('/submit2.jpeg')"
      }} className="rounded-lg px-8 py-4 bg-cover bg-center bg-no-repeat lg:w-1/2 mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center my-4">
          Submit Assignment
        </h2>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-medium">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text text-xl font-medium">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        
         <label className="label">
            <span className="label-text text-xl font-medium">Pdf/Doc Link : </span>
          </label>
        <input className="border w-full py-3 rounded-lg" type="url" 
        
         required name="upload" />{" "}
        <br /> <br />
        <label className="text-lg font-medium">Short Note : </label>
        <textarea
          className="border w-full px-3"
          required
          name="area"
          rows={6}
          id=""
        ></textarea>
        <button className="btn btn-accent w-full my-4">Submit</button>
      </form>
    </div>
  );
};

export default SubmitAssignment;
