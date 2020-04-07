import React from "react";
import axios from "axios";

class Lambda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "Twitter Login Successful",
      showYouTubeBtn: true,
      showBlogPostBTn: true,
    };
  }
  handleBlog = () => {
    this.setState({ showBlogPostBTn: false });
    axios
      .get(
        "https://1pzebv2jdl.execute-api.ap-south-1.amazonaws.com/dev/twitter/blog"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          info: "Your Blog is posted Successfully to Twitter",
        });
      })
      .catch((error) => {
        this.setState({
          info: "Your Blog is posted Successfully to Twitter",
        });
        console.log(error);
      });
  };
  handleYoutube = () => {
    this.setState({ showYouTubeBtn: false });
    axios
      .get(
        "https://1pzebv2jdl.execute-api.ap-south-1.amazonaws.com/dev/twitter/video"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          info: "Your Youtube video is posted Successfully to Twitter",
        });
      })
      .catch((error) => {
        this.setState({
          info: "Your Youtube video is posted Successfully to Twitter",
        });
        console.log(error);
      });
  };
  render() {
    const btn = {
      backgroundColor: "#4CAF50" /* Green */,
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
    };
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.state.info}</h1>
        {this.state.showYouTubeBtn ? (
          <button style={btn} onClick={this.handleYoutube}>
            Post Youtube Video to Twitter
          </button>
        ) : null}
        <br />
        <br />
        {this.state.showBlogPostBTn ? (
          <button style={btn} onClick={this.handleBlog}>
            Post Blogs to Twitter
          </button>
        ) : null}
      </div>
    );
  }
}

export default Lambda;
