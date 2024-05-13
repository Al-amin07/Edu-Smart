import logo from "../../../public/logo3.jpg";

const Footer = () => {
  return (
    <footer className=" mt-16 p-16 bg-neutral grid grid-cols-1 md:text-left md:grid-cols-2 lg:grid-cols-4 gap-4 text-neutral-content pl-24">
      <aside>
        
        <img className="h-16 rounded-full" src={logo} alt="" />
        <p className="text-2xl font-medium">EduSmart</p>
        <p>
          
          
          Explore Boundless Learning Opportunities
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-xl ">Services</h6>
        <div className="flex flex-col">
        <a className="link link-hover">Assignments</a>
        <a className="link link-hover">Create Assignment</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title text-xl">Company</h6>
        <div className="flex flex-col">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title text-xl">Legal</h6>
       <div className="flex flex-col">
       <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
       </div>
      </nav>
    </footer>
  );
};

export default Footer;
