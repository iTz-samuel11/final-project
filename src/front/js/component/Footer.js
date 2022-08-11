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
        <a href="#">{"Samuel Faraco   "}</a>
      </div>
      <div>
        <a href="#">{"  Valeria Zampetti"}</a>
      </div>
    </div>
  </footer>
);
