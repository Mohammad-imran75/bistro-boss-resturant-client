import Banner from "../Banner/Banner";
import Categorey from "../categorey/Categorey";
import FormMenu from "./formmenu/FormMenu";
import MenuItem from "./menuItem/MenuItem";
import ChefService from "./service/ChefService";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categorey></Categorey>
           <ChefService></ChefService>
           <MenuItem></MenuItem>
           <FormMenu></FormMenu>
        </div>
    );
};

export default Home;