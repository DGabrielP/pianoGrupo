import { useState } from 'react';

import Do from '../assets/do.mp3';
import Re from '../assets/re.mp3';
import Mi from '../assets/mi.mp3';
import Fa from '../assets/fa.mp3';
import Sol from '../assets/sol.mp3';
import La from '../assets/la.mp3';
import Si from '../assets/si.mp3';

interface Sounds {
  Do: HTMLAudioElement;
  Re: HTMLAudioElement;
  Mi: HTMLAudioElement;
  Fa: HTMLAudioElement;
  Sol: HTMLAudioElement;
  La: HTMLAudioElement;
  Si: HTMLAudioElement;
}

function Piano() {
  
  const [sounds] = useState<Sounds>({
    Do: new Audio(Do),
    Re: new Audio(Re),
    Mi: new Audio(Mi),
    Fa: new Audio(Fa),
    Sol: new Audio(Sol),
    La: new Audio(La),
    Si: new Audio(Si),
  });

  const playNote = (note: keyof Sounds) => {
    const sound = sounds[note];
    if (sound) {
      sound.currentTime = 0; 
      sound.play();
    }
  };

  return (
    <div className="piano">
      <button onClick={() => playNote('Do')}>Do</button>
      <button onClick={() => playNote('Re')}>Re</button>
      <button onClick={() => playNote('Mi')}>Mi</button>
      <button onClick={() => playNote('Fa')}>Fa</button>
      <button onClick={() => playNote('Sol')}>Sol</button>
      <button onClick={() => playNote('La')}>La</button>
      <button onClick={() => playNote('Si')}>Si</button>
    </div>
  );
}

export default Piano;
