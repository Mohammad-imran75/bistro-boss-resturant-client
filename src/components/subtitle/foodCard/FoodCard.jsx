

const FoodCard = ({item}) => {
    const {image,recipe,name,price} = item;
    return (
        <div className="rounded-md relative shadow-md bg-amber-100  text-gray-800">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
    <p className="bg-black absolute right-3 top-2  px-4 py-1 text-white font-semibold">${price}</p>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
			<p className="dark:text-gray-800">{recipe}</p>
		</div>
		<button className="w-full btn btn-outline border-0 border-b-4 bg-orange-600">Add to Card</button>
	</div>
</div>
    );
};

export default FoodCard;