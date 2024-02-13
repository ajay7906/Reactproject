import { useContext, useEffect, useRef, useState } from 'react';
import './colorpopups.css';
import { ColorContext } from '../../context/ColorContext';

function ColorListpop({ isOpen, onClose }) {
    const { groupSelected } = useContext(ColorContext);
    const [groupName, setGroupName] = useState('');
    const [currentId, setCurrentId] = useState(0);
    const [selectedColor, setSelectedColor] = useState();
    const colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];

    const modalRef = useRef();
  
    const handleCreateGroup = (e) => {
        e.preventDefault();
        const newGroup = {
            name: groupName,
            color: selectedColor,
            id:currentId
        };
        console.log(currentId);
        setCurrentId(currentId + 1);
        console.log(newGroup);
        groupSelected(newGroup);
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
