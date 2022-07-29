import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <Navbar />
      <div className="text-center mt-5">
        <h1>Hello Rigo!!</h1>
        <p>
          <img src="https://res.cloudinary.com/demo/video/upload/g_auto/eo_7/w_250,h_250,c_fill,r_max,e_loop/q_auto:eco/ac_none/w_200,f_auto,q_auto/v1603292662/user_video.gif" />
        </p>
        <div className="alert alert-info">
          "Loading message from the backend (make sure your python backend is
          running)..."
        </div>
        <p>
          This boilerplate comes with lots of documentation:{" "}
          <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
            Read documentation
          </a>
        </p>
      </div>
    </div>
  );
};
