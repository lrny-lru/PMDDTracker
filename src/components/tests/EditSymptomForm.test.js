import React from "react";
import ReactDom from "react-dom";
import EditSymptomForm from "../EditSymptomForm";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const match = { params: { id: 1 } };
  ReactDom.render(
    <BrowserRouter>
      <EditSymptomForm match={match} />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
