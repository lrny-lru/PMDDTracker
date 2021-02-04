import React from "react";
import ReactDom from "react-dom";
import SymptomList from "../SymptomList";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <BrowserRouter>
      <SymptomList />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
