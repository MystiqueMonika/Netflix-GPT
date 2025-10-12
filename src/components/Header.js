import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "./../utils/userSlice";
import { auth } from "./../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, supportedLangs, USER_LOGO } from "../utils/constants";
import { gptSearchToggle } from "../utils/searchGptSlice";
import { languageSupported } from "../utils/languageSupported";
import { changeLang } from "../utils/langSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptToggleBtn = useSelector(store => store.gpt.gptSearchToggle);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, username, email } = user.uid;
        dispatch(addUser({ uid: uid, username: username, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log("Error in signing out");
      });
  };

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
        height: "80px",
      }}
    >
      <img
        alt="netflix logo"
        style={{ width: "200px", height: "80px", opacity: "50" }}
        src={NETFLIX_LOGO}
      />
      {user && (
        <div
          style={{
            display: "flex",
            color: "white",
          }}
        >
          {gptToggleBtn && <select onChange={(e)=>{dispatch(changeLang(e.target.value))}}>
            {supportedLangs.map((item)=>{
              return <option value={item.identifier} key = {item.identifier} >
                {item.name}
              </option>
            })}
          </select>}
          <button
            onClick={() => {
              dispatch(gptSearchToggle());
            }}
          >
            {gptToggleBtn?  "Home Page":"GPT Search"}
          </button>
          <img src={USER_LOGO} alt="user logo" />

          <button
            style={{
              width: "100px",
              height: "20px",
              border: "none",
              background: "none",
              textDecoration: "underline",
              color: "red",
            }}
            onClick={() => {
              handleSignOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
