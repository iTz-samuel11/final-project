import React from "react";

export const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="container m-4 p-2" id="aboutUs">
        <div className="m-4 p-3">
          <p className="fs-1 text-center">
            <strong>{"Nuestras Metas"}</strong>
          </p>
        </div>
        <div className="d-flex">
          <div className="d-block col m-3">
            <div className="m-2">
              <img
                style={{ width: "350px", height: "auto" }}
                className="rounded-circle ms-3"
                src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-minimalistic-cartoon-colorful-flag-ui-icon-png-image_4695540.jpg"
                alt="mision"
              />
            </div>
            <div className="m-3">
              <p className="fs-4 text-center">
                <strong>{"Misión"}</strong>
              </p>
            </div>
            <div className="m-2">
              <p className="fs-5 text-center">
                {
                  "Ofrecerles a nuestros clientes beneficios destacables con la mayor calidad y velocidad posible."
                }
              </p>
            </div>
          </div>
          <div className="d-block col m-3">
            <div className="m-2">
              <img
                className="rounded-circle ms-3"
                style={{ width: "350px", height: "auto" }}
                alt="vision"
                src="https://us.123rf.com/450wm/tuk69tuk/tuk69tuk1703/tuk69tuk170300139/74075108-estilo-minimalista-vector-de-finanzas-de-negocios-concepto-de-%C3%A9xito-de-la-visi%C3%B3n-con-el-icono-de-hom.jpg"
              />
            </div>
            <div className="m-3">
              <p className="fs-4 text-center">
                <strong>{"Visión"}</strong>
              </p>
            </div>
            <div className="m-2">
              <p className="fs-5 text-center">
                {
                  "Queremos ser una de las principales aseguradoras del pais, incentivando a nuevos clientes con nuestros llamativos planes."
                }
              </p>
            </div>
          </div>
          <div className="d-block col m-3">
            <div className="m-2">
              <img
                style={{ width: "350px", height: "auto" }}
                className="rounded-circle ms-3"
                src="https://img.freepik.com/vector-premium/objetivo-objetivo-objetivo-negocio-logro-objetivo-concepto-exito-icono-vector-3d-estilo-minimalista-dibujos-animados_365941-788.jpg"
                alt="objetivo"
              />
            </div>
            <div className="m-3">
              <p className="fs-4 text-center">
                <strong>{"Objetivo"}</strong>
              </p>
            </div>
            <div className="m-2">
              <p className="fs-5 text-center">
                {
                  "Queremos ofrecerles un producto innovador en el ámbito de salud, una interfaz rápida y sencilla de utilizar."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
