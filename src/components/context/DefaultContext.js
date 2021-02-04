import React from "react";

const DefaultContext = React.createContext({
  updateStore: () => {},
  //url: 'http://localhost:8080'
  url: "https://desolate-hollows-53553.herokuapp.com",
});

export default DefaultContext;
