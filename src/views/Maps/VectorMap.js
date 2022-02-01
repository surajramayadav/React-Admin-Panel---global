import MapChart from "./MapChart.js"
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

export default function VectorMap() 
{
    const [content, setContent] = useState("");
    return (
        <div>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    )
}
