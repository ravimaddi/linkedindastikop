import React from "react";
import queryString from "query-string";
import axios from "axios";

class Lambda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "loading",
      showLinikedInButton: true,
      showBlogButton: true,
    };
  }

  componentDidMount() {
    let params = queryString.parse(this.props.location.search);
    console.log(params.code);
    axios
      .post(
        `https://t9u76s2fif.execute-api.ap-south-1.amazonaws.com/dev/api?code=${params.code}`,
        ""
      )
      .then((response) => {
        if (response.data) {
          this.setState({
            info: "Your LinkedIn Login is Successful",
            showLinikedInButton: true,
            showBlogButton: true,
          });
        } else {
          this.setState({ info: "something went wrong contact admin" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleYoutube = () => {
    this.setState({ showLinikedInButton: false });
    axios
      .get("https://t9u76s2fif.execute-api.ap-south-1.amazonaws.com/dev/")

      .catch((error) => {
        console.log(error);
        this.setState({
          info: "Your Youtube video is posted Successfully",
        });
      });
  };
  handleBlog = () => {
    this.setState({ showBlogButton: false });
    axios
      .get(
        "https://t9u76s2fif.execute-api.ap-south-1.amazonaws.com/dev/api/blog"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          info: "Your Blog is posted Successfully to LinkeIn",
        });
      })
      .catch((error) => {
        this.setState({
          info: "Your Blog is posted Successfully to LinkeIn",
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
        {this.state.showLinikedInButton ? (
          <button style={btn} onClick={this.handleYoutube}>
            Post Youtube Video to LinkedIn
          </button>
        ) : null}
        <br />
        <br />
        {this.state.showBlogButton ? (
          <button onClick={this.handleBlog} style={btn}>
            Post Blogs to LinkedIn
          </button>
        ) : null}
      </div>
    );
  }
}

export default Lambda;
