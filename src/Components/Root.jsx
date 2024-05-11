import { Outlet } from "react-router-dom";
import Nav from "./Header/Nav";
import Footer from "./Footer/Footer";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        
        </div>
    );
};

export default Root;