import React from "react";
import "./Button.css";
import Button1 from "../../components/Button/Button";
import ButtonLabel from "../../components/Button/ButtonLabel";
import { IoMdWarning } from "react-icons/io";
import {
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaExclamation,
  FaFacebookF,
  FaHeart,
  FaTwitter,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {FaTwitter} from "@fortawesome/free-solid-svg-icons"
import { ImCross } from "react-icons/im";
import ButtonSize from "../../components/Button/ButtonSize";
import ButtonStyle from "../../components/Button/ButtonStyle";

const buttonCust = [
  {
    type: "button",
    name: "DEFAULT",
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#999999",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "PRIMARY",
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#9c27b0",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "INFO",
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#00bcd4",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "SUCCESS",
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#4caf50",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "WARNING",
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#ff9800",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "DANGER",
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#f44336",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "ROSE",
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#e91e63",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
];
const buttonLabel = [
  {
    type: "button",
    name: "LEFT",
    lefticon: <FaChevronLeft />,
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#999999",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "RIGHT",
    righticon: <FaChevronRight />,
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#999999",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "INFO",
    lefticon: <FaExclamation />,
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#00bcd4",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "SUCCESS",
    lefticon: <FaCheck />,
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#4caf50",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "WARNING",
    lefticon: <IoMdWarning />,
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#ff9800",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "DANGER",
    lefticon: <ImCross />,
    class: "btn btn-secondary",
    style: {
      backgroundColor: "#f44336",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
];

const buttonSize = [
  {
    type: "button",
    name: "X-SMALL",
    class: "btn btn-secondary btn-xs",
    style: {
      backgroundColor: "#9c27b0",
      color: "#ffffff",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "SMALL",
    class: "btn btn-secondary btn-sm",
    style: {
      backgroundColor: "#9c27b0",
      color: "#ffffff",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "REGULAR",
    class: "btn btn-secondary ",
    style: {
      backgroundColor: "#9c27b0",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "LARGE",
    class: "btn btn-secondary btn-lg",
    style: {
      backgroundColor: "#9c27b0",
      color: "#ffffff",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
];

const buttonStyle = [
  {
    type: "button",
    name: "DEFAULT",
    class: "btn btn-secondary ",
    style: {
      backgroundColor: "#9c27b0",
      color: "#ffffff",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "ROUND",
    class: "btn btn-secondary btn-round",
    style: {
      backgroundColor: "#9c27b0",
      color: "#ffffff",
      padding: "8px 20px",
      borderRadius: "2rem",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "WITH ICON",
    icon: <FaHeart />,
    class: "btn btn-secondary btn-round ",
    style: {
      backgroundColor: "#9c27b0",
      color: "#ffffff",
      padding: "8px 20px",
      borderRadius: "2rem",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: <FaHeart />,
    class: "btn btn-secondary btn-fab btn-fab-mini",
    style: {
      backgroundColor: "#9c27b0",
      color: "#ffffff",
      borderRadius: "2rem",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
  {
    type: "button",
    name: "SIMPLE",
    class: "btn btn-secondary",
    style: {
      backgroundColor: "inherit",
      color: "#9c27b0",
      padding: "8px 20px",
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
];

export default function Button() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "white",
        margin: "2rem",
        borderRadius: "0.5rem",
      }}
    >
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={{ padding: " 15px 20px 0" }}
        >
          <div className="but-header">
            <h4 className="but-title"> Pick Your Color</h4>
          </div>
          <div className="but-content">
            {buttonCust.map((buttoncustomize, index) => {
              console.log(buttoncustomize);
              return (
                // <button
                //   type="button"
                //   class="btn btn-secondary"
                //   style={buttoncustomize.style}
                // >
                //   {buttoncustomize.name}
                // </button>
                <Button1 buttoncustomize={buttoncustomize} />
              );
            })}
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={{ padding: " 15px 20px 0" }}
        >
          <div className="but-header">
            <h4 className="but-title"> Buttons with Label</h4>
          </div>
          <div className="but-content">
            {buttonLabel.map((buttoncustomize1, index) => {
              console.log(buttoncustomize1);
              return <ButtonLabel buttoncustomize1={buttoncustomize1} />;
            })}
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={{ padding: " 15px 20px 0" }}
        >
          <div className="but-header">
            <h4 className="but-title"> Pick your Size</h4>
          </div>
          <div className="but-content">
            {buttonSize.map((buttoncustomize2, index) => {
              console.log(buttoncustomize2);
              return <ButtonSize buttoncustomize2={buttoncustomize2} />;
            })}
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={{ padding: " 15px 20px 0" }}
        >
          <div className="but-header">
            <h4 className="but-title"> Pick your Style</h4>
          </div>
          <div className="but-content">
            {buttonStyle.map((buttoncustomize3, index) => {
              console.log(buttoncustomize3);
              return <ButtonStyle buttoncustomize3={buttoncustomize3} />;
            })}
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={{ padding: " 15px 20px 0" }}
        >
          <div className="but-header">
            <h4 className="but-title"> Pagination</h4>
          </div>
          <div className="but-content">
            <ul class="pagination pagination-primary" id="paginationcustom">
              <li>
                <a href="javascript:void(0);">1</a>
              </li>
              <li>
                <a href="javascript:void(0);">...</a>
              </li>
              <li>
                <a href="javascript:void(0);">5</a>
              </li>
              <li>
                <a href="javascript:void(0);">6</a>
              </li>
              <li class="active">
                <a href="javascript:void(0);">7</a>
              </li>
              <li>
                <a href="javascript:void(0);">8</a>
              </li>
              <li>
                <a href="javascript:void(0);">9</a>
              </li>
              <li>
                <a href="javascript:void(0);">...</a>
              </li>
              <li>
                <a href="javascript:void(0);">12</a>
              </li>
            </ul>
            <ul class="pagination pagination-info">
              <li>
                <a href="javascript:void(0);"> prev</a>
              </li>
              <li>
                <a href="javascript:void(0);">1</a>
              </li>
              <li>
                <a href="javascript:void(0);">2</a>
              </li>
              <li class="active">
                <a href="javascript:void(0);">3</a>
              </li>
              <li>
                <a href="javascript:void(0);">4</a>
              </li>
              <li>
                <a href="javascript:void(0);">5</a>
              </li>
              <li>
                <a href="javascript:void(0);">next </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={{ padding: " 15px 20px 0" }}
        >
          <div className="but-header">
            <h4 className="but-title"> Button Group</h4>
          </div>
          <div className="but-content">
            <div class="btn-group btn-group-lg">
              <button type="button" class="btn btn-info">
                LEFT
              </button>
              <button type="button" class="btn btn-info">
                MIDDLE
              </button>
              <button type="button" class="btn btn-info">
                RIGHT
              </button>
            </div>
            <br />
            <br />
            <div class="btn-group">
              <button type="button" class="btn btn-round btn-info">
                1
              </button>
              <button type="button" class="btn btn-round btn-info">
                2
              </button>
              <button type="button" class="btn btn-round btn-info">
                3
              </button>
              <button type="button" class="btn btn-round btn-info">
                4
              </button>
            </div>
            <br />
            <br />
            <div class="btn-group">
              <button type="button" class="btn btn-round btn-info">
                5
              </button>
              <button type="button" class="btn btn-round btn-info">
                6
              </button>
              <button type="button" class="btn btn-round btn-info">
                7
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          style={{ padding: " 15px 20px 0" }}
        >
          <div className="but-header">
            <h4 className="but-title">Social buttons</h4>
          </div>
          <div className="but-content">
            <div className="row">
              <div class="col-md-4 col-sm-4">
                <button class="btn btn-social btn-fill btn-twitter">
                  <FaTwitter /> Connect with Twitter
                </button>
              </div>
              <div class="col-md-1 col-sm-1">
                <button class="btn btn-just-icon btn-twitter">
                  <FaTwitter />
                </button>
              </div>
              <div class="col-md-1 col-sm-1">
                <button class="btn btn-just-icon btn-round btn-twitter">
                  {/* <FaTwitter/> */}
                  <FaTwitter />
                </button>
              </div>
              <div class="col-md-1 col-sm-1">
                <button class="btn btn-just-icon btn-simple whitetwitter">
                  <FaTwitter />
                </button>
              </div>
              <div class="col-md-3 col-sm-4">
                <button class="btn btn-simple whitetwitter">
                  <FaTwitter /> Connect with Twitter
                </button>
              </div>
            </div>
            <div class="row" id="facebook-row">
              <div class="col-md-4 col-sm-4">
                <button class="btn btn-social btn-fill btn-facebook">
                  <FaFacebookF /> Share · 2.2k
                </button>
              </div>
              <div class="col-md-1 col-sm-1">
                <button class="btn btn-just-icon btn-facebook">
                  <FaFacebookF />
                </button>
              </div>
              <div class="col-md-1 col-sm-1">
                <button class="btn btn-just-icon btn-round btn-facebook">
                  <FaFacebookF />
                </button>
              </div>
              <div class="col-md-1 col-sm-1">
                <button class="btn btn-just-icon btn-simple white-facebook">
                  <FaFacebookF />
                </button>
              </div>
              <div class="col-md-3 col-sm-4">
                <button class="btn btn-simple white-facebook">
                  <FaFacebookF />
                  Share · 2.2k
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
