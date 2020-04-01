
import React, { Component } from "react";

class Home extends Component {
 
      requestProfile = () => {
        var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81gad30pe28yok&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&state=0.06018782529263844&scope=r_liteprofile%20r_emailaddress%20w_member_social`
        
          window.location.href=`${oauthUrl}`
        
      };

      render(){
          return(
              <div style={{align:'center'}}>
            <button  onClick={this.requestProfile}>LinkedIn Login</button>
            
            </div>
          )
      }
}
export default Home