import { useEffect, useState, useRef } from 'react';

import arrow from '../../assets/icons/arrow.svg';

const dataLists = [
  {
    title: 'Sans-serif',
    value: 'sans-serif',
  },
  {
    title: 'Serif',
    value: 'serif',
  },
  {
    title: 'Mono',
    value: 'mono',
  },
];

export default function FontOptions() {
  const [seletectedFont, setSeletectedFont] = useState(
    localStorage.getItem('selectedFont') || 'font-serif'
  );

  const [isOpen, setIsOpen] = useState(false);
  const fontSelectRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('selectedFont', seletectedFont);

    document.body.classList = '';
    document.body.classList.add(seletectedFont);
  }, [seletectedFont]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function handleClickOutside(e) {
    e.stopPropagation();
    const isTargetNotArrow = e.target.id !== 'arrow';

    if (isTargetNotArrow) return setIsOpen(false);
  }

  return (
    <div className=" relative ">
      <button
        ref={fontSelectRef}
        className="flex space-x-4 items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="capitalize text-sm font-bold">{seletectedFont}</p>
        <img className="img" src={arrow} alt="arrow icon" id="arrow" />
      </button>
      {isOpen && (
        <ul className="w-full absolute text-sm min-w-[150px] list-none rounded-md p-3 top-8 z-10 shadow-lg dark:bg-black-100 bg-white  dark:shadow-purple">
          {dataLists.map((list) => (
            <li
              className="cursor-pointer rounded-md p-1 transition-colors ease duration-300 hover:bg-black-300 hover:text-white"
              onClick={() => setSeletectedFont(list.value)}
              key={list.value}
            >
              {list.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
