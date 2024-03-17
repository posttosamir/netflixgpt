import React from "react";

const Header = () => {
  return (
    <div
      style={{
        zIndex: "10",
        position: "absolute",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        paddingRight: "8px",
        paddingLeft: "8px",
        paddingTop: "2px",
        paddingBottom: "2px",
      }}
    >
      <img
        width="150px"
        alt="background cover "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
    </div>
  );
};

export default Header;
