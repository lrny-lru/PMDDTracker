import React from "react";
import ReactDom from "react-dom";
import ExpandedSymptom from "../ExpandedSymptom";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const match = { params: { id: 1 } };
  ReactDom.render(
    <BrowserRouter>
      <ExpandedSymptom match={match} />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
