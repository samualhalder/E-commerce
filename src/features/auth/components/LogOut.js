import { useDispatch, useSelector } from "react-redux";
import { logOutUserAsync, selectLoggedInUser } from "../authSlice";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function LogeOut(){
    const dispatch=useDispatch();
    const user=useSelector(selectLoggedInUser);
    useEffect(()=>{
        dispatch(logOutUserAsync());
    })
    return (
      <>
      {!user && <Navigate to='/login' replace={true}></Navigate>}
      </>
    );
}
export default LogeOut;