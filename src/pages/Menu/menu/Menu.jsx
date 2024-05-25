import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import SheredTitle from "../../../components/subtitle/SheredTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "./menuCategorey/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  // console.log(menu)
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  // console.log(offered)
  return (
    <div>
      <Helmet>
        <title> Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our menu"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <SheredTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SheredTitle>
      <MenuCategory items={offered} img={menuImg}></MenuCategory>
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertImg}
        description={
          "Indulge in a slice of heaven with our rich and creamy chocolate cheesecake."
        }
      ></MenuCategory>

      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title={"pizza"}
        description={"Oven-fresh, cheesy, delicious pizza perfection."}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        img={saladImg}
        title={"salad"}
        description={"Crisp, vibrant, healthy salad bowl."}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        img={soupImg}
        title={"soup"}
        description={"Warm, comforting, savory soup delight."}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
