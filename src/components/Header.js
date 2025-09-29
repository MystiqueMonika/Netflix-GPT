import React from "react";
<<<<<<< HEAD
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./../utils/userSlice";
import { auth } from "./../utils/firebase";
import { useDispatch, } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, username, email } = user.uid;
        dispatch(addUser({ uid: uid, username: username, email: email }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        gradient: "black",
        backgroundImage: "linear-gradient(to top, gray, black)",
        display: "flex",
        width: "-webkit-fill-available",
        justifyContent: "space-between",
      }}
    >
      <img
        style={{ width: "200px", height: "80px", opacity: "50" }}
        src= {NETFLIX_LOGO}
      />
      <img
        style={{ alignItems: "center", display: "flex", position: "relative" }}
        src={USER_LOGO}
        alt="user logo"
      />
    </div>
  );
};

export default Header;
=======

const Header = () => {
    return (

        <div style={{ position: "absolute",top: 0, gradient: "black", backgroundImage: "linear-gradient(to top, gray, black)" }}>
            <img style={{ width: "200px", height: "80px", opacity: "50" }}
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="netflix logo"
            />
        </div>


    )
}

export default Header;
>>>>>>> main
