import { useContext, useEffect, useRef, useState } from 'react';
import './colorpopups.css';
import { ColorContext } from '../../context/ColorContext';
import { v4 as uuidv4 } from 'uuid';

function ColorListpop({ isOpen, onClose }) {
    const { groupSelected } = useContext(ColorContext);
    const uniqueId = uuidv4();
    const [groupName, setGroupName] = useState('');
    const [currentId, setCurrentId] = useState(0);
    const [selectedColor, setSelectedColor] = useState();
    const colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];
    const nameParts = groupName.split(' ');
    const initials =
        nameParts.length >= 2
            ? nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase()
            : groupName.charAt(0).toUpperCase();

    const modalRef = useRef();
    console.log(uniqueId);
    const handleCreateGroup = (e) => {
        e.preventDefault();
        const newGroup = {
            name: groupName,
            color: selectedColor,
            id: uniqueId,
            short: initials

        };

        setCurrentId(currentId + 1);

        groupSelected(newGroup);
        setGroupName('')
        onClose();
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

  

    return (
        <div className={`main-popups ${isOpen ? 'open' : ''}`}>
            <div className='relative' ref={modalRef}>
           
                <div className="create">
                    <p>Create New group</p>
                </div>
                <div className="group-name">
                    <p>Group Name</p>
                    <input type="text" value={groupName} placeholder='Enter group name' onChange={(e) => setGroupName(e.target.value)} />
                </div>
                <div className="choose-color">
                    <p>Choose colour</p>
                    <div className='list-color'>
                        <ul>
                            {colors.map((color) => (
                                <li key={color} onClick={() => setSelectedColor(color)} style={{ background: `${color}` }}></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='button'>
                    <button onClick={handleCreateGroup}>Create</button>
                </div>
            </div>
        </div>
    );
}

export default ColorListpop;
