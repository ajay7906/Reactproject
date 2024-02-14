 import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();



const ColorProvider = ({ children }) => {
   const [selectedGroup, setSelectedGroup] = useState(null);
  const [groupName, setGroupName] = useState([]);
  const [notes, setNotes] = useState([]);
  
  const groupSelected = (group) =>{
    setGroupName((prevGroup) =>[...prevGroup, group])
  }
  const addNote = (group, content) => {
    setNotes((prevNotes) => [...prevNotes, { group, content }]);
  };

  return (
    <ColorContext.Provider value={{ selectedGroup, notes,addNote, setSelectedGroup, groupSelected, groupName }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext }; 



{/*








import React, { useContext } from 'react';
import { ColorContext } from './context/ColorContext';

const colors = ['red', 'blue', 'green', 'yellow'];

const Color = () => {
  const { setSelected } = useContext(ColorContext);

  return (
    <div>
      {colors.map((color) => (
        <button key={color} onClick={() => setSelected(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};

export default Color;   















import  { useContext } from 'react';
import { ColorContext } from './context/ColorContext';

const DisplayColor = () => {
  const { selectedColor } = useContext(ColorContext);

  return (
    <div>
      {selectedColor && (
        <div style={{ backgroundColor: selectedColor, width: '100px', height: '100px' }}>
          Selected Color: {selectedColor}
        </div>
      )}
    </div>
  );
};

export default DisplayColor;




*/

}