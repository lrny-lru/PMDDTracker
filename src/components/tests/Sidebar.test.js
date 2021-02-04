import React from "react";
import ReactDom from "react-dom";
import Sidebar from "../Sidebar";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
