import React from "react";
import jwt_decode from "jwt-decode";
import "./style.scss";
import { useDispatch } from "react-redux";
import { getInfo } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function GoogleAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    //global google
    // eslint-disable-next-line
    google.accounts.id.initialize({
      client_id:
        "753950702880-9s1vt8dmm4r046idf0vrp4drla6gq7ht.apps.googleusercontent.com",
      callback: handleCallbackResp,
    });
    // eslint-disable-next-line
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCallbackResp = (resp) => {
    let userInfo = jwt_decode(resp.credential);
    console.log(userInfo);
    dispatch(getInfo(userInfo));
    localStorage.setItem("USER_DATA", JSON.stringify(userInfo));
    navigate("/");
  };
  return (
    <>
      <div className="main">
        <div className="textDiv">
          <span className="logo">Phone</span>
          <span className="text">Shop</span>
        </div>
        <div id="signInDiv" />
      </div>
    </>
  );
}
