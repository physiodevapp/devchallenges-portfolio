import React, { useState, useContext } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ThemeButton } from './ThemeButton';
import SectionsNavbar from './SectionsNavbar';
import { ThemeContext } from '../../contexts/Theme';

export const Header = ({ portfolioSection, opacity }) => {

  const [textColor, setTextColor] = useState('white');

  const { isDark } = useContext(ThemeContext);
  const darkMode = isDark ? 'dark' : 'light';

  return (
    <>
      <h2 className={`${darkMode} header fs-4 mb-0`} style={{ color: textColor, opacity: opacity }}>

        <SectionsNavbar section={portfolioSection} showTime={opacity} />

        {
          opacity && <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              '<Better code>',
              4000,
              '<Better lifes/>',
              8000
            ]}
            wrapper="span"
            // speed={40}
            speed={{ type: 'keyStrokeDelayInMs', value: 250 }}
            deletionSpeed={60}
            omitDeletionAnimation={false}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        }

        <ThemeButton faLight={'fa-solid fa-sun'} faDark={'fa-solid fa-moon'} showTime={opacity} />

      </h2>
    </>
  );
};
