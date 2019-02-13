import React, { Component } from "react";
import IWelcomeHeader from "./components/welcome-header/WelcomeHeader";
import IDashboard from "./components/dashboard/dashboard";

class App extends Component {
  render() {
    return (
      <>
        <IWelcomeHeader />
        <IDashboard />
      </>
    );
  }
}

export default App;
