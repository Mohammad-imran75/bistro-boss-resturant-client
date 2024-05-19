import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Categorey from "../categorey/Categorey";
import Reviews from "./Reviews/Reviews";
import FormMenu from "./formmenu/FormMenu";
import MenuItem from "./menuItem/MenuItem";
import ChefService from "./service/ChefService";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
        
      </Helmet>
      <Banner></Banner>
      <Categorey></Categorey>
      <ChefService></ChefService>
      <MenuItem></MenuItem>
      <FormMenu></FormMenu>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
