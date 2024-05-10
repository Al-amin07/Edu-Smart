import { Outlet } from "react-router-dom";
import Nav from "./Header/Nav";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div>
                <Outlet></Outlet>
            </div>
        
        </div>
    );
};

export default Root;