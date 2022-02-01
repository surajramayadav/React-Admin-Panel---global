import React from "react";
import { MdUpdate } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import "../ExtendedForms/ExtendedForms.css";
import ExtendedCard from "../../../components/cards/ExtendedCard/ExtendedCard";
import FormikContainer from "../../../components/Form/FormikContainer";
export default function ExtendedForms() {
  const pickerTypes = [
    {
      id: 1,
      title: "Datetime Picker",
      subTitle: "Datetime Picker",
      icon: <MdUpdate />,
      inputType: (
        <input type="datetime-local" className="form-control  padding-form" />
      ),
    },
    {
      id: 2,
      title: "Date Picker",
      subTitle: "Date Picker",
      icon: <MdUpdate />,
      inputType: <input type="date" className="form-control  padding-form" />,
    },
    {
      id: 3,
      title: "Time Picker",
      subTitle: "Time Picker",
      icon: <MdUpdate />,
      inputType: <input type="time" className="form-control padding-form" />,
    },
  ];

  const RegisterState = {
    formData: [
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
    ],
    title: "Register Form",
    buttonText: "Register",
    classForField: [{ inputBox: "col-md-3", inputSelect: "inputSelect" }],
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <ExtendedCard pickerTypes={pickerTypes} />
        </div>

        <div className="row card-box">
          <FormikContainer inputData={RegisterState} onSubmit={onSubmit} />
          <FormikContainer inputData={RegisterState} onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
}
