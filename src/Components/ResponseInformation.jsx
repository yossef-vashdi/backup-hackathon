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
      {!props.location ? <div className="card mb-3 border-0" width="">
        <div className="row g-0  d-flex justify-content-between align-items-center">
          <div className="col m-5">
            <ResponseChart response={response} />
          </div>
          <div className="col">
            <div className="card-body">
              {topicAray.map((topic, i) => {
                return (
                  <div className="d-flex justify-content-end m-2" key={topic}>
                    <div>
                      <h4 className="card-title me-3">{topic}</h4>
                    </div>
                    <div className="me-5 ">
                      <img src="images/mocks/3.jpg" className="rounded" style={{ maxWidth: 50 }} />
                    </div>
                    {/* {props.location && <p>{infoAray[i]}</p>} */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> :
        <div >
          {topicAray.map((topic, i) => {
            return (
              <div className="card mb-3 border-0"  >
                <div className="row g-0">
                  <div className="col-md-2 ms-5">
                    <img src="images/mocks/3.jpg" className="rounded"  height="300"   />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" key={topic}>
                      <h2 className="card-title">{topic}</h2>
                      <p className="card-text">{infoAray[i]}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div >
            <ResponseChart response={response} />
          </div>
        </div>
      }
    </div>
  );
};
export default ResponseInformation;


