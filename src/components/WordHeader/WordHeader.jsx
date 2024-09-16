import React from 'react';

import playIcon from '../../assets/icons/play.svg';

const WordHeader = ({ response }) => {
  const audioUrl = response[0]?.phonetics[0]?.audio;

  const handlePlay = () => {
    if (audioUrl) {
      new Audio(audioUrl).play();
    }
  };

  return (
    <div className="flex justify-between">
      <div id="tittle">
        <h1 className="word text-[1.125rem] font-bold" id="word">
          {response[0]?.word}
        </h1>
        <span className="text-purple" id="pron">
          {response[0]?.phonetic}
        </span>
      </div>
      {response.length !== 0 && response[0]?.phonetics[0]?.audio !== '' && (
        <>
          <button onClick={handlePlay} className="btn-play" id="btn-play">
            <img src={playIcon} alt="Play button" />
          </button>
        </>
      )}
    </div>
  );
};

export default WordHeader;
