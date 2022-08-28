import { process } from "./processAudio";

const accessToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjY1Nzc3MDM3NTgwNjk3NjAiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoidjhvWTRwMkdmQ1U3eEZJNzVJR0k5NGZhU1FGNHU0Y0hAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNjc1MDYxLCJleHAiOjE2NjE3NjE0NjEsImF6cCI6InY4b1k0cDJHZkNVN3hGSTc1SUdJOTRmYVNRRjR1NGNIIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.MASQKqbfqJG0N3lVkU3e2YE5gGFCiLTMQHlCRdzSpw0es8KCvQ3FzQjH_Np33jCsLl2tGSGdEc8mJQDNF8sVvMHoY9hrRlsFS9gY_sIPoACzK842T3On0kefDQBblEpWdHQQDUC72CdiwSF21JJDw0h3FNdg0Ben03fm4SpDW0j3STI1uEEoDCRV39RQ51y8qaFRepMpBhE2_4kKmaMXL5z5OYkZSYaRwmeKdBglXlizSHAmVzuyLC4D595KYUMlDlAp5pMmZfhuztZ-soJPBnVAUvFHcyFw5b7fAI26FKkZnh2ug3t7HX_no7g2yjR2h8JMUXxvarTLANV_KOdD9w";
let conversationId = "6399787423760384";

//returns each line in the transcript as a string array
async function getTranscript() {
  let tData = [];

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

//returns each line in the summary as a string array
async function getSummary() {
  let sumData = [];
  const fetchResponse = await fetch(
    `https://api.symbl.ai/v1/conversations/${conversationId}/summary`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responseBody = await fetchResponse.json();

  const rawSummary = responseBody["summary"];
  for (const val of rawSummary) {
    sumData.push(val["text"]);
  }

  return sumData;
}

async function getTopics() {
  let tData = [];
  const fetchResponse = await fetch(
    `https://api.symbl.ai/v1/conversations/${conversationId}/topics?sentiment=true&parentRefs=true`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responseBody = await fetchResponse.json();
  const rawSummary = responseBody["topics"];
  for (const val of rawSummary) {
    tData.push(val["text"]);
  }
  return tData;
}

async function getQuestions() {
  let qData = [];
  const fetchResponse = await fetch(
    `https://api.symbl.ai/v1/conversations/${conversationId}/questions`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responseBody = await fetchResponse.json();
  const rawSummary = responseBody["questions"];
  for (const val of rawSummary) {
    qData.push(val["text"]);
  }
  return qData;
}

async function getAnalytics() {
  let aData = [];
  const fetchResponse = await fetch(
    `https://api.symbl.ai/v1/conversations/${conversationId}/analytics`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responseBody = await fetchResponse.json();
  return responseBody;
}

//returns each line in the list of action items as a string array
async function getActionItems() {
  let atData = [];
  const fetchResponse = await fetch(
    `https://api.symbl.ai/v1/conversations/${conversationId}/action-items`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responseBody = await fetchResponse.json();
  const rawSummary = responseBody["actionItems"];
  for (const val of rawSummary) {
    atData.push(val["text"]);
  }
  return atData;
}

async function getWPM() {
  let metrics = await getAnalytics();
  let wpm = metrics["members"][0]["pace"]["wpm"];
  let speed = "good";
  if (wpm < 140) speed = "Slow";
  else if (wpm > 160) speed = "Fast";

  return [wpm, speed];
}

//returns seconds of talk time as float
async function getTalkTime() {
  let metrics = await getAnalytics();
  return metrics["metrics"][1]["seconds"];
}

//returns seconds of silence time as float
async function getSilenceTime() {
  let metrics = await getAnalytics();
  return metrics["metrics"][0]["seconds"];
}

//returns number of filler words as int
async function getFillerWords() {
  let script = await getTranscript();
  script = script
    .join(" ")
    .split(" ")
    .map((v) => v.toLowerCase());
  let numFiller = 0;
  let numTotal = script.length;
  let fillerWords = ["um", "uh", "er", "like", "but", "you know", "hmm"];

  for (const val of script) {
    if (fillerWords.includes(val)) {
      numFiller++;
    }
  }
  return [numFiller, numTotal];
}

async function getData() {
  let transcript = await getTranscript();
  let topics = await getTopics();
  let fillerWords = await getFillerWords();
  let wpm = await getWPM();
  let talkTime = await getTalkTime();
  let silenceTime = await getSilenceTime();
  let summary = await getSummary();
  let data = {
    wpm: wpm,
    fillerWords: fillerWords,
    summary: summary,
    talkTime: talkTime,
    silenceTime: silenceTime,
    talkToSilence: (talkTime / silenceTime) * 100,
    transcript: transcript,
    topics: topics,
  };
  return data;
}

export { getData };
