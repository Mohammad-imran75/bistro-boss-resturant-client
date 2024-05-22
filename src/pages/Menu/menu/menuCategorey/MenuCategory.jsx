import SheredMenu from "../../../../components/sheredMenu/SheredMenu";
import Cover from "../../../Shared/Cover";


const MenuCategory = ({items,img,title,description}) => {
    return (
        <div>
           {
            title &&  <Cover img={img} title={title} description={description} ></Cover>
           }
            <div className="grid md:grid-cols-2 gap-6 space-y-4 mb-10 py-6 px-24">
        {
            items.map(item=><SheredMenu key={item._id}item={item}></SheredMenu>)
        }

      </div>
        </div>
    );
};

export default MenuCategory;