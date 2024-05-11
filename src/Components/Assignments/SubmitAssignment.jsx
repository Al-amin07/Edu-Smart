import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const SubmitAssignment = () => {
  const { user } = useAuth();
  const assignment = useLoaderData();
  const navigate = useNavigate();
  const { title, marks, difficulty, img_url
, due_date  } = assignment;

  const [files, setFiles] = useState(null);
  // console.log(assignment);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // const file = files
    // const note = form.area.value;
    // const status = 'pending';
    // console.log(file);
    // const newAssignment = {note, file, status}
    // console.log(newAssignment);
      const name = form.name.value;
      const note = form.area.value;
      const submitEmail = form.email.value;
     console.log(name,submitEmail);
    const formData = new FormData();
    
    formData.append("file", files);
    formData.append("status", 'pending');
    formData.append("title", title);
    formData.append("marks", marks);
    formData.append("img_url", img_url);
    formData.append("due_date", due_date);
    formData.append("difficulty", difficulty);
    formData.append("name", name);
    formData.append("note", note);
    formData.append("UserEmail", submitEmail);
    // axios.post('http://localhost:5000/submitAssignment', files)
    // .then(res => {
    //     console.log(res.data)
    // })
    // .catch(error => console.log(error))
    // const sData = { name, submitEmail};
    // formData.append('Submit',sData)
    try {
      const response = await axios.post(
        "http://localhost:5000/submitAssignment",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      if(response.data.success){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/assignment')
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileChange = (e) => {
    // const file = fileInputRef.current.files[0];
    const file = e.target.files[0];
    setFiles(file);
    console.log("Selected file:", file);
  };
  return (
    <div>
      <form className="border-2 p-8 w-1/2 mx-auto" onSubmit={handleSubmit}>
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
        <input type="file" onChange={handleFileChange} required name="upload" />{" "}
        <br /> <br />
        <label>Short Note : </label>
        <textarea
          className="border w-full px-8"
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
