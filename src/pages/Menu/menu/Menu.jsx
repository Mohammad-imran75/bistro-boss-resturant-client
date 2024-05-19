import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover";
import SheredMenu from "../../../components/sheredMenu/SheredMenu";


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title> Bistro Boss | Menu</title>
      </Helmet>
      <Cover ></Cover>
      <SheredMenu></SheredMenu>
    </div>
  );
};

export default Menu;
