import Banner from "./Header/Banner";

import Faq from "./Header/Faq";
import Feature from "./Header/Feature";



const Home = () => {
    return (
        <div className="px-5">
        <Banner></Banner>
        <Feature></Feature>
        <Faq></Faq>
        </div>
    );
};

export default Home;