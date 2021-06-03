import ResponseInformation from "./ResponseInformation";
// import ResponseChart from "./ResponseChart";
import { Link } from "react-router-dom";

const ResponseFunc = (props) => {
  console.log("response function props");
  console.log(props);
  return (
    <div>
      <Link
        className="text-decoration-none text-dark"
        to={{ pathname: props.path, response: props.response }}
      >
        <ResponseInformation response={props.response} />
      </Link>
    </div>
  );
};

export default ResponseFunc;
