import React from 'react';

const Tecla = ({ note, onClick }) => {
  return (
    <div 
      className="tecla"
      onClick={() => onClick(note)}
      style={{
        width: '40px',
        height: '150px',
        margin: '2px',
        backgroundColor: note.includes('#') ? 'black' : 'white',
        color: note.includes('#') ? 'white' : 'black',
      }}
    >
      {note}
    </div>
  );
};

export default Tecla;
