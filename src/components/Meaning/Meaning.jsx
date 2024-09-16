import React from 'react';

import { PartOfSpeech, Definition, Synonyms, Source } from '../index.js';

const Meaning = ({ searchWordInfo }) => {
  const { word, meanings, sourceUrls } = searchWordInfo;

  return (
    <section className="flex flex-col m-auto">
      <div className="meaning" id="meaning">
        {meanings?.map((meaning) => (
          <div key={word}>
            <PartOfSpeech meaning={meaning} />
            <Definition meaning={meaning} />
            <Synonyms meaning={meaning} />
            <Source sourceUrls={sourceUrls} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meaning;
