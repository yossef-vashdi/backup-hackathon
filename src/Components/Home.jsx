import React from "react";
import PictureUpload from "./PictureUpload";
// import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
  }
  howItWorks() {
    this.setState((prevState) => {
      return { expand: !prevState.expand };
    });
  }
  render() {
    return (
      <div className="container pt-5 mt-4 ">
        <div className="">
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="fw-bolder">Arts Я us</h1>
                <p className="fs-4 mt-5"> Hi artist ! </p>
                <p className="fs-4">
                  {" "}
                  you want to show us your work ? you want to hear how others
                  see your creation ?
                </p>
                <p className="fs-4">
                  {" "}
                  please share with us, and we will tell you{" "}
                </p>
                <div>
                  <p onClick={() => this.howItWorks()}>
                    -- press here to hear more about our feedback --
                  </p>
                  {this.state.expand && (
                    <p>
                      our server will analyze your creation (AI) and will
                      estimate it's match to different categories (drawings,
                      engraving, iconography, painting, sculpture). we inted to
                      expand our feedback method to include more aspects as well
                      as giving you the opportunity to share your creation and
                      recieve feedback from other users, professional and
                      amateurs alike
                    </p>
                  )}
                </div>
              </div>

              <div className="">
                <img
                  src="/images/555.PNG"
                  className="w-100 rounded-pill mb-4 "
                  alt="..."
                  height="300"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <a className="mx-4 nav-link text-white" href="#p">
              <button
                className="btn btn-dark rounded-pill mt-1  p-3"
                type="submit"
              >
                To Upload picture
              </button>
            </a>
          </div>

          <h3 className="">Our clients' works</h3>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/3.jpg"
                  className="d-block w-100"
                  alt="..."
                  height="500"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/4.jpg"
                  className="d-block w-100"
                  alt="..."
                  height="500"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/44.jpg"
                  className="d-block w-100"
                  alt="..."
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>
        {/* insert component here */}
        <PictureUpload />
      </div>
    );
  }
}

export default Home;
