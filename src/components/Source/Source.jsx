import React from 'react';

const Source = ({ sourceUrls }) => {
  return (
    <section>
      <header>
        <h4>Source</h4>
      </header>
      <ul className="flex justify-between pt-6 pb-0 px-6 flex-wrap">
        {sourceUrls.length > 0
          ? sourceUrls?.map((url) => (
              <li className="flex justify-between meaning-list-items" key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex justify-between"
                >
                  <span className="mr-2">{url}</span>
                  <img
                    src="https://jefcooper.github.io/fem-dictionary-web-app/assets/icon-new-window-70a67aa8.svg"
                    alt="Icon to go to link"
                  />
                </a>
              </li>
            ))
          : 'No sources available'}
      </ul>
    </section>
  );
};

export default Source;
