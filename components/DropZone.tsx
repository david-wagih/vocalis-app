import React, { useEffect, useState } from "react";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import { uploadFile } from "../services/googleDrive";
import { getData, getId, getTranscript } from "../services/speechAnalytics";

function DropZone() {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles: any) => {
    setFiles(incommingFiles);
  };

  console.log(files);

  // todo : try to test uploading and event getting the transcript for a start
  const handleUpload = (file: any) => {
    // uploadFile(file);
    getId(file);
    console.log("hello");
    console.log(file);
    console.log(getData(file));
  };

  return (
    <div>
      <Dropzone
        backgroundColor="#fafafa"
        label="Upload"
        onChange={updateFiles}
        value={files}
        accept=".mp3, .wav"
        footer={false}
        maxFiles={1}
        onClean={() => setFiles([])}
      >
        {files.map((file) => (
          // @ts-ignore
          <FileItem key={file.id} {...file} preview />
        ))}
      </Dropzone>
      <button onClick={() => handleUpload(files[0])}>Upload</button>
    </div>
  );
}

export default DropZone;
