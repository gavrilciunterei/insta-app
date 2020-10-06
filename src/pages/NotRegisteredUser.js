import React from "react";
import Context from "../Context";
import UserForm from "../components/UserForm/index";

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <UserForm title="Registrarse" onSublit={activateAuth} />
          <UserForm title="Iniciar Sesion" onSublit={activateAuth} />
        </>
      );
    }}
  </Context.Consumer>
);
