import { google } from "googleapis";
import stream from "stream";

async function uploadFile(
  googleUploadFolderID: string,
  filename: string,
  mimeType: any,
  fileBuffer: Buffer
) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "../vocalisKey.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const driveService = google.drive({
    version: "v3",
    auth: auth,
  });

  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileBuffer);

  const media = {
    mimeType: mimeType,
    body: bufferStream,
  };

  const fileMetadata = {
    name: filename,
    parents: [googleUploadFolderID],
  };
  try {
    const response = await driveService.files.create({
      requestBody: fileMetadata,
      media,
      fields: "id",
    });
    console.log(response.data.id);
  } catch (error: any) {
    console.log(error.message);
  }
}

// // so this method to delete the audio file by its ID

// async function deleteFile() {
//   try {
//     const response = await driveService.files.delete({
//       fileId: "1f1Zk6gZ0uV7Kj1w8Qh7Gc0yJg9Y9z0l8",
//     });
//     console.log(response.data, response.status);
//   } catch (error: any) {
//     console.log(error.message);
//   }
// }

// // this method to get the audio file by its ID
// async function getFile() {
//   try {
//     const response = await driveService.files.get({
//       fileId: "1f1Zk6gZ0uV7Kj1w8Qh7Gc0yJg9Y9z0l8",
//       alt: "media",
//     });
//     console.log(response.data);
//   } catch (error: any) {
//     console.log(error.message);
//   }
// }

// // this method to generate a public URL for certain file
// async function generatePublicUrl() {
//   try {
//     const fileId = "1f1Zk6gZ0uV7Kj1w8Qh7Gc0yJg9Y9z0l8";
//     await driveService.permissions.create({
//       fileId,
//       requestBody: {
//         role: "reader",
//         type: "anyone",
//       },
//     });
//     // webcontentLink will download the file to your machine
//     // webViewLink will open the file in the browser
//     const result = await driveService.files.get({
//       fileId,
//       fields: "webViewLink, webContentLink",
//     });
//     console.log(result.data);
//   } catch (error: any) {
//     console.log(error.message);
//   }
// }

export { uploadFile };
