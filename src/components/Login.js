import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignUP, setIsSignUp] = useState(false);
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg"
          alt="netflix background"
        />
      </div>

      <form
        style={{
          backgroundColor: "yellow",
          backgroundImage: "linear-gradient(yellow, red)",
          width: "500px",
          height: "500px",
          display: "flex",
          flexFlow: "row",
          position: "absolute",
          bottom: "30px",
        }}
      >
        <div className="text-2xl">
          <h1>{isSignUP ? "Sign Up" : "Sign In"}</h1>
          {isSignUP && (
            <input
              style={{ width: "180px", height: "40px", borderColor: "black" }}
              placeholder="Username"
              type="username"
            />
          )}
          <input
            style={{
              width: "180px",
              height: "40px",
              borderColor: "black",
              margin: "4px",
            }}
            placeholder="Email or phone number"
            type="text"
          />
          <input
            style={{ width: "180px", height: "40px", borderColor: "black" }}
            placeholder="Password"
            type="password"
          />
          <button
            style={{
              width: "180px",
              height: "40px",
              borderColor: "black",
              margin: "4px",
            }}
            onClick={() => {}}
          >
            {isSignUP ? "Sign Up" : "Sign In"}
          </button>
          <p>
            Not a Member?
            <span
              onClick={() => {
                setIsSignUp(!isSignUP);
              }}
            >
              {isSignUP ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
