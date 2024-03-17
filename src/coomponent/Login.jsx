import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div style={{ position: "absolute" }}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/582aecb2-9125-46db-a907-3762d36d1f11/NL-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="screen"
        />
      </div>
      <div
        style={{
          color: "white",
          position: "absolute",
          // border: "1px solid red",
          borderRadius: "10px",
          // height: "350px",
          right: "0",
          left: "0",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "black",
          opacity: "0.75",
          padding: "10px",
          width: "25%",
          marginTop: "150px",
          justifyContent: "center",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 style={{ margin: "10px" }}>Sign{isSignIn ? " In" : " Up"}</h1>

          {!isSignIn && (
            <input
              style={{
                margin: "10px",
                padding: "15px",
                borderRadius: "4px",
                border: "1px solid white",
                backgroundColor: "black",
                opacity: "0.75",
                color: "white",
                fontSize: "20px",
              }}
              placeholder="Enter Full Name  "
              type="text"
            />
          )}

          <input
            style={{
              margin: "10px",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid white",
              backgroundColor: "black",
              opacity: "0.75",
              color: "white",
              fontSize: "20px",
            }}
            placeholder="Enter Email Address.."
            type="text"
          />
          <input
            style={{
              margin: "10px",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid white",
              backgroundColor: "black",
              opacity: "0.75",
              color: "white",
              fontSize: "20px",
            }}
            placeholder="Enter passward.."
            type="text"
          />
          <button
            style={{
              margin: "10px",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid red",
              backgroundColor: "red",
              // opacity: "0.75",
              color: "white",
              fontSize: "20px",
            }}
          >
            {isSignIn ? <p>Sign In</p> : <p>Sign Up</p>}
          </button>

          <div
            style={{ cursor: "pointer", padding: "15px" }}
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? (
              <p>Not registerd? Sign Up</p>
            ) : (
              <p>Already registered Sign IN</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
