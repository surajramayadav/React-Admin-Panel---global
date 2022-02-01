import React from "react";
import { IconContext } from "react-icons";
import { GiProgression } from "react-icons/gi";
import { MdUpdate } from "react-icons/md";
import AuthForm from "../../../components/Form/AuthForm/AuthForm";
import FormikContainer from "../../../components/Form/FormikContainer";
import "../Regularforms/Regularforms.css";

export default function Regularforms() {
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
    title: "Stacked Form",
    icon: <GiProgression />,
    buttonText: "Login",
    classForField: "col-md-12",
  };

  const horState = {
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
    title: "Horizontal Form",
    icon: <GiProgression />,
    buttonText: "Login",
    classForField: "col-md-12",
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
      {
        name: "selectOption",
        control: "select",
        label: "Select a topic",
        options: [
          { key: "Select an option", value: "" },
          { key: "Option 1", value: "option1" },
          { key: "Option 2", value: "option2" },
          { key: "Option 3", value: "option3" },
        ],
      },
      {
        name: "radioOption",
        type: "radio",
        control: "radio",
        label: "Radio Topic",
        options: [
          { key: "Option 1", value: "option1" },
          { key: "Option 2", value: "option2" },
          { key: "Option 3", value: "option3" },
        ],
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
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="Regular-form">
              <div className="row">
                <div className="col-md-12">
                  <div style={{ display: "flex" }}>
                    <div style={{ marginTop: -40 }}>
                      <IconContext.Provider
                        value={{ className: "extended-card-icon" }}
                      >
                        <div
                          style={{
                            padding: "1.5rem 2rem",
                            backgroundColor: "#de2668",
                            borderRadius: 3,
                          }}
                        >
                          <MdUpdate />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div>
                      <h4
                        style={{
                          marginTop: -10,
                          paddingLeft: 20,
                          fontWeight: "normal",
                        }}
                      >
                        Regular Form
                      </h4>
                    </div>
                  </div>
                </div>
                <FormikContainer
                  inputData={RegisterState}
                  onSubmit={onSubmit}
                />
                <div className="col-md-12">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#e91e63",
                      color: "white",
                      padding: "5px 50px",
                      marginTop: 20,
                    }}
                    type="submit"
                  >
                    <b>Submit</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <AuthForm TotalFields={loginState} authFormWidth="col-md-12" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <AuthForm TotalFields={horState} authFormWidth="col-md-12" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
