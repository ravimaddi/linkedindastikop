
import React, { Component } from "react";

class Home extends Component {
 
  componentDidMount=()=>{
      
        var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81gad30pe28yok&redirect_uri=https://master.dfhwi69jafa7m.amplifyapp.com/auth&state=0.06018782529263844&scope=r_liteprofile%20r_emailaddress%20w_member_social`
        
          window.location.href=`${oauthUrl}`
        
    }

      render(){
          return(
              <div style={{align:'center'}}>
            <button  >LinkedIn Login</button>
            
            </div>
          )
      }
}
export default Home