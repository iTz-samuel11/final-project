import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/NavHome";
import { useNavigate } from "react-router-dom";
import poliza from "../../../../docs/assets/Solicitudpoliza.png";
import emergencia from "../../../../docs/assets/Emergencia.png";
import Swal from "sweetalert2";
import { Footer } from "../component/Footer";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const myswal = () => {
    Swal.fire({
      title:
        "llama a una ambulancia o solicita atención domiciliaria a través de",
      text: "02123445678/0424255031\n En ambos números por favor indentifiquese como cliente de Seguros BonPland",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade justify-content-center"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner m-4" style={{ borderRadius: "40px" }}>
            <div className="carousel-item active">
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/169/496/original/woman-doing-yoga-illustration-with-sunrise-in-background-vector.jpg"
                className="d-block w-100"
                alt="loading..."
              />
              <div className="carousel-caption d-none d-md-block">
                <p className="fs-1 m-5">
                  {
                    "Tu cuerpo es templo de la naturaleza y del espíritu divino. Consérvalo sano."
                  }
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/04/persona-jardin-2291917.jpg?itok=j85LZiVv"
                className="d-block w-100"
                alt="loading..."
              />
              <div className="carousel-caption d-none d-md-block">
                <p className="fs-1 m-5">
                  {
                    "Nuestros cuerpos son nuestros jardines; nuestras decisiones, nuestros jardineros."
                  }
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn2.melodijolola.com/media/files/field/image/familia_feliz.jpg"
                className="d-block w-100"
                alt="loading..."
              />
              <div className="carousel-caption d-none d-md-block">
                <p className="fs-1 m-5">
                  {"Beneficios que hacen la diferencia en tu vida."}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://aishlatino.com/wp-content/uploads/2021/11/4-Ways-to-Encourage-Your-Kids-to-Love-One-Another910x512.jpg"
                className="d-block w-100"
                alt="loading..."
              />
              <div className="carousel-caption d-none d-md-block">
                <p className="fs-1 m-5">
                  {"Protegelos hasta cuando tu no puedas."}
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <div style={{ marginTop: "8%" }}>
            <div className="row py-3 m-4">
              <div className="col-4 d-flex justify-content-start g-0 ">
                <figure className="figure">
                  <img
                    className="rounded-circle "
                    src="https://cdn-bmcoa.nitrocdn.com/hPUoGmesUDIIRJmSERpbZfUlNOHGdBLj/assets/static/optimized/rev-b3a8ed4/wp-content/uploads/2021/02/Blog-2.jpeg"
                    alt=""
                    style={{ width: "250px", height: "250px" }}
                  />
                </figure>
              </div>
              <div className="col-8 g-0">
                <h2>{"Que es un seguro de Vida?"}</h2>
                <p className="lead">
                  {
                    "El seguro de salud te protege de gastos médicos altos e inesperados. Usted paga menos por los cuidados de salud cubiertos dentro de la red, incluso antes de que usted alcance su deducible. Usted recibe cuidados preventivos gratis, como vacunas, evaluaciones y chequeos, incluso antes de que usted alcance su deducible."
                  }
                </p>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-8 g-0" style={{ marginTop: "6%" }}>
                <h2>{"Porque elegirnos?"}</h2>
                <p className="lead">
                  {
                    "Somos una aseguradora que piensa en el futuro. Podras usar cualquiera de nuestros beneficios al instante!"
                  }
                </p>
              </div>
              <div
                className="col-4 d-flex justify-content-end g-0"
                styles="height:250px; width:250px;"
              >
                <img
                  className="rounded-circle"
                  src="https://www.kindpng.com/picc/m/9-99641_pensando-especialmente-en-las-personas-con-movilidad-persona.png"
                  style={{ height: "250px", width: "250px" }}
                  alt="calvo breaking bad"
                />
              </div>
            </div>
            <div className="row py-3 m-4">
              <div className="col-4 d-flex justify-content-start g-0 ">
                <figure className="figure">
                  <img
                    className="rounded-circle "
                    src="https://us.123rf.com/450wm/vigenm/vigenm1905/vigenm190500558/122131822-estetoscopio-calculadora-y-billetes-de-d%C3%B3lar-concepto-de-pago-por-servicio-m%C3%A9dico.jpg?ver=6"
                    alt=""
                    style={{ width: "250px", height: "250px" }}
                  />
                </figure>
              </div>
              <div className="col-8 g-0">
                <h2>{"Porque es importante un seguro?"}</h2>
                <p className="lead">
                  {
                    "Un seguro de salud es un acuerdo legal que haces con una compañía de seguros de salud. Ese acuerdo incluye un plan de salud que te ayuda a pagar ciertos servicios y cuidados médicos, para que no tengas que pagar todos los costos tú mismo."
                  }
                </p>
              </div>
            </div>
            <div style={{ marginTop: "5%" }}>
              <div className="m-3 p-2">
                <p className="fs-2">
                  <strong>{"Cuales son nuestros planes?"}</strong>
                </p>
              </div>
              <div
                className="card mb-3 m-5"
                style={{ backgroundColor: "#fff8f9" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://us.123rf.com/450wm/assistant/assistant1508/assistant150800003/43561763-drusos-cristales-verdes-%C3%A1gata-sio2-di%C3%B3xido-de-silicio-macro-fant%C3%A1stico-hermoso-fondo-para-el-%C3%A9xito-d.jpg"
                      className="img-fluid rounded-start"
                      style={{ width: "432px", height: "287px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title text-center">
                        {"Plan Granddidierite"}
                      </h2>
                      <p className="card-text fs-4">
                        {
                          "- Este es un plan que tiene una cobertura hasta de 2.500$. Es un plan pensado para 1 persona, Tendras acceso a muchos beneficios, como examenes de rutina gratis en nuestros centros afiliados"
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card mb-3 m-5"
                style={{ backgroundColor: "#fff8f9" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.pinimg.com/736x/9e/a1/39/9ea1396625dd1d8bfaa9a4b14904d3f9.jpg"
                      className="img-fluid rounded-start"
                      style={{ width: "432px", height: "287px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title text-center">
                        {"Plan Taaffeite"}
                      </h2>
                      <p className="card-text fs-4">
                        {
                          "- Este es un plan que tiene una cobertura hasta de 5.000$. Es un plan pensado para 2 persona, Tendras acceso a 1 consulta medica mensual totalmente gratis con cualquiera de nuestros doctores afiliados."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card mb-3 m-5"
                style={{ backgroundColor: "#fff8f9" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.pinimg.com/originals/5d/df/3b/5ddf3b8de11c03882203c18d22f36d01.jpg"
                      className="img-fluid rounded-start"
                      style={{ width: "432px", height: "287px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title text-center">
                        {"Plan Diamante Rojo"}
                      </h2>
                      <p className="card-text fs-4">
                        {
                          "- Este es un plan que tiene una cobertura hasta de 10.000$. Es un plan pensado para 4 persona, Tendras acceso a todos los beneficos anteriores."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
