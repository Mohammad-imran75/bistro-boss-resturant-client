
import SheredTitle from "../../../components/subtitle/SheredTitle";
import SheredMenu from "../../../components/sheredMenu/SheredMenu";
import useMenu from "../../../hooks/useMenu";

const MenuItem = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item=> item.category === "popular")
    
  return (
    <section>
      <SheredTitle subHeading="---Check it out---" heading="FROM OUR MENU"></SheredTitle>
      <div className="grid md:grid-cols-2 gap-6 space-y-4 mb-10 p-4">
        {
            popular.map(item=><SheredMenu key={item._id}item={item}></SheredMenu>)
        }
      </div>

    </section>

  );
};

export default MenuItem;
