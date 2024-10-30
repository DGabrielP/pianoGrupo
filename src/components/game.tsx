import { useState, useEffect } from 'react';
import './game.css';

import Do from '../assets/do.mp3';
import Re from '../assets/re.mp3';
import Mi from '../assets/mi.mp3';
import Fa from '../assets/fa.mp3';
import Sol from '../assets/sol.mp3';
import La from '../assets/la.mp3';
import Si from '../assets/si.mp3';

interface Sounds {
  Do: string;
  Re: string;
  Mi: string;
  Fa: string;
  Sol: string;
  La: string;
  Si: string;
}

function Piano() {
  const [audioContext] = useState(new AudioContext());

  const sounds: Sounds = {
    Do,
    Re,
    Mi,
    Fa,
    Sol,
    La,
    Si,
  };

  const playNote = async (note: keyof Sounds, pitch: number = 1) => {
    const soundFile = sounds[note];
    const response = await fetch(soundFile);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = pitch;
    source.connect(audioContext.destination);
    source.start();
  };

  const keyMap = {
    z: { note: 'Do', pitch: 1 },
    x: { note: 'Re', pitch: 1.12 },
    c: { note: 'Mi', pitch: 1.25 },
    v: { note: 'Fa', pitch: 1.33 },
    b: { note: 'Sol', pitch: 1.5 },
    n: { note: 'La', pitch: 1.68 },
    m: { note: 'Si', pitch: 1.88 },
    r: { note: 'Do', pitch: 2 },
    t: { note: 'Re', pitch: 2.24 },
    y: { note: 'Mi', pitch: 2.5 },
    u: { note: 'Fa', pitch: 2.66 },
    i: { note: 'Sol', pitch: 3 },
    o: { note: 'La', pitch: 3.36 },
    p: { note: 'Si', pitch: 3.76 },
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    if (key in keyMap) {
      const { note, pitch } = keyMap[key as keyof typeof keyMap];
      playNoteWithColorChange(note as keyof Sounds, pitch);
    }
  };

  const playNoteWithColorChange = (note: keyof Sounds, pitch: number) => {
    playNote(note, pitch);

    const button = document.getElementById(`${note}-${pitch}`);
    debugger
    console.log(button)
    if (button) {
      button.classList.add('active');
      setTimeout(() => button.classList.remove('active'), 150); // Cambia color por 150ms
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="piano">
    <div className="teclas">
      {/* Tonos graves */}
      <button id="Do-1" onClick={() => playNoteWithColorChange('Do', 1)}>Do</button>
      <button id="Re-1.12" onClick={() => playNoteWithColorChange('Re', 1.12)}>Re</button>
      <button id="Mi-1.25" onClick={() => playNoteWithColorChange('Mi', 1.25)}>Mi</button>
      <button id="Fa-1.33" onClick={() => playNoteWithColorChange('Fa', 1.33)}>Fa</button>
      <button id="Sol-1.5" onClick={() => playNoteWithColorChange('Sol', 1.5)}>Sol</button>
      <button id="La-1.68" onClick={() => playNoteWithColorChange('La', 1.68)}>La</button>
      <button id="Si-1.88" onClick={() => playNoteWithColorChange('Si', 1.88)}>Si</button>

      {/* Tonos agudos */}
      <button id="Do-2" onClick={() => playNoteWithColorChange('Do', 2)}>Do</button>
      <button id="Re-2.24" onClick={() => playNoteWithColorChange('Re', 2.24)}>Re</button>
      <button id="Mi-2.5" onClick={() => playNoteWithColorChange('Mi', 2.5)}>Mi</button>
      <button id="Fa-2.66" onClick={() => playNoteWithColorChange('Fa', 2.66)}>Fa</button>
      <button id="Sol-3" onClick={() => playNoteWithColorChange('Sol', 3)}>Sol</button>
      <button id="La-3.36" onClick={() => playNoteWithColorChange('La', 3.36)}>La</button>
      <button id="Si-3.76" onClick={() => playNoteWithColorChange('Si', 3.76)}>Si</button>
    </div>
    </div>
  );
}

export default Piano;
