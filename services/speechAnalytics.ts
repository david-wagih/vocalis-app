import fetch from "node-fetch";
import { process } from "./processAudio.js";

const filePath = "AudioFiles/speech.mp3";

const accessToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjY1Nzc3MDM3NTgwNjk3NjAiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoidjhvWTRwMkdmQ1U3eEZJNzVJR0k5NGZhU1FGNHU0Y0hAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNTc2MDEyLCJleHAiOjE2NjE2NjI0MTIsImF6cCI6InY4b1k0cDJHZkNVN3hGSTc1SUdJOTRmYVNRRjR1NGNIIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.KOu9zkUtCfP7QpJitr9HdOVhL2MdHMvhOKR9969RI18yWZ1XMO0uPAumotDlIl0QotukLKsTzE0KCelXLfOy7hH-NmEVR7SXCZdr9VdEuCk4Ig6PCtlnwqdoT6DvV9_sKWLrCPbKqsIG1divYtM5FdgDgovwg-vHveTSbDwzu6o0rnUTOCubgCk7zaoFK0RrQEFuepxPeMZ5VYIHXSwfHzMepkQDeQcH50j-WVZhzgjl5sdc_Tn_Sf_kLLVrPScHq-4uYIqyDbUQ73KFKYAkbrFE5_cwF8JdCvuxv1CVpSk-4cq3N7wiLwNm1P8QOlz3z2ZiBKdAOuf97tTQShHLzQ";
let conversationId = "5216397131513856";

async function getId(file: any) {
  // conversationId = await process(filePath,accessToken)
  conversationId = "5216397131513856";

  // conversationId='5412892522840064';
}
// let conversationId='5216397131513856';
// const conversationId = '4703592800321536';
// console.log("ID",conversationId,conversationId=='4753520654286848')
// '5096896142508032';

//returns each line in the transcript as a string array
async function getTranscript() {
  let tData = [];
  console.log("CONVO", conversationId);
  const fetchResponse = await fetch(
    `https://api.symbl.ai/v1/conversations/${conversationId}/messages?sentiment=true`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  const responseBody = await fetchResponse.json();
  const rawSummary = responseBody["messages"];
  for (const val of rawSummary) {
    tData.push(val["text"]);
  }

  return tData;
}

async function getData(file: any) {
  getId(file)
    .then(() => {
      console.log("CONVI", conversationId);
      getTranscript().then((val) => {
        if (val.length > 0)
          console.log("TRANSCRIPT:", val.join("\n"), "\n\n\n");
        else console.log("EMPTY TRANSCRIPT");
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getId, getTranscript, getData };
