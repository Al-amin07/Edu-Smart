
import one from "../../../public/13.jpg";
import two from "../../../public/12.jpg";
import three from "../../../public/14.jpg";
import four from "../../../public/15.jpg";



const Banner = () => {
  return (
    
    <div className="carousel h-[300px] md:h-[460px] lg:h-[650px] w-full bg-gradient-to-r from-[#00000066] to-[#00000033] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={one} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 left-[570px] bottom-8 z-20">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex flex-col justify-center  transform -translate-y-1/2 gap-3 top-1/2 pl-12 space-y-5 bg-gradient-to-r from-[#00000066] to-[#00000033] h-full">
          <h1 className="text-5xl font-medium text-white  ">
            Explore Boundless Learning Opportunities
          </h1>
          <p className="w-1/2 text-lg  text-white">
            {" "}
            Discover courses designed to inspire, challenge, and enrich your
            mind. Join a community of learners committed to personal growth and
            academic excellence. Unleash your potential with us!
          </p>
          <div className="flex  gap-6">
            <button className="btn bg-[#23be0a] text-white border-none text-lg">
              Learn More
            </button>
            <button className="btn btn-primary text-lg text-white">
              Assignments
            </button>
          </div>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={two} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 left-[570px] bottom-8 z-20">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex flex-col justify-center  transform -translate-y-1/2 gap-3 top-1/2 pl-12 space-y-5 bg-gradient-to-r from-[#00000066] to-[#00000033] h-full">
          <h1 className="text-5xl font-medium text-white  ">
            Explore Boundless Learning Opportunities
          </h1>
          <p className="w-1/2 text-lg  text-white">
            {" "}
            Discover courses designed to inspire, challenge, and enrich your
            mind. Join a community of learners committed to personal growth and
            academic excellence. Unleash your potential with us!
          </p>
          <div className="flex  gap-6">
            <button className="btn bg-[#23be0a] text-white border-none text-lg">
              Learn More
            </button>
            <button className="btn btn-primary text-lg text-white">
              Assignments
            </button>
          </div>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={three} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 left-[570px] bottom-8 z-20">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex flex-col justify-center  transform -translate-y-1/2 gap-3 top-1/2 pl-12 space-y-5 bg-gradient-to-r from-[#00000066] to-[#00000033] h-full">
          <h1 className="text-5xl font-medium text-white  ">
            Explore Boundless Learning Opportunities
          </h1>
          <p className="w-1/2 text-lg  text-white">
            {" "}
            Discover courses designed to inspire, challenge, and enrich your
            mind. Join a community of learners committed to personal growth and
            academic excellence. Unleash your potential with us!
          </p>
          <div className="flex  gap-6">
            <button className="btn bg-[#23be0a] text-white border-none text-lg">
              Learn More
            </button>
            <button className="btn btn-primary text-lg text-white">
              Assignments
            </button>
          </div>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={four}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 left-[570px] bottom-8 z-20">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex flex-col justify-center  transform -translate-y-1/2 gap-3 top-1/2 pl-12 space-y-5 bg-gradient-to-r from-[#00000066] to-[#00000033] h-full">
          <h1 className="text-5xl font-medium text-white  ">
            Explore Boundless Learning Opportunities
          </h1>
          <p className="w-1/2 text-lg  text-white">
            {" "}
            Discover courses designed to inspire, challenge, and enrich your
            mind. Join a community of learners committed to personal growth and
            academic excellence. Unleash your potential with us!
          </p>
          <div className="flex  gap-6">
            <button className="btn bg-[#23be0a] text-white border-none text-lg">
              Learn More
            </button>
            <button className="btn btn-primary text-lg text-white">
              Assignments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
