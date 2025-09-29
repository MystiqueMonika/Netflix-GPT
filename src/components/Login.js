import React, { useState, useRef, use } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignUP, setIsSignUp] = useState(false);
  const username = useRef("");
  const email = useRef("");
  const password = useRef("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    const message = validateData(email, password);
    setErrorMessage(message);

    if (message === null) {
      if (isSignUP) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: username.current.value,
              photoURL: "",
            })
              .then(() => {
                console.log(auth.currentUser);
                const { uid, displayName, email } = auth.currentUser;
              dispatch(addUser({uid:uid,username:displayName,email:email}));
              })
              .catch((error) => {
                console.log(error);
              });
              
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const { uid, displayName, email } = auth.currentUser;
              dispatch(addUser({uid:uid,username:displayName,email:email}));
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg"
          alt="netflix background"
        />
      </div>

      <div className="w-[500px] p-8 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-netflixRed to-netflixDark bg-opacity-90">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-2xl">{isSignUP ? "Sign Up" : "Sign In"}</h1>
          {isSignUP && (
            <input
              ref={username}
              className="w-90 h-20 bg-black"
              placeholder="Username"
              type="username"
            />
          )}
          <input
            ref={email}
            className="w-90 h-20 bg-black m-4"
            placeholder="Email or phone number"
            type="text"
          />
          <input
            ref={password}
            className="w-90 h-20 bg-black m-4"
            placeholder="Password"
            type="password"
          />
          <h2>{errorMessage?.length > 0 && errorMessage}</h2>
          <button
            className="w-90 h-20 bg-black m-4"
            onClick={() => {
              handleSubmit(email.current.value, password.current.value);
            }}
          >
            {isSignUP ? "Sign Up" : "Sign In"}
          </button>
          <p>
            {!isSignUP ? "Not a Member?" : "Already a Member?"}
            <span
              onClick={() => {
                setIsSignUp(!isSignUP);
              }}
            >
              {!isSignUP ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
