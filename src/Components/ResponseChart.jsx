import React from "react";
import { Bar } from "react-chartjs-2";

class ResponseChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      presantage: [],
    };
  }

  componentDidMount() {
    console.log("this is the props", this.props.response);

    const category = [];
    const presantage = [];
    //   const topicAray = [];
    let item = "";
    for (item in this.props.response) {
      category.push(item);
      presantage.push(this.props.response[item] * 100);

      //     category.push(`${item} ${props.response[item] * 100}  %`);
      //     let match = "";
      //     for (match in CategoryInfo) {
      //       if (match === item) {
      //         infoAray.push(CategoryInfo[match]);
      //       }
    }
    this.setState({ category, presantage });
  }
  render() {
    console.log(this.props.response);
    const data = {
      labels: this.state.category,
      datasets: [
        {
          label: "% of match value is ",
          data: this.state.presantage,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    return (
      <div>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            // maintainAspectRatio: false,
            scales: {
              y: {
                ticks: {
                  beginAtZero: true,
                },
                // suggestedMin: 0,
                // suggestedMax: 100,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default ResponseChart;
