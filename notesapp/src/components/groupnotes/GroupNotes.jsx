import { useContext, useState } from "react"
import './groupnotes.css'
import SendButton from '../../assets/send.png'
import { ColorContext } from "../../context/ColorContext";
import Back from '../../assets/back.png'
function GroupNotes({handleBackClick}) {
  const { groupName, selectedGroup, addNote, notes } = useContext(ColorContext);
  console.log(selectedGroup);
  const [inputValue, setInputValue] = useState('');
  const [contentList, setContentList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
 

  const handleSendClick = () => {
     
    if (inputValue.trim() !== '') {
      addNote(selectedGroup, inputValue)
      setContentList([]); // Clear the content list
     // setContentList((prevContentList) => [...prevContentList, inputValue]);
      setInputValue(''); // Clear the input after sending
    }
  };

  // Filter notes based on the selected group
  const filteredNotes = notes.filter((note) => note?.group === selectedGroup);
  console.log(filteredNotes);

  return (
    <div className="main-part">
      <div className="top-part">
        {/*
          groupName.map((group, index) => (
            <div key={index} className="groups">
              <p style={{ background: `${group.color}` }} className="short">{group.short}</p>
              <p>{group.name}</p>
            </div>


          )) */

        }
        <div className="back">
          <img src={Back} alt="" onClick={handleBackClick} />
        </div>
        <div className="groups">
          <p style={{ background: `${selectedGroup?.color}` }} className="short">{selectedGroup?.short}</p>
          <p>{selectedGroup?.name}</p>

        </div>


      </div>
      <div className="all-content">

        <div className="content-data">
          {
            filteredNotes.map((note, index) => (
              <p key={index}>{note.content}</p>
            ))
          }
        </div>
      </div>
      <div className="input-notes">
        <img src={SendButton} onClick={handleSendClick} alt="" />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Your Text Here"
        />
      </div>

    </div>
  )
}

export default GroupNotes