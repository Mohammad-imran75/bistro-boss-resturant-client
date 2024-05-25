import FoodCard from "../../../components/subtitle/foodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div>
             <div className="grid md:grid-cols-3 p-6 gap-6">
            {
                items.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
        </div>
    );
};

export default OrderTab;