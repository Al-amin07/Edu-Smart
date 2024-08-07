import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
// import daisyui from "daisyui";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

const CreateAssignment = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [diff, setDiff] = useState("Easy");



  const handleCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const img_url = form.image.value;
    const description = form.area.value;
    const difficulty = diff;
    const email = user.email;

    // const due_date = startDate.toLocaleDateString('en-US');
    const todayDate = moment().format('L').split('/');  
    const tday = parseInt(todayDate[1])
    const tMonth = parseInt(todayDate[0])
    const tYear = parseInt(todayDate[2])
    
    const formattedDate = new Date(startDate);
    const day = formattedDate.getDate();
    const month = formattedDate.getMonth() + 1; // Month is 0-indexed
    const year = formattedDate.getFullYear();
    if(tYear === year ){
      if(tMonth === month){
        if(tday > day){
          toast('Invalid Time!!!');
          return;
        }
      }
      else if(tMonth > month){
        toast('Invalid Time!!!');
        return;
      }
    }
    else if(tYear > year){
      toast('Invalid Time!!!');
      return;
    }
 
    const update =  `${day}/${month}/${year}`;
    
    const due_date = update;

    const newAssignment = { title, marks ,difficulty, description,due_date,   email, img_url };
    console.log(newAssignment);
    axios
      .post(`https://assignment-11-server-4.vercel.app/created?email=${user.email}`, newAssignment, {withCredentials: true})
      .then((res) => {
        if (res.data.insertedId) {
          toast("Assignment Added Successfully!!!");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  

  const handleChange = (e) => {
    
    setDiff(e.target.value);
  };
  return (
    <div
      style={{
        backgroundImage: "url('/9.jpeg')",
      }}
      className="hero bg-base-200 bg-cover bg-no-repeat  bg-center px-2 md:px-20 lg:px-40 py-12 lg:py-16 mt-12"
    >
      <div className="card  w-full  shadow-2xl border-2">
        <h2 className="text-3xl font-bold text-center mt-4 text-white">
          Create Assignment
        </h2>
        <form
          onSubmit={handleCreate}
          className="px-6 py-6 md:px-12 md:py-12  grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text  text-white text-lg">Title</span>
            </label>
            <input
              type="text"
              name="title"
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

          <div className="mt-2 w-full">
            <h2 className="mb-3  text-white">Due Date : </h2>
            <DatePicker
              className="py-3 w-[400px] md:w-[600px] lg:w-[430px] rounded-lg px-3 "
              selected={startDate}
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
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text  text-white text-lg">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div> */}

          <textarea
            className=" lg:col-span-2 h-[170px] textarea textarea-bordered"
            placeholder="Description"
            name="area"
            required
          ></textarea>


          <div className="form-control mt-6 lg:col-span-2">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
       
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateAssignment;
