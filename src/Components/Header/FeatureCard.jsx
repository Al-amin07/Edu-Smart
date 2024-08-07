
import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const FeatureCard = ({singledata}) => {
   
    const { title, subject, image, description, difficulty ,dueDate   }  = singledata;

    useEffect(() => {
      AOS.init({duration: '1000'})
    }, [])
    return (
        <div data-aos='fade-up' className="  card-compact rounded-b-xl hover:border-2  bg-base-100 shadow-xl">
        <figure className="relative"><img className="h-[250px] w-full " src={image} alt="Shoes" />
        <p className={`${difficulty === 'Hard'? 'bg-red-600': difficulty === 'Medium' ? 'bg-yellow-600' : 'bg-green-600'} py-2 px-3 inline-block rounded-full rounded-r-none text-white  absolute right-0 top-0`}>{difficulty}</p>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold">{title}</h2>
          <p>{description}</p>
          <p className="text-lg font-medium">Subject : {subject}</p>
          <p className="font-medium">Due Date : {dueDate}</p>
        
        </div>
      </div>
    );
};
// https://assignment-11-server-4.vercel.app
FeatureCard.propTypes = {
    singledata: PropTypes.object
}

export default FeatureCard;