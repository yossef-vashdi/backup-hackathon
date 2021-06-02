import React from "react";
import ResponseInformation from "./ResponseInformation";

class ResponseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreInformation: false,
    };
  }
  addInformation() {
    this.setState((prevState) => {
      return { moreInformation: !prevState.moreInformation };
    });
  }
  componentDidMount() {
    if (this.props.response) {
      console.log(this.props.response);
    }
  }
  render() {
    return (
      <div onClick={() => this.addInformation()}>
        {this.state.moreInformation ? (
          <ResponseInformation response={this.props.response} />
        ) : (
          "false"
        )}
      </div>
    );
  }
}

export default ResponseItem;
