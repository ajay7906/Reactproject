{/* import React, { createContext, useState } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const setSelected = (color) => {
    setSelectedColor(color);
  };

  return (
    <ColorContext.Provider value={{ selectedColor, setSelected }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext }; 












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