import React, { useEffect, useState } from "react";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import { getData, getId, getTranscript } from "../services/speechAnalytics";

function DropZone() {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles: any) => {
    setFiles(incommingFiles);
  };

  const handleUpload = (file: any) => {
    getId(file);
    console.log("hello");
    console.log(file);
    console.log(getData(file));
  };

  // const handleOpenPicker = () => {
  //   openPicker({
  //     clientId: config.clientID,
  //     developerKey: config.apiKey,
  //     viewId: "DOCS",
  //     // token: token, // pass oauth token in case you already have one
  //     token: config.accessToken,
  //     showUploadView: true,
  //     showUploadFolders: true,
  //     supportDrives: true,
  //     // customViews: customViewsArray, // custom view
  //     callbackFunction: (data) => {
  //       if (data.action === "cancel") {
  //         console.log("User clicked cancel/close button");
  //       }
  //       console.log(data);
  //     },
  //   });
  // };

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
      <button onClick={() => handleUpload(files[0])}>upload</button>
    </div>
  );
}

export default DropZone;
