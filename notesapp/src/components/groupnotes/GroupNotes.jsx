import { useContext, useState } from "react"
import './groupnotes.css'
import SendButton from '../../assets/send.png'
import { ColorContext } from "../../context/ColorContext";
function GroupNotes() {
  const { groupName, selectedGroup, addNote } = useContext(ColorContext);
  console.log(selectedGroup);
  const [inputValue, setInputValue] = useState('');
  const [contentList, setContentList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    console.log(selectedGroup);
    if (inputValue.trim() !== '') {
      addNote(groupName, contentList)
      setContentList((prevContentList) => [...prevContentList, inputValue]);
      setInputValue(''); // Clear the input after sending
    }
  };



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
        <div className="groups">
          <p style={{ background: `${selectedGroup?.color}` }} className="short">{selectedGroup?.short}</p>
          <p>{selectedGroup?.name}</p>

        </div>


      </div>
      <div className="all-content">

        <div className="content-data">
          {
            contentList.map((content, index) => (
              <p key={index}>{content}</p>
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