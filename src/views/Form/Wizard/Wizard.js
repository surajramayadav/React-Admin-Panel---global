import React, { useState } from "react";
import { IconContext } from "react-icons";
import AuthForm from "../../../components/Form/AuthForm/AuthForm";
import FormikContainer from "../../../components/Form/FormikContainer";
import "../Wizard/Wizard.css";
import { FaUserTie } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";

export default function Wizard() {
  const [toggle, setToggle] = useState(1);

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
      {
        name: "email",
        type: "text",
        control: "input",
        label: "Email",
      },
    ],
  };
  const addressState = {
    formData: [
      {
        name: "name",
        type: "text",
        control: "input",
        label: "Street Name",
      },
      {
        name: "description",
        type: "text",
        control: "input",
        label: "Street No.",
      },
      {
        name: "email",
        type: "text",
        control: "input",
        label: "City",
      },
      {
        name: "email",
        type: "text",
        control: "input",
        label: "Country",
      },
    ],
    classForField: "col-md-6",
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="wizard-profile">
              <div>
                <h2>Build Your Profile</h2>
                <h4>This information will let us know more about you.</h4>
              </div>
              <div className="navigationBar">
                <div
                  className={toggle == 1 && "navigationBarActive"}
                  onClick={() => setToggle(1)}
                >
                  <h5>ABOUT</h5>
                </div>
                <div
                  className={toggle == 2 && "navigationBarActive"}
                  onClick={() => setToggle(2)}
                >
                  <h5>ACCOUNT</h5>
                </div>
                <div
                  className={toggle == 3 && "navigationBarActive"}
                  onClick={() => setToggle(3)}
                >
                  <h5>ADDRESS</h5>
                </div>
              </div>

              {/* Wizard Profile */}

              {toggle == 1 && (
                <div className="row wizard-form">
                  <div className="col-md-12">
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                      <h4>
                        Let's start with the basic information (with validation)
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      style={{
                        width: "25rem",
                        margin: "0 auto",
                      }}
                    >
                      <IconContext.Provider
                        value={{ className: "wizard-card-icon" }}
                      >
                        <div
                          style={{
                            padding: 5,
                            borderRadius: 3,
                          }}
                        >
                          <FaUserTie />
                        </div>
                      </IconContext.Provider>
                      <h5>CHOOSE PICTURE</h5>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <FormikContainer
                      inputData={loginState}
                      onSubmit={onSubmit}
                    />
                  </div>
                  <div className="col-md-12">
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#e91e63",
                          color: "white",
                          padding: "5px 30px",
                          marginTop: 20,
                        }}
                        type="submit"
                      >
                        <b>NEXT</b>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* Account components */}
              {toggle == 2 && (
                <div className="wizard-account">
                  <div className="row">
                    <div className="col-md-12">
                      <div>
                        <h4>What are you doing? (checkboxes)</h4>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div
                          className="col-md-4"
                          style={{ textAlign: "center" }}
                        >
                          <IconContext.Provider
                            value={{ className: "wizard-account-icon" }}
                          >
                            <div
                              style={{
                                padding: 5,
                                borderRadius: 3,
                              }}
                            >
                              <BsCircle />
                            </div>
                          </IconContext.Provider>
                          <h3>DESIGN</h3>
                        </div>
                        <div
                          className="col-md-4"
                          style={{ textAlign: "center" }}
                        >
                          <IconContext.Provider
                            value={{ className: "wizard-account-icon" }}
                          >
                            <div
                              style={{
                                padding: 5,
                                borderRadius: 3,
                              }}
                            >
                              <BsCircle />
                            </div>
                          </IconContext.Provider>
                          <h3>CODE</h3>
                        </div>
                        <div
                          className="col-md-4"
                          style={{ textAlign: "center" }}
                        >
                          <IconContext.Provider
                            value={{ className: "wizard-account-icon" }}
                          >
                            <div
                              style={{
                                padding: 5,
                                borderRadius: 3,
                              }}
                            >
                              <BsCircle />
                            </div>
                          </IconContext.Provider>
                          <h3>DEVELOP</h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          margin: "40px 10px 10px 10px",
                        }}
                      >
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#999999",
                            color: "white",
                            padding: "5px 30px",
                            marginTop: 20,
                          }}
                          type="submit"
                        >
                          <b>PREVIOUS </b>
                        </button>
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#e91e63",
                            color: "white",
                            padding: "5px 30px",
                            marginTop: 20,
                          }}
                          type="submit"
                        >
                          <b>NEXT</b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {toggle == 3 && (
                <div className="wizard-account">
                  <div className="row">
                    <div className="col-md-12">
                      <div>
                        <h4>What are you doing? (checkboxes)</h4>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div style={{ padding: "0rem 7rem" }}>
                        <FormikContainer
                          inputData={addressState}
                          onSubmit={onSubmit}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          margin: "40px 10px 10px 10px",
                        }}
                      >
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#999999",
                            color: "white",
                            padding: "5px 30px",
                            marginTop: 20,
                          }}
                          type="submit"
                        >
                          <b>PREVIOUS </b>
                        </button>
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#e91e63",
                            color: "white",
                            padding: "5px 30px",
                            marginTop: 20,
                          }}
                          type="submit"
                        >
                          <b>NEXT</b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
