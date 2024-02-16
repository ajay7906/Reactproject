
import { useContext, useState } from 'react';
import ColorListpop from '../colorlistpop/ColorListpop';
import './group.css'
import { ColorContext } from '../../context/ColorContext';
function Group({ handleGroupClick }) {
    const { groupName, setSelectedGroup, selectedGroup } = useContext(ColorContext);


   
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    //handle on click button
    const handleButtonClick = () => {
        setIsPopupOpen(true)
    }
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
   
    // Get the first letter of the first name and the first letter of the last name
  
    return (
        <div className='main'>
            <h2>Pocket Notes</h2>
            <div className="group-info-container">
                <div className='group-info'>
                    {
                        groupName.map((group, index) => (
                            <div key={index} className="groupss" onClick={()=> {setSelectedGroup(group); handleGroupClick()}} >
                                <p style={{ background: `${group.color}` }} className="short">{group.short}</p>
                                <p>{group.name}</p>
                            </div>

                        ))
                    }

                </div>
            </div>
            <div className='addgroup'>
                <p onClick={handleButtonClick}>+</p>

            </div>
            <ColorListpop isOpen={isPopupOpen} onClose={handleClosePopup} />

        </div>
    )
}

export default Group