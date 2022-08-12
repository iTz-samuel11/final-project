import React, { Component } from "react";

export const Footer = () => (
  <footer
    className="footer mt-auto py-3 text-center"
    style={{ backgroundColor: "#211224" }}
  >
    <p className="text-light">
      Made with <i className="fa fa-heart text-danger" /> by{" "}
    </p>
    <div className="d-block">
      <div>
        <a href="https://github.com/iTz-samuel11">{"Samuel Faraco   "}</a>
      </div>
      <div>
        <a href="https://github.com/ValeriaZampetti">{"  Valeria Zampetti"}</a>
      </div>
    </div>
  </footer>
);
