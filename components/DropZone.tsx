import React, { useState } from "react";
import { Dropzone, FileItem } from "@dropzone-ui/react";

function DropZone() {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles: any) => {
    setFiles(incommingFiles);
  };
  return (
    <Dropzone
      backgroundColor="#fafafa"
      label="Upload"
      onChange={updateFiles}
      value={files}
      accept=".mp3, .wav"
      footer={false}
      maxFiles={1}
      onClean={() => setFiles([])}
      onUploadStart={() => console.log("upload start")}
      url=""
    >
      {files.map((file) => (
        // @ts-ignore
        <FileItem key={file.id} {...file} preview />
      ))}
    </Dropzone>
  );
}

export default DropZone;
