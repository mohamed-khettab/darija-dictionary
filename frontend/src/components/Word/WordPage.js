import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchWord } from '../../utils/fetchData';
import LoadingMessage from './LoadingMessage';
import ErrorMessage from './ErrorMessage';

const WordPage = () => {
  const navigate = useNavigate();
  const { englishWord } = useParams();
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data for word:', englishWord);
  
    fetchWord(englishWord, setWordData)
      .then((data) => {
        console.log('Data fetched successfully:', data);
      })
      .catch((error) => {
        console.error('Error fetching word data:', error);
        if (error.response && error.response.status === 404) {
          navigate('/word-not-found');
        } else {
          setError(error.message);
        }
      });
  }, [englishWord, navigate]);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!wordData) {
    return <LoadingMessage />;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="w-full max-w-screen-md bg-white p-6 rounded-lg shadow-card transition duration-300 hover:shadow-xl">
        <h2 className="text-primary text-4xl lg:text-6xl font-heading mb-4">
          {wordData.english_word}
        </h2>

        {/* Part of Speech */}
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <p className="text-lg md:text-xl lg:text-2xl text-text">
            Part of Speech: {wordData.part_of_speech.join(', ')}
          </p>
        </div>

        {/* Translations */}
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="mb-2 text-2xl font-heading text-primary">Translations:</h3>
          <div className="translation-list">
            <p className="text-text">Arabic: {wordData.translations.arabic.join(', ')}</p>
            <p className="text-text">Darija: {wordData.translations.darija.join(', ')}</p>
          </div>
        </div>

        {/* Pronunciations */}
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="mb-2 text-2xl font-heading text-primary">Pronunciations:</h3>
          <div className="pronunciation-list">
            {wordData.pronunciations.map((pronunciation) => (
              <p key={pronunciation._id} className="text-text">
                <span className="font-medium">{pronunciation.notation}:</span> {pronunciation.pronunciation}
              </p>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="mb-2 text-2xl font-heading text-primary">Examples:</h3>
          <div className="example-list">
            {wordData.examples.map((example, index) => (
              <p key={index} className="text-text">{example}</p>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="mb-2 text-2xl font-heading text-primary">Additional Information:</h3>
          <p className="text-text">Etymology: {wordData.etymology.join(', ')}</p>
          <p className="text-text">Synonyms: {wordData.synonyms.join(', ')}</p>
          <p className="text-text">Antonyms: {wordData.antonyms.join(', ')}</p>
          <p className="text-text">Related Words: {wordData.related_words.join(', ')}</p>
          <p className="text-text">Usage Notes: {wordData.usage_notes.join(', ')}</p>
          <p className="text-text">Additional Field: {wordData.additional_field}</p>
        </div>
      </div>
    </div>
  );
};

export default WordPage;
