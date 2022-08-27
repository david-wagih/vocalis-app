import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { config } from "../config/config";
import gapi from "googleapis";

const oauth2Client = new google.auth.OAuth2({
  clientId: config.clientID,
  clientSecret: config.clientSecret,
  redirectUri: config.redirectURL,
});

oauth2Client.setCredentials({ refresh_token: config.refreshToken });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

const filePath = path.join(__dirname, "sample.mp3");

// this is an example to how to upload some file to google drive

async function uploadFile(file: any) {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: "sample.mp3",
        mimeType: "audio/mpeg",
      },
      // actual content of the file
      media: {
        mimeType: "audio/mpeg",
        body: file,
      },
    });
    console.log(response.data);
  } catch (error: any) {
    console.log(error.message);
  }
}

// so this method to delete the audio file by its ID

async function deleteFile() {
  try {
    const response = await drive.files.delete({
      fileId: "1f1Zk6gZ0uV7Kj1w8Qh7Gc0yJg9Y9z0l8",
    });
    console.log(response.data, response.status);
  } catch (error: any) {
    console.log(error.message);
  }
}

// this method to get the audio file by its ID
async function getFile() {
  try {
    const response = await drive.files.get({
      fileId: "1f1Zk6gZ0uV7Kj1w8Qh7Gc0yJg9Y9z0l8",
      alt: "media",
    });
    console.log(response.data);
  } catch (error: any) {
    console.log(error.message);
  }
}

// this method to generate a public URL for certain file
async function generatePublicUrl() {
  try {
    const fileId = "1f1Zk6gZ0uV7Kj1w8Qh7Gc0yJg9Y9z0l8";
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    // webcontentLink will download the file to your machine
    // webViewLink will open the file in the browser
    const result = await drive.files.get({
      fileId,
      fields: "webViewLink, webContentLink",
    });
    console.log(result.data);
  } catch (error: any) {
    console.log(error.message);
  }
}

export { uploadFile, deleteFile, getFile, generatePublicUrl };
