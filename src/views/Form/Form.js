import React from "react";
import { IconContext } from "react-icons";
import { GiProgression } from "react-icons/gi";
import AuthForm from "../../components/Form/AuthForm/AuthForm";
import FormikContainer from "../../components/Form/FormikContainer";
import "../Form/Form.css";

export default function Form() {
  const loginState = {
    formData: [
      {
        name: "name",
        type: "text",
        control: "input",
        label: "Name",
      },
      {
        name: "description",
        type: "text",
        control: "input",
        label: "Password",
      },
    ],
    title: "Login Form",
    icon: <GiProgression />,
    buttonText: "Login",
    classForField: "col-md-6",
  };

  const RegisterState = {
    formData: [
      {
        name: "name",
        type: "text",
        control: "input",
        label: "Name",
      },
      {
        name: "description",
        type: "text",
        control: "input",
        label: "Password",
      },
      {
        name: "description",
        type: "text",
        control: "input",
        label: "Current Password",
      },
    ],
    title: "Register Form",
    icon: <GiProgression />,
    buttonText: "Register",
    classForField: "col-md-12",
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#eeeeee", minHeight: "100vh" }}
    >
      <div className="row">
        <AuthForm TotalFields={loginState} />
        <AuthForm TotalFields={RegisterState} />
      </div>
    </div>
  );
}
