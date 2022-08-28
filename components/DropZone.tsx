import React, { useEffect, useState } from "react";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import { uploadFile } from "../services/googleDrive";
import { getData, getId, getTranscript } from "../services/speechAnalytics";
import useDrivePicker from "react-google-drive-picker/dist";
import { config } from "../config/config";

function DropZone() {
  const [openPicker, authResponse] = useDrivePicker();
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles: any) => {
    setFiles(incommingFiles);
  };

  console.log(files[0]);

  // todo : try to test uploading and event getting the transcript for a start
  const handleUpload = (file: any) => {
    // uploadFile(file);
    getId(file);
    console.log("hello");
    console.log(file);
    console.log(getData(file));
  };

  const handleOpenPicker = () => {
    openPicker({
      clientId: config.clientID,
      developerKey: config.apiKey,
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      token: config.accessToken,
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
      },
    });
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
      <div>
        <button onClick={() => handleUpload(files[0])}>upload</button>
      </div>
    </div>
  );
}

export default DropZone;
