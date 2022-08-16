const actionLabelLookup = [
  "Gimme another one",
  "Hit me with it",
  "Refresh",
  "Give me another one",
  "Hmm, maybe one more?",
  "You're a bit picky aren't you?",
  "This is the one",
  "Click me baby one more time",
  "The perfect icebreaker awaits",
];

export const generateRandomActionLabel = () =>
  actionLabelLookup[Math.floor(Math.random() * actionLabelLookup.length)];
