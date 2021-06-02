import React from "react";
// import ResponseInformation from "./ResponseInformation";
// import ResponseChart from "./ResponseChart";
// import { Link } from "react-router-dom";
import ResponseFunc from "./ResponseFunc";

class ResponseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreInformation: false,
    };
  }
  // addInformation() {
  //   this.setState((prevState) => {
  //     return { moreInformation: !prevState.moreInformation };
  //   });
  // }
  componentDidMount() {
    // if (this.props.response) {
    //   console.log(this.props.response);
    // }
    this.setState({ moreInformation: false });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.response !== this.props.response) {
      this.setState({ moreInformation: false });
    }
  }
  render() {
    return (
      <div>
        {/* <Link className="text-decoration-none text-dark" 
        to={{pathname: this.props.path, response: this.props.response}}
        >
      <ResponseInformation response={this.props.response} /> 
        
          "false"
    </Link> */}

        <ResponseFunc response={this.props.response} path="/details" />
      </div>
    );
  }
}

export default ResponseItem;
