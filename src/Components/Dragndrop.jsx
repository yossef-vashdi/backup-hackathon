import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import "./Dragndrop.css"

function Dragndrop() {
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

  return (
    <div className="mb-5">
      <div {...getRootProps()} className="drop-zone">
        <input {...getInputProps()} />
        <p>Click here or drop files to upload</p>
      <div>{images}</div>
      </div>
    </div>
  )
}

export default Dragndrop