import stream from "stream";
import { google } from "googleapis";

const UploadImageToDrive = async (
  googleUploadFolderID: string,
  filename: string,
  mimeType: any,
  fileBuffer: Buffer
) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./ShamamsaGoogleApiKey.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
  const driveService = google.drive({ version: "v3", auth });

  const fileMetadata = {
    name: filename,
    parents: [googleUploadFolderID],
  };

  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileBuffer);

  const media = {
    mimeType,
    body: bufferStream,
  };
  const driveUpload = await driveService.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: "id",
  });
  return driveUpload.data.id;
};

export default UploadImageToDrive;
