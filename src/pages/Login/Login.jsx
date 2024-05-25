import { useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
    const captchaRef = useRef(null);
    const [disable,setDisable] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    };
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[]);
    const velidateHandleCaptcha = () =>{
        const user_captcha_value = captchaRef.current.value;
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
          <div className="card md:w-1/2  shadow-2xl bg-slate-200">
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
                  type="password"
                  placeholder="password"
                  name='password'
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="type above recapta code"
                  name='recaptcha'
                  className="input input-bordered"
                  ref={captchaRef}
                  required
                />
                <button onClick={velidateHandleCaptcha} className='btn btn-outline btn-xs mt-2'>velidate</button>
              </div>
             
              <div className="form-control mt-6">
              <input disabled={disable} className="btn btn-primary text-white font-semibold bg-[#D1A054B2]" type="submit" value="Login" />
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
