import CategoryInfo from "./CategoryInfo";

const ResponseInformation = (props) => {
  const infoAray = [];
  const topicAray = [];

  let item = "";
  for (item in props.response) {
    topicAray.push(`${item} ${props.response[item] * 100}  %`);
    let match = "";
    for (match in CategoryInfo) {
      if (match === item) {
        infoAray.push(CategoryInfo[match]);
      }
    }
  }
  return (
    <div>
      {topicAray.map((topic, i) => {
        return (
          <div key={topic}>
            <h2>{topic}</h2>
            <p>{infoAray[i]}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ResponseInformation;
