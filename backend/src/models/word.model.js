const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const wordSchema = new Schema({
  _id: { type: objectId, auto: true },
  english_word: { type: String, required: true },
  translations: {
    arabic: { type: [String], required: true },
    darija: { type: [String], required: true },
  },
  pronunciations: [
    {
      notation: { type: String, required: true },
      pronunciation: { type: String, required: true },
      audio_pronunciation: { type: String, required: true },
    },
  ],
  part_of_speech: { type: [String], required: true },
  examples: { type: [String], required: true },
  etymology: { type: [String], required: true },
  synonyms: { type: [String], required: true },
  antonyms: { type: [String], required: true },
  related_words: { type: [String], required: true },
  usage_notes: { type: [String], required: true },
  additional_field: { type: String, required: true },
});

const Word = mongoose.model("Word", wordSchema);
module.exports = Word;
