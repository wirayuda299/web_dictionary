import { useEffect, useState } from 'react';

import book from '../../assets/icons/book.svg';
import moon from '../../assets/icons/moon.svg';
import sun from '../../assets/icons/sun.svg';
import FontOptions from './FontOptions';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const selectedTheme =
      theme || localStorage.theme || (prefersDarkMode ? 'dark' : 'light');

    document.documentElement.classList.toggle('dark', selectedTheme === 'dark');
    localStorage.theme = selectedTheme;
  }, [theme]);

  const handleClick = (e) => {
    const checked = e.target.checked;
    setTheme(checked ? 'dark' : 'light');
  };
  return (
    <nav className="padding h-full w-full">
      <div className="book">
        <img src={book} alt="Book Icon" />
      </div>

      <div className="options">
        <FontOptions />

        <span className="line"></span>

        <div>
          <label className="switch" htmlFor="check">
            <input
              id="check"
              type="checkbox"
              checked={theme === 'dark'}
              onClick={handleClick}
            />
            <span className="slider"></span>
          </label>
        </div>
        <img width={30} height={30} src={theme === 'light' ? sun : moon} />
      </div>
    </nav>
  );
}
