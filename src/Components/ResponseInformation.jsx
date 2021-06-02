import CategoryInfo from "./CategoryInfo";
import ResponseChart from "./ResponseChart";

const ResponseInformation = (props) => {
  let response = {};
  if (!props.location) response = props.response;
  else response = props.location.response;
  //   console.log("props location");
  //   console.log(props.location);
  const infoAray = [];
  const topicAray = [];

  let item = "";
  for (item in response) {
    topicAray.push(`${item} ${response[item] * 100}  %`);
    let match = "";
    for (match in CategoryInfo) {
      if (match === item) {
        infoAray.push(CategoryInfo[match]);
      }
    }
  }
  return (
    <div>
      <h1>HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII</h1>
      {topicAray.map((topic, i) => {
        return (
          <div key={topic}>
            <h2>{topic}</h2>
            <p>{infoAray[i]}</p>
          </div>
        );
      })}
      <ResponseChart response={response} />
    </div>
  );
};
export default ResponseInformation;
