import { Outlet } from "react-router-dom";
import Nav from "./Header/Nav";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
        
        </div>
    );
};

export default Root;