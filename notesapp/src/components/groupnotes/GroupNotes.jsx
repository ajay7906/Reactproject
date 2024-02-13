import { useState } from "react"
import './groupnotes.css'
import SendButton from '../../assets/send.png'

function GroupNotes() {
  const [inputValue, setInputValue] = useState('');
  const [contentList, setContentList] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== '') {
      setContentList((prevContentList) => [...prevContentList, inputValue]);
      setInputValue(''); // Clear the input after sending
    }
  };

  return (
    <div className="main-part">
      <div className="top-part">
        <p>AB</p>
        <p>My Notes</p>
        
      </div>
      <div className="all-content">
        <div className="content-data">
          {
            contentList.map((content, index) =>(
              <p  key={index}>{content}</p>
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