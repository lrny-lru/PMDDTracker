import React from "react";
import ReactDom from "react-dom";
import AddSymptomForm from "../AddSymptomForm";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <BrowserRouter>
      <AddSymptomForm />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
