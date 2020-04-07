import React,{useState,useEffect} from "react";
import axios from "axios";
import photo from "./twitterLogin.png";

// class Twitter extends React.Component {
//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <button onClick={handleTwitter}>Twitter Login</button>
//       </div>
//     );
//   }
// }
const API_KEY=''
const API_SECRET_KEY=''
export default function Twitter() {
  const handleClick=()=>{
    window.location.href ='https://3xf4trcnyk.execute-api.us-east-1.amazonaws.com/dev/twitter/login'
    // axios.get('https://3xf4trcnyk.execute-api.us-east-1.amazonaws.com/dev/twitter/callback')
    //   .then(data=>{
    //     console.log(data)
    //   })
    //   .catch(err=>alert(err))
  }
  return (
    <div>
        <img 
          src={photo}
          onClick={handleClick}
          alt={"Click to login with twitter"}
        />
    </div>
  )
}


