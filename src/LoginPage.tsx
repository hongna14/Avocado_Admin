// in src/MyLoginPage.js
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin, useNotify, Notification } from "react-admin";
import { authorProvider } from "./AuthorProvider/AuthorProvider";

export const MyLoginPage = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const notify = useNotify();
  const login = useLogin();

  const handleSubmit = (e: any) => {
    console.log("event", e.target.value);
    console.log("email", email);
    console.log("email", password);

    e.preventDefault();
    login({ email, password }, "/").catch(() => console.log("errorr"));
  };
  return (
    <div
      style={{
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#4f6f81",
        height: "300px",
        marginLeft: "300px",
        marginRight: 0,
      }}
    >
      <h1 style={{ color: "white", margin: 0 }}>👳ARE YOU ADMIN? </h1>
      <h3 style={{ margin: 0 }}>
        <span style={{ fontSize: "2rem", color: "#eb4660" }}>Yes ? </span>
        <span style={{ color: "#9dc08b" }}>Login</span> :
        <span style={{ color: "#ffb84d" }}> Go Away! 👊</span>
      </h3>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{ padding: "6px", display: "block" }}
        >
          <div style={{ display: "block" }}>
            <label style={{ marginRight: "40px" }}>Email</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label style={{ marginRight: "9px" }}>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};
