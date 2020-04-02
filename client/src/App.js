
import React from "react";
import axios from 'axios'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home'
import Lambda from './Lambda'

class App extends React.Component {

  render() {

    return (
      
        <BrowserRouter>
     
        <Route path="/" exact component={Home}/>
        <Route path="/auth/" component={Lambda}/>
        </BrowserRouter>
     
    );
  }
}

export default App;