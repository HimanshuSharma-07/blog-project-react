import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate;

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="
        relative cursor-pointer
       hover:bg-red-300
        px-3 py-2 rounded-full
        after:absolute after:left-0 after:-bottom-1
        after:h-0.5 after:w-0 after:red-500
        hover:after:w-full after:transition-all
      "
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
