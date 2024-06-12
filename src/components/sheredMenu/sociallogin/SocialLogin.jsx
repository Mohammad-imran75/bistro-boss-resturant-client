import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import usePublicSecure from "../../../hooks/usePublicSecure";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const publicSecure = usePublicSecure();
    const navigate = useNavigate();
    const handleGoogleLogin= () =>{
        googleLogin()
        .then(result => {
            console.log(result);
            const userInfo =  {
              email : result.user?.email,
              name : result.user?.displayName
            };
            publicSecure.post('/users',userInfo)
            .then(res=>{
              console.log(res);
              navigate('/')
            })
        })
    }
  return (
    <div>
      <div className="flex  justify-center">
        <button onClick={handleGoogleLogin} className="btn font-bold text-2xl bg-red-100">
         <FaGoogle  className="text-green-300 "></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
