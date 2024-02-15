import { useContext, useState } from "react"
import './groupnotes.css'
import SendButton from '../../assets/send.png'
import Enable from '../../assets/enable.png'
import { ColorContext } from "../../context/ColorContext";
import Back from '../../assets/back.png'
function GroupNotes({ handleBackClick }) {
  const { groupName, selectedGroup, addNote, notes } = useContext(ColorContext);
  console.log(selectedGroup);
  const [inputValue, setInputValue] = useState('');
  const [contentList, setContentList] = useState([]);

  //time and date
  const getCurrentTime = () => {
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return now.toLocaleString('en-US', options);
  };


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };




  const handleSendClick = () => {

    if (inputValue.trim() !== '') {
      const timestamp = getCurrentTime();

      addNote(selectedGroup, { content: inputValue, time:timestamp })
      setContentList([]); // Clear the content list

      setInputValue(''); // Clear the input after sending
    }
  };

  // Filter notes based on the selected group
  const filteredNotes = notes.filter((note) => note?.group === selectedGroup);
  const dataCheck = filteredNotes.map((note, index) => {
    return note.content;
  })
 console.log(dataCheck);

  return (
    <div className="main-part">
      <div className="top-part">

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
              <p key={index}>{note.content.content} <br /> * {note.content.time}</p>
            ))
          }
        </div>
      </div>
      <div className="input-notes">
        {  /*  <img src={SendButton} onClick={handleSendClick} alt="" />  */}
        {inputValue.trim() ? (
          <img src={Enable} alt="" onClick={handleSendClick} />
        ) : (
          <img src={SendButton} alt="" /* Provide a disabled send button image */ />
        )}
        <textarea
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