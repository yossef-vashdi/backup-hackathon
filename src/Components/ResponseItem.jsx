import React from "react";
import ResponseInformation from "./ResponseInformation";
import ResponseChart from "./ResponseChart";

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
      <div onClick={() => this.addInformation()}>
        {this.state.moreInformation ? (
          <ResponseInformation response={this.props.response} />
        ) : (
          <ResponseChart response={this.props.response} />
        )}
      </div>
    );
  }
}

export default ResponseItem;
