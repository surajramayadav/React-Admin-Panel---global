import React from "react";
import SweetAlert from "../../components/SweetAlert/SweetAlert";
import SweetBox from "../../components/SweetAlert/SweetBox";

export default function SweetAlerts() {
  const iconCardData = [
    {
      id: 1,
      title: "Basic example ",
      buttonText: "TRY ME!",
    },
    {
      id: 2,
      title: "A title with a text under",
      buttonText: "TRY ME!",
    },
    {
      id: 3,
      title: "A success message",
      buttonText: "TRY ME!",
    },
    {
      id: 4,
      title: "Custom HTML description",
      buttonText: "TRY ME!",
    },
    {
      id: 5,
      title:
        'A warning message, with a function attached to the "Confirm" Button...',
      buttonText: "TRY ME!",
    },
    {
      id: 6,
      title:
        '...and by passing a parameter, you can execute something  for "Cancel"',
      buttonText: "TRY ME!",
    },
    {
      id: 7,
      title: "A message with auto close timer set to 2 seconds",
      buttonText: "TRY ME!",
    },
    {
      id: 8,
      title: "Modal window with input field",
      buttonText: "TRY ME!",
    },
  ];

  return (
    <div className="container-fluid ">
      <div className="row">
        <SweetBox alertTrigger={iconCardData} />
      </div>
    </div>
  );
}
