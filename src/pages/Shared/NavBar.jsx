import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../porvider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  console.log(cart);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Wow log Out successfull",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        }).then(() => {
          navigate("/");
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "oh try agian",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
      });
  };
  const navOptions = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[20px] font-semibold text-[#EEFF25] border-b-4 border-orange-600"
              : "text-white text-[20px]"
          }
          to="/"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[20px] font-semibold text-[#EEFF25] border-b-4 border-orange-600"
              : "text-white text-[20px]"
          }
          to="/dashboard/cart"
        >
          <button className="btn">
            <FaShoppingCart className="mr-3 "></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[20px] font-semibold text-[#EEFF25] border-b-4 border-orange-600"
              : "text-white text-[20px]"
          }
          to="/menu"
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[20px] font-semibold text-[#EEFF25] border-b-4 border-orange-600"
              : "text-white text-[20px]"
          }
          to="/order/salad"
        >
          ORDER ITEM
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 text-white opacity-90 bg-[#15151580]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="text-2xl font-extrabold text-white">
            BISTRO BOSS <br /> <span className="text-xl">Restaurant</span>
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn btn-ghost bg-[#D1A054B2]"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-ghost bg-[#D1A054B2]">login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
