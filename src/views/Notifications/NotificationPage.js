import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import "./NotificationPge.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

function NotificationPage() {
  
    const notifyTopLeft = () => {
        toast("Basic Notification !", { position: toast.POSITION.TOP_LEFT});
      };
      const notifyTopRight = () => {
        toast("Basic Notification !", { position: toast.POSITION.TOP_RIGHT});
      };
      const notifyTopCenter = () => {
        toast("Basic Notification !", { position: toast.POSITION.TOP_CENTER});
      };
      const notifyBottomLeft = () => {
        toast("Basic Notification !", { position: toast.POSITION.BOTTOM_LEFT});
      };
      const notifyBottomRight = () => {
        toast("Basic Notification !", { position: toast.POSITION.BOTTOM_RIGHT});
      };
      const notifyBottomCenter = () => {
        toast("Basic Notification !", { position: toast.POSITION.BOTTOM_CENTER});
      };


  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "inherit",
        margin: "2rem",
        borderRadius: "0.5rem",
      }}
    >
      <div
        className="row"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div
          className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
          style={{
            padding: " 15px 20px 0",
            backgroundColor: "white",
            margin: "0 1rem",
            borderRadius: "2rem",
          }}
        >
          <div className="noti-card">
            <div className="noti-header">
              <h4>Notifications Style</h4>
            </div>
            <div className="noti-content">
              <div className="noti-alert">
                <span>This is a Plain Notification</span>
              </div>
            </div>
            <div className="noti-content">
              <div className="noti-alert">
                <span>This is a notification with close button.</span>
                <button style={{ backgroundColor: "inherit", border: "none" }}>
                  <AiOutlineClose size={20} />
                </button>
              </div>
            </div>
            <div className="noti-content">
              <div className="noti-alert">
                <div>
                  <div
                    style={{
                      marginTop: "-40px",
                      backgroundColor: "white",
                      borderRadius: "1.5rem",
                      padding: "0.5rem",
                    }}
                  >
                    <FaBell size={20} color={"#00bcd4"} />
                  </div>
                </div>
                <span>
                  This is a notification with close button and icon and have
                  many lines. You can see that the icon and the close button are
                  always vertically aligned. This is a beautiful notification.
                  So you don't have to worry about the style.
                </span>
                <button style={{ backgroundColor: "inherit", border: "none" }}>
                  <AiOutlineClose size={20} />
                </button>
              </div>
            </div>
            <div className="noti-content">
              <div
                className="noti-alert"
                style={{ backgroundColor: "#eb3573" }}
              >
                <div>
                  <div
                    style={{
                      marginTop: "-40px",
                      backgroundColor: "white",
                      borderRadius: "1.5rem",
                      padding: "0.5rem",
                    }}
                  >
                    <FaBell size={20} color={"#eb3573"} />
                  </div>
                </div>
                <span>
                  This is a notification with close button and icon and have
                  many lines. You can see that the icon and the close button are
                  always vertically aligned. This is a beautiful notification.
                  So you don't have to worry about the style.
                </span>
                <button style={{ backgroundColor: "inherit", border: "none" }}>
                  <AiOutlineClose size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
          style={{
            padding: " 15px 20px 0",
            backgroundColor: "white",
            margin: "0 1rem",
            borderRadius: "2rem",
          }}
        >
          <div className="noti-card">
            <div className="noti-header">
              <h4>Notifications States</h4>
            </div>
            <div className="noti-content">
              <div className="noti-alert info">
                <span>
                  <b>INFO</b> - This is a regular notification made with
                  ".noti-alert-info"
                </span>
                <button style={{ backgroundColor: "inherit", border: "none" }}>
                  <AiOutlineClose size={20} />
                </button>
              </div>
            </div>
            <div className="noti-content">
              <div className="noti-alert success">
                <span>
                  <b>SUCCESS</b> - This is a regular notification made with
                  ".alert-success"
                </span>
                <button style={{ backgroundColor: "inherit", border: "none" }}>
                  <AiOutlineClose size={20} />
                </button>
              </div>
            </div>
            <div className="noti-content">
              <div className="noti-alert warning">
                <span>
                  <b>WARNING </b>- This is a regular notification made with
                  ".alert-warning"
                </span>
                <button style={{ backgroundColor: "inherit", border: "none" }}>
                  <AiOutlineClose size={20} />
                </button>
              </div>
            </div>
            <div className="noti-content">
              <div className="noti-alert danger">
                <span>
                  <b>DANGER </b>- This is a regular notification made with
                  ".alert-danger"
                </span>
                <button style={{ backgroundColor: "inherit", border: "none" }}>
                  <AiOutlineClose size={20} />
                </button>
              </div>
            </div>
            <div className="noti-content">
              <div className="noti-alert primary">
                <span>
                  <b>PRIMARY </b>- This is a regular notification made with
                  ".alert-primary"
                </span>
                <button style={{ backgroundColor: "inherit", border: "none" }}>
                  <AiOutlineClose size={20} />
                </button>
              </div>
            </div>
            <div className="noti-content">
              <div className="noti-alert rose">
                <span>
                  <b>ROSE </b>- This is a regular notification made with
                  ".alert-rose"
                </span>
                <button style={{ backgroundColor: "inherit", border: "none" }}>
                  <AiOutlineClose size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-12 col-md-12 col-xs-12 col-sm-12"
          style={{
            // padding: "15px 20px 0",
            // backgroundColor: "white",
            margin: "25px 0",
            borderRadius: "2rem",
          }}
        >
          <div className="noti-but-card">
            <div className="noti-but-content">
              <div className="places-button">
                <div class="row">
                  <div class="col-md-6 col-md-offset-3 text-center">
                    <h4 class="card-title">
                      Notifications Places
                      <p class="category">Click to view notifications</p>
                    </h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="col-md-4">
                      <button
                        class="btn btn-block"
                        style={{ backgroundColor: "#9c27b0", color: "white" }}
                        onClick={notifyTopLeft}
                      >
                        TOP LEFT
                      </button>
                    </div>
                    <div class="col-md-4">
                      <button
                        class="btn btn-block"
                        style={{ backgroundColor: "#9c27b0", color: "white" }}
                        onClick={notifyTopCenter}
                      >
                        TOP CENTER
                      </button>
                    </div>
                    <div class="col-md-4">
                      <button
                        class="btn btn-block"
                        style={{ backgroundColor: "#9c27b0", color: "white" }}
                        onClick={notifyTopRight}
                      >
                        TOP RIGHT
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row" style={{ padding: "2rem 0" }}>
                  <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="col-md-4">
                      <button
                        class="btn btn-block"
                        style={{ backgroundColor: "#9c27b0", color: "white" }}
                        onClick={notifyBottomLeft}
                      >
                        BOTTOM LEFT<div class="ripple-container"></div>
                      </button>
                    </div>
                    <div class="col-md-4">
                      <button
                        class="btn btn-block"
                        style={{ backgroundColor: "#9c27b0", color: "white" }}
                        onClick={notifyBottomCenter}
                      >
                        BOTTOM CENTER<div class="ripple-container"></div>
                      </button>
                    </div>
                    <div class="col-md-4">
                      <button
                        class="btn btn-block"
                        style={{ backgroundColor: "#9c27b0", color: "white" }}
                        onClick={notifyBottomRight}
                      >
                        BOTTOM RIGHT<div class="ripple-container"></div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-md-offset-3 text-center">
                    <h4 class="card-title">
                      Modal
                      
                    </h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="col-md-4">
                      <button
                        class="btn btn-block"
                        style={{ backgroundColor: "#9c27b0", color: "white",borderRadius:"2rem" }}
                        // onClick={notifyTopLeft}
                      >
                        CLASSIC MODAL
                      </button>
                    </div>
                    <div class="col-md-4">
                      <button
                        class="btn btn-block"
                        style={{ backgroundColor: "#9c27b0", color: "white",borderRadius:"2rem" }}
                        // onClick={notifyTopCenter}
                      >
                        NOTICE MODAL
                      </button>
                    </div>
                    <div class="col-md-4">
                      <button
                        class="btn btn-block"
                        style={{ backgroundColor: "#9c27b0", color: "white",borderRadius:"2rem" }}
                        // onClick={notifyTopRight}
                      >
                        SMALL ALERT MODAL
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;
