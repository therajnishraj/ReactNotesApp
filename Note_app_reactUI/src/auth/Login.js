import React, { useState } from "react";
import LogoImage from "../assets/img/logo.png";
import BgImage from "../assets/img/img.png";
import { useNavigate } from "react-router-dom";
import { doLogin } from "./Auth";
import {  toast } from "react-toastify";

import axiosInstance from "./Intercept";
import ConfigUrl from "../config/ConfigUrl";

export const Login = () => {
  const [hidePassword, setHidePassword] = useState(true); // State to toggle password visibility
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    let data = {
      username: username,
      password: password,
      apptype: "qc_portal",
      prjId: 0,
    };

    axiosInstance
      .post(ConfigUrl.LOG_IN, data)
      .then((response) => {
        if (response.data.success === true) {
          doLogin(response.data.token);
          sessionStorage.setItem("token", response.data.token);
          toast.success("Login successful!");
          if (sessionStorage.getItem("token")) {
            navigate("/private/");
          }
        }
      })
      .catch((error) => {
        if (error.response){}
          toast.error("Something went wrong!");
      });
  };
  return (
    <>
      <div
        className="row"
        style={{ backgroundColor: "white", height: "100%", margin: "0px" }}
      >
        <div
          className="col-md-5"
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              top: "20%",
              backgroundColor: "white",
              padding: "50px",
              position: "absolute",
            }}
          >
            <div className="row" style={{ justifyContent: "center" }}>
              <img
                src={LogoImage}
                alt="Logo"
                style={{ height: "65px", width: "88px" }}
              />
              <div style={{ textAlign: "center" }}>Notebook</div>
            </div>

            <div style={{ top: "70px" }}>
              <label htmlFor="username">Username</label>
              <input
                onChange={(event) => setUsername(event.target.value)}
                style={{ borderRadius: "0rem", lineHeight: "1.5" }}
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />

              <label htmlFor="password">Password</label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                style={{ borderRadius: "0rem", lineHeight: "1.5" }}
                type={hidePassword ? "password" : "text"}
                className="form-control"
                id="password"
                placeholder="Password"
              />

              <div style={{ marginTop: "10px" }}>
                <input
                  type="checkbox"
                  onChange={() => setHidePassword(!hidePassword)}
                  checked={!hidePassword}
                />{" "}
                Show Password
              </div>
            </div>

            <div
              className="row"
              style={{ justifyContent: "flex-end", marginTop: "10px" }}
            >
              <a
                href="/forgetPassword"
                style={{ textAlign: "right", color: "red" }}
              >
                Forgot Password?
              </a>
            </div>

            <div className="row" style={{ padding: "15px" }}>
              <button type="button" className="btn btn-primary" onClick={login}>
                Login
              </button>
            </div>

            <div className="row" style={{ justifyContent: "center" }}>
              <a href="/createAccount" style={{ textAlign: "right" }}>
                New Here? Create An Account?
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-7" style={{ height: "100%", padding: "0px" }}>
          <img
            src={BgImage}
            alt="Background"
            style={{
              maxWidth: "100%",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};
