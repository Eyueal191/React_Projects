import React from "react";
import { useRouteError } from "react-router-dom";

function VansDetailErrorElement() {
  let error = useRouteError();
  return <h1>{error?.message || "Something went wrong!"}</h1>;
}

export default VansDetailErrorElement;
