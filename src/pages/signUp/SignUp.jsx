import { useContext, useState } from "react";
import registerImg from "../../assets/others/authentication2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../porvider/AuthProvider";
import Swal from "sweetalert2";
import usePublicSecure from "../../hooks/usePublicSecure";
import SocialLogin from "../../components/sheredMenu/sociallogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const publicSecure = usePublicSecure();
    const {signUpUser,updateUserPropile} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signUpUser(data.email,data.password)
    .then(result => {
        console.log(result.user);
       updateUserPropile(data.name,data.photo)
       .then(()=>{
        const userInfo = {
          name: data.name,
          email:data.email
        }
          publicSecure.post('/users',userInfo)
          .then(res=>{
            if(res.data.insertedId){
              Swal.fire({
                icon:'success',
                title: "Sign Up successfull",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              }).then(()=>{
                navigate('/login')
              })
            }
          })
    
       })
    })
    reset()
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <img src={registerImg} alt="" />
          </div>
          <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center pt-3">
              Sign Up now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 text-xl">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600 text-xl">Photo URl is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xl">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  })}
                />
                {errors.password && (
                  <span className="text-red-600 text-xl">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 text-xl">Password must be six character</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 text-xl">Password must have less then 20 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 text-xl">Password must be one upper case , one lowercase , one numeric and one sepcial character </p>
                )}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="lg:absolute top-12 right-4 "
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-[#D1A054] text-white"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
            <div className="divider">OR</div>
            <SocialLogin></SocialLogin>
           
            <p className="text-[#D1A054] font-semibold text-center pb-4 text-xl">
              <small>
                All Ready Register? <Link to="/login">Go to Login</Link>
              </small>
            </p>
            
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SignUp;
