import axios from "axios";
import {  useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Update = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const data = useLoaderData();
    // console.log(data);
    
   
    const [startDate, setStartDate] = useState(new Date());
    const [diff, setDiff] = useState("Easy");
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const img_url = form.image.value;
        const description = form.area.value;
        const difficulty = diff;
        const email = user.email;
    
        const due_date = startDate;
     
        const updateAssignment = { title, marks ,difficulty, description,due_date,   email, img_url };
        axios.put(`https://assignment-11-server-4.vercel.app/updateAssignment/${data._id}`, updateAssignment)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount || res.data.matchedCount){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/assignment')
            }
        })
        .catch(error => console.log(error))
    }
    const handleChange = (e) => {
        // console.log(e.target.value);
        setDiff(e.target.value);
      };

    return (
        <div
        style={{
          backgroundImage: "url('/update6.jpg')",
        }}
        className="hero bg-base-200 bg-cover bg-no-repeat  bg-center px-40 py-16 mt-12"
      >
        <div className="card  w-full  shadow-2xl border-2">
          <h2 className="text-3xl font-bold text-center mt-4 text-white">
            Update Assignment
          </h2>
          <form
            onSubmit={handleUpdate}
            className="card-body  grid grid-cols-2 gap-6"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white text-lg">Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={data.title}
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Marks</span>
              </label>
              <input
                type="number"
                name="marks"
                defaultValue={data.marks}
                placeholder="Marks"
                className="input input-bordered"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white text-lg">
                  Thumbnail Image URL
                </span>
              </label>
              <input
                type="text"
                name="image"
                defaultValue={data.img_url}
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
            <label className="label">
                <span className="label-text text-white text-lg">Difficulty</span>
              </label>
              <select
                onChange={handleChange}
                className="rounded-lg border-2 w-full py-2 pl-4 text-xl"
              >
                {/* <option value="none" selected disabled hidden>
                  Difficulty
                </option> */}
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div className="mt-2">
              <h2 className="mb-3  text-white">Due Date : </h2>
              <DatePicker
                className="py-3 w-[430px] rounded-lg px-3 "
                selected={startDate}
                defaultValue={data.date}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder=""
                defaultValue={user.email}
                className="input input-bordered"
                required
              />
            </div>
         
            <textarea
              className=" col-span-2 h-[170px] textarea textarea-bordered"
              placeholder="Description"
              name="area"
              defaultValue={data.description}
            ></textarea>
            <div className="form-control mt-6 col-span-2">
              <button type="submit" className="btn btn-primary">
                Update Assignment
              </button>
            </div>
          </form>
          <div></div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Update;