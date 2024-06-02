import Swal from "sweetalert2";
import SheredTitle from "../../../components/subtitle/SheredTitle";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const Cart = () => {
  const [cart,refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDeleted = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        axiosSecure.delete(`carts/${id}`)
        .then(res=>{
            if(res.data.deletedCount > 0){
                  Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          refetch()
            }
        })
    }


      });
  }
  return (
    <div>
      <SheredTitle
        subHeading={"---My Cart---"}
        heading={"WANNA ADD MORE?"}
      ></SheredTitle>
      <div className="flex justify-evenly mt-5 items-center">
        <h1 className="font-semibold text-3xl text-[#151515]">
          Total orders: {cart.length}
        </h1>
        <h1 className="font-semibold text-3xl text-[#151515]">
          Total Price: ${totalPrice}
        </h1>
        <button className="btn btn-md bg-[#D1A054] text-white">Pay</button>
      </div>
      {/* tabular form  */}
      <div className="overflow-x-auto">
        <table className="table font-bold mt-6 ">
          {/* head */}
          <thead className="bg-[#D1A054] text-white font-semibold">
            <tr>
                <th>

                </th>
              <th>
                IMAGE
              </th>
              <th>Name</th>
              <th>USER EMAIL</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>{item.email}</td>
                <td>{item.price}</td>
                <th>
                  <button onClick={()=>handleDeleted(item._id)} className="btn btn-md bg-[#D1A054]"><MdDelete className="text-red-500 text-3xl"></MdDelete></button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Cart;
