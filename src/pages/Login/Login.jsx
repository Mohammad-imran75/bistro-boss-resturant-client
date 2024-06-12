import { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../porvider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/sheredMenu/sociallogin/SocialLogin';
const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
    const captchaRef = useRef(null);
    const [disable,setDisable] = useState(true);
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email,password)
        .then(result=>{
            console.log(result.data);
            Swal.fire({
                icon:"success",
                title: "Login successfull",
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
                navigate(from, { replace: true });
              })
        }).catch((error)=>{
            console.log(error.message);
            Swal.fire({
                icon:'error',
                title: "plz try again",
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
              });
        })
    };
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[]);
    const velidateHandleCaptcha = (e) =>{
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)==true) {
           setDisable(false);
        }else{
            setDisable(true);
        }
    };
    
  return (
    <div>
      <div className="hero  bg-slate-200">
        <div className="hero-content md:w-1/2 p-6">
         <img className='p-6' src={loginImg} alt="" />
          <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-4">Login !</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? 'text':'password'}
                  placeholder="password"
                  name='password'
                  className="input input-bordered"
                  required
                />
               <span
                onClick={() => setShowPassword(!showPassword)}
                className="lg:absolute  right-10 top-[240px] "
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={velidateHandleCaptcha}
                  placeholder="type above recapta code"
                  name='recaptcha'
                  className="input input-bordered"
                  ref={captchaRef}
                  required
                />
              </div>
             
              <div className="form-control mt-6">
              <input disabled={disable} className="btn btn-primary text-white font-semibold bg-[#D1A054B2]" type="submit" value="Login" />
              </div>
             
            </form>
            <SocialLogin></SocialLogin>
            <p className='text-[#D1A054] font-semibold text-center pb-4 text-xl'><small>New here ? <Link to='/signup'>create an acount</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
