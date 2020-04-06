import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Lambda from "./Lambda";
import Twitter from "./Twitter";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ textAlign: "center" }}>
          <Link to="/">Home</Link>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Lambda} />
        <Route path="/twitter/auth" component={Twitter} />
      </BrowserRouter>
    );
  }
}

export default App;
