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
          navigate('/not-found');
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
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-screen-md bg-white p-6 rounded-lg border border-gray-300 transition duration-300">
        <h2 className="text-4xl lg:text-6xl font-semibold mb-4">{wordData.english_word}</h2>

        <div className="bg-neutral-100 p-4 lg:p-10 rounded-md mb-4">
          <p className="text-lg md:text-xl lg:text-2xl">
            Part of Speech: {wordData.part_of_speech.join(', ')}
          </p>
        </div>

        <div className="bg-neutral-100 p-4 lg:p-10 rounded-md mb-4">
          <h3 className="mb-2 text-2xl font-semibold">Translations:</h3>
          <div className="translation-list">
            <p>Arabic: {wordData.translations.arabic.join(', ')}</p>
            <p>Darija: {wordData.translations.darija.join(', ')}</p>
          </div>
        </div>

        <div className="bg-neutral-100 p-4 lg:p-10 rounded-md mb-4">
          <h3 className="mb-2 text-2xl font-semibold">Pronunciations:</h3>
          <div className="pronunciation-list">
            {wordData.pronunciations.map((pronunciation) => (
              <p key={pronunciation._id}>
                <span className="font-medium">{pronunciation.notation}:</span> {pronunciation.pronunciation}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-neutral-100 p-4 lg:p-10 rounded-md mb-4">
          <h3 className="mb-2 text-2xl font-semibold">Examples:</h3>
          <div className="example-list">
            {wordData.examples.map((example, index) => (
              <p key={index}>{example}</p>
            ))}
          </div>
        </div>

        <div className="bg-neutral-100 p-4 lg:p-10 rounded-md mb-4">
          <h3 className="mb-2 text-2xl font-semibold">Additional Information:</h3>
          <p>Etymology: {wordData.etymology.join(', ')}</p>
          <p>Synonyms: {wordData.synonyms.join(', ')}</p>
          <p>Antonyms: {wordData.antonyms.join(', ')}</p>
          <p>Related Words: {wordData.related_words.join(', ')}</p>
          <p>Usage Notes: {wordData.usage_notes.join(', ')}</p>
          <p>Additional Field: {wordData.additional_field}</p>
        </div>
      </div>
    </div>
  );
};

export default WordPage;