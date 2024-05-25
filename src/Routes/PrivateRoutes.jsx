import { useContext } from "react";
import { AuthContext } from "../porvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <>
        <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse dark:bg-gray-50">
	<div className="flex p-4 space-x-4 sm:px-8">
		<div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-300"></div>
		<div className="flex-1 py-2 space-y-4">
			<div className="w-full h-3 rounded dark:bg-gray-300"></div>
			<div className="w-5/6 h-3 rounded dark:bg-gray-300"></div>
		</div>
	</div>
	<div className="p-4 space-y-4 sm:px-8">
		<div className="w-full h-4 rounded dark:bg-gray-300"></div>
		<div className="w-full h-4 rounded dark:bg-gray-300"></div>
		<div className="w-3/4 h-4 rounded dark:bg-gray-300"></div>
	</div>
</div>
        </>
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={{from:location}} replace >
            
        </Navigate>
    );
};

export default PrivateRoutes;