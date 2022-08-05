import React, { useContext, useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const SolicitudPoliza = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const form = useRef();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    actions.poliza();
  }, [actions.poliza]);
  const poliza = store.poliza && store.poliza.poliza;
  const sendEmail = async (e) => {
    e.preventDefault();
    const success = await actions.verification({
      email: email,
      password: password,
    });
    if (!success) {
      alert("verifique los datos");
      return;
    } else {
      emailjs
        .sendForm(
          "service_by7xqfy",
          "template_4y4rxba",
          form.current,
          "5J8lZIQhkW1CEw8Up"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      navigate("/solicitud");
    }
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input name="poliza" type="hidden" value={poliza} />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>password</label>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input type="submit" value="Send" />
    </form>
  );
};
