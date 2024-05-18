import { useEffect, useState } from "react";
import SheredTitle from "../../../components/subtitle/SheredTitle";
import SheredMenu from "../../../components/sheredMenu/SheredMenu";

const MenuItem = () => {
    const [menu,setMenu] = useState([]);
    console.log(menu)
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data => {
           const menuItem = data.filter(item => item.category === "popular")
           setMenu(menuItem)
        } )
    },[])
  return (
    <section>
      <SheredTitle subHeading="---Check it out---" heading="FROM OUR MENU"></SheredTitle>
      <div className="grid md:grid-cols-2 gap-6 space-y-4 mb-10 p-4">
        {
            menu.map(item=><SheredMenu key={item._id}item={item}></SheredMenu>)
        }
      </div>

    </section>

  );
};

export default MenuItem;
