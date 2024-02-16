import React, { createContext, useContext, useEffect, useState } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const storedSelectedGroup = localStorage.getItem('selectedGroup');
  const storedGroupName = localStorage.getItem('groupName');
  const storedNotes = localStorage.getItem('notes');
  const [selectedGroup, setSelectedGroup] = useState(storedSelectedGroup ? JSON.parse(storedSelectedGroup) : null);
  const [groupName, setGroupName] = useState(storedGroupName ? JSON.parse(storedGroupName) : []);
  const [notes, setNotes] = useState( []);

  
 
  useEffect(() => {
    // Load data from localStorage when the component mounts


    try {
      if (storedSelectedGroup) {
        setSelectedGroup(JSON.parse(storedSelectedGroup));
      }

      if (storedGroupName) {
        setGroupName(JSON.parse(storedGroupName));
      }

      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      // Handle the error, e.g., clear localStorage or provide default values
      console.error('Error parsing JSON from localStorage:', error);
    }
  }, []);



  



  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem('selectedGroup', JSON.stringify(selectedGroup));
    localStorage.setItem('groupName', JSON.stringify(groupName));
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [selectedGroup, groupName,notes ]);

  const groupSelected = (group) => {
    setGroupName((prevGroup) => [...prevGroup, group]);
  };

  const addNote = (group, content) => {
    setNotes((prevNotes) => [...prevNotes, { group, content }]);
  };

  return (
    <ColorContext.Provider value={{ selectedGroup, notes, addNote, setSelectedGroup, groupSelected, groupName }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext };
