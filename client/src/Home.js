
import React, { Component } from "react";
import queryString from 'query-string';
import axios from 'axios'
class Home extends Component {
    constructor(props){
      super(props)
      this.state={
        linkedInInfo:'',
        twitterInfo:'',
        googleInfo:'',
        showLinkedIn:true,
        showTwitter:true,
        showGoogle:true
      }
    }

    componentDidMount(){
      let params = queryString.parse(this.props.location.search)
        console.log(params.code)
       axios.get(`https://zhpt499mlb.execute-api.us-east-1.amazonaws.com/dev/api/token/${params.code}`,'',{
        headers : {
			"Content-Type": "x-www-form-urlencoded"
		}
       })
       .then((response)=>{
          if(response.data.result.access_token){
              this.setState({linkedInInfo:"LinkedIn Login is Successful",showLinkedIn:false})
          }
          else{
              this.setState({linkedInInfo:"something went wrong contact admin"})
          }
       })
       .catch((error)=>{
           console.log(error)
       })
    }

    handleLinkedInLogin=()=>{
      const oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81gad30pe28yok&redirect_uri=http://localhost:3000&state=0.06018782529263844&scope=r_liteprofile%20r_emailaddress%20w_member_social`
        
      window.location.href=`${oauthUrl}`
    }

    handleGoogleLogin=()=>{
        const oauthUrl=`https://accounts.google.com/o/oauth2/v2/auth?client_id=431723181007-bos5l9ls4q6gg9mh9kh9mhjdnnna00il.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/youtube.readonly&access_type=offline&response_type=code&redirect_uri=http://localhost:3000
        `
      const code =`4/yAH8QsvZ4aH7LlbyF07mvC1F702JaKcrtz2Y4d0oSiqwC4nJuazIeAIrdxOVnNbvhl1mKvBY2aJ21sB1U4fBu1k`
        window.location.href=`${oauthUrl}`
    }

    handleTwitterLogin=()=>{

    }

   
      render(){
          return(
            <div style={{align:'center'}}>
              {this.state.linkedInInfo?<h1>{this.state.linkedInInfo}</h1>:null}
          {this.state.googleInfo? <h1>{this.state.googleInfo}</h1>:null}
          {this.state.twitterInfo?<h1>{this.state.twitterInfo}</h1>:null}
           {this.state.showLinkedIn?<button onClick={this.handleLinkedInLogin} >LinkedIn Login</button>:null} 
            {this.state.showGoogle?<button onClick={this.handleGoogleLogin}> Google Login</button>:null}
            {this.state.showTwitter?<button onClick={this.handleTwitterLogin}>TwitterLogin</button>:null}
            
            </div>
          )
      }
}
export default Home