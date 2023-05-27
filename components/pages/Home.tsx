import {
  IonIcon,
  IonText,
} from '@ionic/react';
import React, { use, useEffect, useState } from 'react';
import { moonOutline, sunnyOutline } from 'ionicons/icons';
const Home = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkModeHandler = () => document.body.classList.toggle('dark');

  return (
    <nav className="bg-transparent flex justify-between items-center px-4 pt-2">
      <IonText>
        <h1 className="text-lg p-0 m-0">devFinder</h1>
      </IonText>
      <button className="bg-transparent p-0 m-0 text-3xl" onClick={toggleDarkModeHandler}>
        <IonIcon slot="icon-only" icon={isDark ? moonOutline : sunnyOutline} />
      </button>
    </nav>
  );
};

export default Home;
