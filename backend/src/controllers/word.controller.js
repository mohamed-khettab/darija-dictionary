const Word = require("../models/word.model");

const handleServerError = (res, error) => {
  console.error(error);
  return res.status(500).send({ message: "Internal Server Error!" });
};

class WordController {
  getAll = async (req, res) => {
    try {
      const docs = await Word.find();

      return res.status(200).send(docs);
    } catch (error) {
      handleServerError(res, error);
    }
  };

  getByEnglishWord = async (req, res) => {
    const { englishWord } = req.params;

    try {
      const word = await Word.findOne({ english_word: englishWord });

      if (!word) {
        return res.status(404).send({ message: "Word not found" });
      }

      return res.status(200).send(word);
    } catch (error) {
      handleServerError(res, error);
    }
  };
}

module.exports = WordController;
