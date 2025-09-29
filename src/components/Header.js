import React from "react";
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
