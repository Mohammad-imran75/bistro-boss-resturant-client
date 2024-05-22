import orderImg from "../../assets/shop/banner2.jpg"
import useMenu from "../../hooks/useMenu";
import Cover from "../Shared/Cover";

const Order = () => {
    const [menu] = useMenu();
    console.log(menu);
    const offered = menu.filter(item=> item.category === "offered");
  const desserts = menu.filter(item=> item.category === "dessert");
  const pizza = menu.filter(item=> item.category === "pizza");
  const salad = menu.filter(item=> item.category === "salad");
  const soup = menu.filter(item=> item.category === "soup");
    return (
        <div>
            <Cover img={orderImg} title="our shop"  description="Would you like to try a dish?"></Cover>
            
        </div>
    );
};

export default Order;