import React from "react";
import queryString from 'query-string';
import axios from 'axios'
class Lambda extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info:'loading',
            showButton:false
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
              this.setState({info:"You can close this page",showButton:true})
          }
          else{
              this.setState({info:"something went wrong contact admin"})
          }
       })
       .catch((error)=>{
           console.log(error)
       })
        
      }  
      handleAxios=()=>{
          this.setState({showButton:false})
        axios.get('https://zhpt499mlb.execute-api.us-east-1.amazonaws.com/dev/')
        .then((response)=>{
            console.log(response)
          if(response.data){
            this.setState({info:'Your Post is Successfull, You can close this page',showButton:false})
          }
        })
        .catch((error)=>{
          console.log(error)
          this.setState({info:'Your Post is NotSuccesful, Contact Admin',showButton:false})
      })
      }  
    render(){
        return(
            <div style={{align:'center'}}>
               <h1 >{this.state.info}</h1>
               {this.state.showButton && <button  onClick={this.handleAxios}>Trigger Lambda To Post</button>}
            </div>
        )
    }
}

export default Lambda