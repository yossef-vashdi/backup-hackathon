import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { createPicture } from "../lib/api";
import ResponseItem from "./ResponseItem";
import { useDropzone } from "react-dropzone"
import "./Dragndrop.css"


// import { Link } from "react-router-dom";
// const testing = {
//   drawings: 0.8,
//   engraving: 0.5,
//   iconography: 0.3,
//   painting: 0.1,
//   sculpture: 0.2,
// };

const PictureUpload = () => {
  const [showValidationError, setShowValidationError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [picture, setPicture] = useState();
  // const [picturesData, setPicturesData] = useState([]);
  const [response, setResponse] = useState(); // yossi added
  const [isLoading, setIsLoading] = useState(false);

  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "100px" }} alt="preview" />
      </div>
    </div>
  ))

  // async function addNewPicture(picture) {
  //   try {
  //     const data = await createPicture(picture);
  //     if (data && !isPictureAlreadyExists(picturesData, data.fileName)) {
  //       const arr = [data, ...picturesData];
  //       setPicturesData(arr);
  //     } else {
  //       setModalIsOpen(false);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // function isPictureAlreadyExists(picturesData, pictureName) {
  //   const data = picturesData.find((e) => e.fileName === pictureName);
  //   return data ? true : false;
  // }

  function closeButton() {
    setShowValidationError(false);
  }

  // function uploadPicture(file) {
  //   console.log(file);
  //   setPicture(file);
  // }

  async function handleFormSubmit(event) {
    setResponse();
    event.preventDefault();
    setIsLoading(true)
    if (files) {
      try {
        setShowValidationError(false);
        // await addNewPicture(picture);
        // yossi changes
        const data = await createPicture(files[0]);
        setResponse(data);
        //till here
        setIsLoading(false)
        setModalIsOpen(true);
      } catch (err) {
        alert(err);
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
      setShowValidationError(true);
    }
  }

  return (
    <>
      <div className=" mt-1">
        <div className="">
          <form
            className=" justify-content-center p-5 bg-white mt-2 "
            onSubmit={(event) => handleFormSubmit(event)}
          >
            <h1 className="text-center mb-4" id="p">
              Picture Upload
            </h1>
            <div className="row mb-3 ">
              <div className="">
                {/* <div className=" input-group mb-1">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => uploadPicture(e.target.files[0])}
                    id="inputGroupFile02"
                  />
                </div> */}
              </div>
            </div>
            <div>
              <div className="mb-5">
                <div {...getRootProps()} className="drop-zone">
                  <input {...getInputProps()}/>
                  <div>{images}</div>
                 { !files[0] && <p>Click here or drop files to upload</p>}

                </div>
              </div>
              {showValidationError && (
                <div
                  className="d-flex justify-content-center alert alert-danger mt-1 alert-dismissible fade show"
                  role="alert"
                >
                  Please Upload again.
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeButton}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-dark rounded-pill mt-1 "
                  type="submit"
                >
                  Upload
                </button>

              </div>
              <div className="d-flex justify-content-center">
            {isLoading && <div class="spinner-grow text-warning mt-3 mx-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>}
            {isLoading && <div class="spinner-grow text-danger mt-3  mx-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>}
            {isLoading && <div class="spinner-grow text-success mt-3  mx-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>}
            </div>
            </div>
          </form>
        </div>
      </div>
      {response && <ResponseItem response={response} path="/details" />}
      {/* <ul className=" list-unstyled">
      <ResponseItem response={response} path="/details" />
      <ul className=" list-unstyled">
        {picturesData &&
          picturesData.map((item) => (
            <li className=" ">
              <div className="card mb-4" width="540">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.path}
                      className="card-img-top"
                      alt="..."
                      height="300"
                    />
                  </div>
              
                  <div className="col-md-8">
                    <div className="card-body">
                      <h1 className="card-title">{item.title}</h1>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul> */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        className="pt-5 w-25 m-auto mt-5"
      >
        <div
          className="d-flex justify-content-center alert alert-warning mt-2 alert-dismissible fade show p-5"
          role="alert"
        >
          The picture was uploaded!
          <button
            type="button"
            className="btn-close"
            onClick={() => setModalIsOpen(false)}
            aria-label="Close"
          ></button>
        </div>
      </Modal>
    </>
  );
};

export default PictureUpload;
