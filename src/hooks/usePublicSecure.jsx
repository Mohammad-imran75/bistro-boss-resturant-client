import axios from "axios";

const publicSecure = axios.create({
    baseURL:'http://localhost:5000/',
})
const usePublicSecure = () => {
    return publicSecure;
   
};

export default usePublicSecure;