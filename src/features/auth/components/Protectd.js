import { useSelector } from "react-redux";
import { selectLogedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";
import { HomeModernIcon } from "@heroicons/react/24/outline";

function Protected({children}){
    const user=useSelector(selectLogedInUser)
    if(!user){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    return children;
 
}
export default Protected;