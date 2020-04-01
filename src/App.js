
import React from "react";
import axios from 'axios'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Home from './Home'
import Lambda from './Lambda'

class App extends React.Component {


 
  
  
  requestProfile = () => {
    var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81gad30pe28yok&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&state=0.06018782529263844&scope=r_liteprofile%20r_emailaddress%20w_member_social`
    
      window.location.href=`${oauthUrl}`
    
  };

  render() {
    let a=1;
    return (
      
        <BrowserRouter>
     
        <Route path="/" exact component={Home}/>
        <Route path="/auth/" component={Lambda}/>
        </BrowserRouter>
     
    );
  }
}

export default App;