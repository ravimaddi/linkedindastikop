
import React, { Component } from "react";

class Home extends Component {
 
  componentDidMount=()=>{
      
        var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81gad30pe28yok&redirect_uri=https://ravilinkedinshare.herokuapp.com/auth&state=0.06018782529263844&scope=r_liteprofile%20r_emailaddress%20w_member_social`
        
          window.location.href=`${oauthUrl}`
        
    }

    handleClick=()=>{
      var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81gad30pe28yok&redirect_uri=https://ravilinkedinshare.herokuapp.com/auth&state=0.06018782529263844&scope=r_liteprofile%20r_emailaddress%20w_member_social`
        
          window.location.href=`${oauthUrl}`
    }

      render(){
          return(
              <div style={{align:'center'}}>
            <button onClick={this.handleClick} >LinkedIn Login</button>
            
            </div>
          )
      }
}
export default Home