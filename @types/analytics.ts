export type Analytics = {
  wpm: any[];
  talkTime: number;
  silenceTime: number;
  talkToSilence: number;
  transcript: any[];
  summary: any[];
  topics: any[];
  fillerWords: any[];
};

export type wpm = {
  wpm: number;
  feedback: string;
};

export type filler = {
  numOfFillerWords: number;
  totalNumberOfWords: number;
};
