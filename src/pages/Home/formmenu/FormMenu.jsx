import SheredTitle from "../../../components/subtitle/SheredTitle";
import featured from '../../../assets/home/featured.jpg'
import './featured.css'
const FormMenu = () => {
  return (
    <div className="item-featured pt-8 bg-fixed bg-black bg-opacity-15 bg-cover">
      <SheredTitle subHeading="---Check it out---"
      heading="FROM OUR MENU"></SheredTitle>
      <div className="md:flex justify-center items-center px-36 pb-36 gap-6">
       <div className="text-white ">
       <img className="" src={featured} alt="" />
       </div>
        <div className="text-white font-semibold space-y-6">
        <p>March 20, 2023</p>
        <p>WHERE CAN I GET SOME?</p>
        <p>Step into an elegant yet inviting setting where every detail, from the décor to the lighting, has been thoughtfully curated to enhance your dining experience. Whether it’s a romantic dinner, a family gathering.</p>
        <button className="btn btn-outline border-0 text-white border-b-4 border-orange-700">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default FormMenu;
