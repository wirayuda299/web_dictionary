import React from 'react';

const PartOfSpeech = ({ meaning }) => {
  return (
    <section className="flex items-center gap-8 pt-[2.625rem]">
      <h3>{meaning.partOfSpeech}</h3>
      <span className="w-full h-[1px] bg-gray-200"></span>
    </section>
  );
};

export default PartOfSpeech;
