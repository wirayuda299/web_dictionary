import React from 'react';

const Synonyms = ({ meaning }) => {
  return (
    <section>
      <header>
        <h4>Synonyms</h4>
      </header>
      <ul className="pt-6 pb-0 px-6">
        {meaning.synonyms.length > 0
          ? meaning?.synonyms?.map((synonym) => (
              <li key={synonym} className="meaning-list-items">
                {synonym}
              </li>
            ))
          : 'No synonyms available'}
      </ul>
    </section>
  );
};

export default Synonyms;
