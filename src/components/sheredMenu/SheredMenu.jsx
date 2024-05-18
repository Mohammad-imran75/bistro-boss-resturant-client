

const SheredMenu = ({item}) => {
    console.log(item)
    const {image,recipe,name,price} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[100px]" src={image} alt="" />
            <div>
                <h1 className="text-[20px]">{name}-----------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-semibold">${price}</p>
        </div>
    );
};

export default SheredMenu;