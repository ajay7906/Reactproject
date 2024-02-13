
import { useContext, useState } from 'react';
import ColorListpop from '../colorlistpop/ColorListpop';
import './group.css'
import { ColorContext } from '../../context/ColorContext';
function Group({ name }) {
    const { groupName } = useContext(ColorContext);


    //console.log(groupName);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    //handle on click button
    const handleButtonClick = () => {
        setIsPopupOpen(true)
    }
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    const nameParts = name.split(' ');

    // Get the first letter of the first name and the first letter of the last name
    const initials =
        nameParts.length >= 2
            ? nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase()
            : name.charAt(0).toUpperCase();
    return (
        <div className='main'>
            <h2>Pocket Notes</h2>
            <div className="group-info-container">
                <div className='group-info'>
                    {
                        groupName.map((group, index) => (
                            <div key={index} className="groups">
                                <p style={{ background: `${group.color}` }} className="short">{initials}</p>
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