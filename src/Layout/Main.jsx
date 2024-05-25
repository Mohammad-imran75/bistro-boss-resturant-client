import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";



const Main = () => {
    const location = useLocation();
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login');
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
           {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;