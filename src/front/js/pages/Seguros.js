import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faTruckMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const SegurosBonpland = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="card" style={{ width: "18rem", borderRadius: "70px" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <FontAwesomeIcon
              icon={faHospital}
              style={{ height: "200px", color: "red" }}
            />
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", borderRadius: "70px" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <FontAwesomeIcon
              icon={faTruckMedical}
              style={{ height: "200px", color: "red" }}
            />
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", borderRadius: "70px" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <FontAwesomeIcon
              icon={faUserDoctor}
              style={{ height: "200px", color: "red" }}
            />
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
