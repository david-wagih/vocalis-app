import React, { useEffect, useState } from "react";

function DropZone() {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles: any) => {
    setFiles(incommingFiles);
  };

  const handleUpload = (file: any) => {};

  return <div></div>;
}

export default DropZone;
