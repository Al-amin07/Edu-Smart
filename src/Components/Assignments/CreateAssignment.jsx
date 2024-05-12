import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
// import daisyui from "daisyui";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    const due_date = startDate;
    // console.log(title, marks, image, difficulty, email, date);
    const newAssignment = { title, marks ,difficulty, description,due_date,   email, img_url };
    console.log(newAssignment);
    axios
      .post("https://assignment-11-server-4.vercel.app/created", newAssignment)
      .then((res) => {
        if (res.data.insertedId) {
          toast("Assignment Added Successfully!!!");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  console.log(startDate);

  const handleChange = (e) => {
    console.log(e.target.value);
    setDiff(e.target.value);
  };
  return (
    <div
      style={{
        backgroundImage: "url('/9.jpeg')",
      }}
      className="hero bg-base-200 bg-cover bg-no-repeat  bg-center px-40 py-16 mt-12"
    >
      <div className="card  w-full  shadow-2xl border-2">
        <h2 className="text-3xl font-bold text-center mt-4 text-white">
          Create Assignment
        </h2>
        <form
          onSubmit={handleCreate}
          className="card-body  grid grid-cols-2 gap-6"
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
          <div className="mt-2">
            <h2 className="mb-3  text-white">Due Date : </h2>
            <DatePicker
              className="py-3 w-[430px] rounded-lg px-3 "
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
            className=" col-span-2 h-[170px] textarea textarea-bordered"
            placeholder="Description"
            name="area"
          ></textarea>
          <div className="form-control mt-6 col-span-2">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
        <div></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateAssignment;
