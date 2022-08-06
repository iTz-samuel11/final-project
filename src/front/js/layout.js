import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/Home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SignUp } from "./pages/SignUp";
import { LogIn } from "./pages/LogIn";
import { SegurosBonpland } from "./pages/Seguros";
import { SolicitudAval } from "./pages/SolicitudAval";
import { Solicitud } from "./pages/Solicitud";
import { SolicitudPoliza } from "./pages/SolicitudPoliza";
import { Pagos } from "./pages/Pagos";
import { Clave } from "./pages/Clave";
import { Prueba2 } from "./pages/Prueba2";
import { Perfil } from "./pages/Perfil";
import { Maps } from "./component/Maps";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {/* <Title /> */}
          {/* <Navbar /> */}
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<SignUp />} path="/sign-up" />
            <Route element={<LogIn />} path="/log-in" />
            <Route element={<SegurosBonpland />} path="/segurosBonpland" />
            <Route element={<SolicitudAval />} path="//solicitud-aval" />
            <Route element={<SolicitudPoliza />} path="/solicitud-poliza" />
            <Route element={<Solicitud />} path="/solicitud" />
            <Route element={<Pagos />} path="/pagopoliza" />
            <Route element={<Clave />} path="/clave-acceso" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<Maps />} path="/prueba" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
