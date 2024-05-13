
import one from "../../../public/13.jpg";
import two from "../../../public/12.jpg";
import three from "../../../public/14.jpg";
import four from "../../../public/15.jpg";
import { TypeAnimation } from "react-type-animation";
import './Ban.css';

import 'animate.css';

const Banner = () => {
  return (
    
    <div className="animate__animated animate__backInLeft carousel h-[350px] md:h-[550px] lg:h-[650px] w-full bg-gradient-to-r from-[#00000066] to-[#00000033] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={four} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 left-[300px] md:left-[450px] lg:left-[570px] bottom-4 md:bottom-8 z-20">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex flex-col justify-center  transform -translate-y-1/2 gap-3 top-1/2 pl-3 md:pl-12 space-y-5 bg-gradient-to-r from-[#00000066] to-[#00000033] h-full">
        <TypeAnimation 
          sequence={[
            
            'Explore Boundless Learning Opportunities',
            1000, 
            'Explore Boundless Avenues for Personal Growth',
            1000,
            'Explore Boundless Virtual Workshops and Webinars',
            1000,
            'Explore Boundless DIY Projects in Maker Spaces',
            1000
          ]}
          wrapper="span"
          speed={50}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white"
          // style={{ 
          //   fontSize: '2em', 
          //   display: 'inline-block', 
          //   color: 'White' }}
          repeat={Infinity}
        />
          <p className="lg:w-1/2 md:text-lg  text-white">
            {" "}
            Discover courses designed to inspire, challenge, and enrich your
            mind. Join a community of learners committed to personal growth and
            academic excellence. Unleash your potential with us!
          </p>
          <div className="flex  gap-6">
            <button className="btn bg-[#23be0a] text-white border-none md:text-lg">
              Learn More
            </button>
            <button className="btn btn-primary md:text-lg text-white">
              Assignments
            </button>
          </div>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={two} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 left-[300px] md:left-[450px] lg:left-[570px] bottom-4 md:bottom-8 z-20">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex flex-col justify-center  transform -translate-y-1/2 gap-3 top-1/2 pl-3 md:pl-12 space-y-5 bg-gradient-to-r from-[#00000066] to-[#00000033] h-full">
        <TypeAnimation 
          sequence={[
            
            'Explore Boundless Learning Opportunities',
            1000, 
            'Explore Boundless Avenues for Personal Growth',
            1000,
            'Explore Boundless Virtual Workshops and Webinars',
            1000,
            'Explore Boundless DIY Projects in Maker Spaces',
            1000
          ]}
          wrapper="div"
          speed={50}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white"
          // style={{ 
          //   fontSize: '3em', 
          //   display: 'inline-block', 
          //   color: 'White' }}
          repeat={Infinity}
        />
          <p className="lg:w-1/2 md:text-lg text-white">
            {" "}
            Discover courses designed to inspire, challenge, and enrich your
            mind. Join a community of learners committed to personal growth and
            academic excellence. Unleash your potential with us!
          </p>
          <div className="flex  gap-6">
            <button className="btn bg-[#23be0a] text-white border-none md:text-lg">
              Learn More
            </button>
            <button className="btn btn-primary md:text-lg text-white">
              Assignments
            </button>
          </div>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={three} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 left-[300px] md:left-[450px] lg:left-[570px] bottom-4 md:bottom-8 z-20">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex flex-col justify-center  transform -translate-y-1/2 gap-3 top-1/2 pl-3 md:pl-12 space-y-5 bg-gradient-to-r from-[#00000066] to-[#00000033] h-full">
          {/* <h1 className="text-5xl font-medium text-white  ">
            Explore Boundless Learning Opportunities
          </h1> */}
          <TypeAnimation 
          sequence={[
            
            'Explore Boundless Learning Opportunities',
            1000, 
            'Explore Boundless Avenues for Personal Growth',
            1000,
            'Explore Boundless Virtual Workshops and Webinars',
            1000,
            'Explore Boundless DIY Projects in Maker Spaces',
            1000
          ]}
          wrapper="div"
          speed={50}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white"
          // style={{ 
          //   fontSize: '3em', 
          //   display: 'inline-block', 
          //   color: 'White' }}
          repeat={Infinity}
        />
          <p className="lg:w-1/2 md:text-lg text-white">
            {" "}
            Discover courses designed to inspire, challenge, and enrich your
            mind. Join a community of learners committed to personal growth and
            academic excellence. Unleash your potential with us!
          </p>
          <div className="flex  gap-6">
            <button className="btn bg-[#23be0a] text-white border-none md:text-lg">
              Learn More
            </button>
            <button className="btn btn-primary md:text-lg text-white">
              Assignments
            </button>
          </div>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={one}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 left-[300px] md:left-[450px] lg:left-[570px] bottom-4 md:bottom-8 z-20">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex flex-col justify-center  transform -translate-y-1/2 gap-3 top-1/2 pl-3 md:pl-12 space-y-5 bg-gradient-to-r from-[#00000066] to-[#00000033] h-full">
        <TypeAnimation 
          sequence={[
            
            'Explore Boundless Learning Opportunities',
            1000, 
            'Explore Boundless Avenues for Personal Growth',
            1000,
            'Explore Boundless Virtual Workshops and Webinars',
            1000,
            'Explore Boundless DIY Projects in Maker Spaces',
            1000
          ]}
          wrapper="div"
          speed={50}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white"
          // style={{ 
          //   fontSize: '3em', 
          //   display: 'inline-block', 
          //   color: 'White' }}
          repeat={Infinity}
        />
          <p className="lg:w-1/2  md:text-lg  text-white">
            {" "}
            Discover courses designed to inspire, challenge, and enrich your
            mind. Join a community of learners committed to personal growth and
            academic excellence. Unleash your potential with us!
          </p>
          <div className="flex  gap-6">
            <button className="btn bg-[#23be0a] text-white border-none md:text-lg">
              Learn More
            </button>
            <button className="btn btn-primary md:text-lg text-white">
              Assignments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
