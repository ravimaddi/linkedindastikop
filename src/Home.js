import React, { Component } from "react";
import linkedinInImage from "./Sign-In-Small---Active.png";
import twitterImage from "./twitterLogin.png";

class Home extends Component {
  handleLinkedInLogin = () => {
    const oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81gad30pe28yok&redirect_uri=https://master.d2ei6byri74h0s.amplifyapp.com/auth&state=0.06018782529263844&scope=r_liteprofile%20r_emailaddress%20w_member_social`;

    window.location.href = `${oauthUrl}`;
  };

  handleTwitterLogin = () => {
    const oauthUrl = `https://1pzebv2jdl.execute-api.ap-south-1.amazonaws.com/dev/twitter/login`;
    window.location.href = `${oauthUrl}`;
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Click on the Image to SignIn</h1>
        <img
          src={linkedinInImage}
          onClick={this.handleLinkedInLogin}
          alt={"Click to LinKedInLogin"}
        />
        <br />
        <br />
        <img
          src={twitterImage}
          onClick={this.handleTwitterLogin}
          alt={"Click to login with twitter"}
        />
      </div>
    );
  }
}
export default Home;
