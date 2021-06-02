import ResponseInformation from "./ResponseInformation";
import ResponseChart from "./ResponseChart";
import { Link } from "react-router-dom";

const ResponseFunc = (props) => {
  console.log("response function props");
  console.log(props);
  return (
    <div>
      <Link to={{ pathname: props.path, response: props.response }}>
        <div>Hiiiiiiiiiiikkkkkkkkkkk</div>
      </Link>
      <ResponseInformation response={props.response} />
    </div>
  );
};

export default ResponseFunc;
