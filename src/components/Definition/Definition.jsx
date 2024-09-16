import React from 'react';

const Definition = ({ meaning }) => {
  return (
    <section>
      <header>
        <h4>Meaning</h4>
      </header>
      {meaning?.definitions?.map((definition) => (
        <div key={definition.definition}>
          <ul className="pt-2 px-6">
            <li className="meaning-list-items">
              {definition.definition}
              <br />
              <span className="text-gray-100">{definition.example}</span>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Definition;
