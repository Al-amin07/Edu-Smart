import axios from "axios";
import {  useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";
import moment from "moment";

const Update = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [data ,setData] = useState({});
    const navigate = useNavigate();
   

    useEffect(() => {
      axios.get(`https://assignment-11-server-4.vercel.app/update/${id}?email=${user.email}`, {withCredentials: true})
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error))

    }, [])
   
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
    // https://assignment-11-server-4.vercel.app
        const todayDate = moment().format('L').split('/');  
        const tday = parseInt(todayDate[1])
        const tMonth = parseInt(todayDate[0])
        const tYear = parseInt(todayDate[2])
        console.log(typeof(todayDate[1]));
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
     
        const updateAssignment = { title, marks ,difficulty, description,due_date,   email, img_url };
        console.log(updateAssignment);
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
          backgroundImage: "url('/9.jpeg')",
        }}
        className="hero bg-base-200 bg-cover bg-no-repeat  bg-center px-2 md:px-20 lg:px-40 py-12 lg:py-16 mt-12"
      >
        <div className="card  w-full  shadow-2xl border-2">
          <h2 className="text-3xl font-bold text-center mt-4 text-white">
            Update Assignment
          </h2>
          <form
            onSubmit={handleUpdate}
            className="px-6 py-6 lg:px-10 lg:py-10 gap-6 grid grid-cols-1 lg:grid-cols-2"
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
                className="py-3 w-[400px] md:w-[600px] lg:w-[430px] rounded-lg px-3 "
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
              className="lg:col-span-2 w-full h-[170px] mt-5 textarea textarea-bordered"
              placeholder="Description"
              name="area"
              defaultValue={data.description}
            ></textarea>
            <div className="form-control mt-6  lg:col-span-2">
              <button type="submit" className="btn btn-primary">
                Update Assignment
              </button>
            </div>
          </form>
          
        </div>
        <ToastContainer />
      </div>
    );
};

export default Update;