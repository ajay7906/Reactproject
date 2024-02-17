import { useContext, useEffect, useState } from "react"
import './groupnotes.css'
import SendButton from '../../assets/send.png'
import Enable from '../../assets/enable.png'
import { ColorContext } from "../../context/ColorContext";
import Back from '../../assets/back.png'
function GroupNotes({ handleBackClick }) {
  const { groupName, selectedGroup, addNote, notes } = useContext(ColorContext);
 
  const [inputValue, setInputValue] = useState('');
 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 

 

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

      addNote(selectedGroup, { content: inputValue, time: timestamp })
     // setContentList([]); // Clear the content list

      setInputValue(''); // Clear the input after sending
    }
  };

  // Filter notes based on the selected group
 
  const filteredNotess = notes.filter((note) => note?.group.id === selectedGroup.id);
 
 


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main-part">
      <div className="top-part">

      {windowWidth <= 780 && (
          <div className="back" style={{cursor:'pointer'}}>
            <img src={Back} alt="" onClick={handleBackClick} />
          </div>
        )}
        <div className="groups" style={{color:'#fff'}}>
          <p style={{ background: `${selectedGroup?.color}` }} className="short">{selectedGroup?.short}</p>
          <p >{selectedGroup?.name}</p>

        </div>

      </div>
      <div className="all-content">

        <div className="content-data">
          {
            filteredNotess.map((note, index) => (
              <>
                <p style={{paddingBottom:'25px', fontSize:'15px'}} key={index}>{note.content.content} <span style={{fontSize:'12px', float:'right', marginTop:'6px'}}>{note.content.time}</span> </p>
                
              </>
            ))
          }
        </div>
      </div>
      <div className="input-notes">
      
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