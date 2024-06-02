import { FaCalendar, FaHome, FaPaypal, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FcFeedback } from "react-icons/fc";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";
const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-[280px] bg-[#D1A054] min-h-screen">
        <h1 className="uppercase font-extrabold text-2xl p-8">
          Bistro Boss <br />
          Resturant
        </h1>
        <div>
          <ul className="menu space-y-3 font-bold uppercase">
            <li>
              <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment"><FaPaypal></FaPaypal> Payment history</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> MY Cart</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/review"><FcFeedback></FcFeedback> Add Review</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings"><TbBrandBooking></TbBrandBooking> MY Booking</NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/"><FaHome></FaHome>Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu"><IoMdMenu></IoMdMenu>Menu</NavLink>
            </li>
            <li>
              <NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag>shop</NavLink>
            </li>
            <li>
              <NavLink to="/menu"><MdContactEmergency></MdContactEmergency>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
