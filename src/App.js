import React, { Component } from "react";
import Header from "./components/Header";
import HomeRoute from "./components/routes/HomeRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddSymptomRoute from "./components/routes/AddSymptomRoute";
import DefaultContext from "./components/context/DefaultContext";
import EditSymptomForm from "./components/EditSymptomForm";
import LandingPage from "./components/LandingPage";
import ExpandedSymptom from "./components/ExpandedSymptom";

class App extends Component {
  static contextType = DefaultContext;

  state = {
    store: {
      symptoms: [],
    },
    url: this.context.url,
  };

  sortList = (sort) => {
    if (!sort) {
      return;
    }
    if (sort === "date") {
      let sorted = [...this.state.store.symptoms];
      sorted.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      this.setState({
        store: {
          symptoms: sorted,
        },
      });
    }
    if (sort === "severity") {
      let sorted = [...this.state.store.symptoms];
      sorted.sort((a, b) => {
        return b.severity - a.severity;
      });
      this.setState({
        store: {
          symptoms: sorted,
        },
      });
    }
  };

  updateStore = () => {
    this.getSymptoms();
  };

  getSymptoms = () => {
    fetch(`${this.state.url}/symptoms`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          store: {
            symptoms: res,
          },
        });
      });
    // .catch((err) => {
    //   throw new Error(`Error getting symptoms: ${err.message}`);
    // });
  };

  componentDidMount = () => {
    this.updateStore();
  };

  render() {
    const contextVal = {
      ...this.state,
      updateStore: this.updateStore,
    };
    return (
      <DefaultContext.Provider value={contextVal}>
        <div className="App">
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/home"
            render={() => (
              <HomeRoute store={this.state.store} sortList={this.sortList} />
            )}
          />
          <Route path="/home/addsymptom" component={AddSymptomRoute} />
          <Route path="/home/edit/:id" component={EditSymptomForm} />
          <Route path="/home/details/:id" component={ExpandedSymptom} />
        </div>
      </DefaultContext.Provider>
    );
  }
}

export default App;
