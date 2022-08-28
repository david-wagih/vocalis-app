export type Analytics = {
  wpm: wpm[];
  talkTime: number;
  silenceTime: number;
  talkToSilence: number;
  transcript: string;
  summary: string;
  topics: string[];
};

export type wpm = {
  wpm: number;
  feedback: string;
};
