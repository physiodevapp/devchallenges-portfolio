import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ThemeButton } from './ThemeButton';
import SectionsNavbar from './SectionsNavbar';

export const Header = ({ personalSection, opacity }) => {

  const [textColor, setTextColor] = useState('white');

  return (
    <>
      <h2 className={`header fs-4 mb-0`} style={{ color: textColor, opacity: opacity }}>

        <SectionsNavbar section={personalSection} showTime={opacity} />

        {
          opacity && <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              // Same substring at the start will only be typed out once, initially
              '<Better code>',
              4000,
              // '<Better code> ... <Better code/>',
              // () => setTextColor('white'),
              // 1000,
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
