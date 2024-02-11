import { useEffect, useRef } from 'react';
import './colorpopups.css'

function ColorListpop({ isOpen, onClose }) {

    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                console.log(modalRef.current.contains(event.target));
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
        <div className={`main-popups ${isOpen ? 'open' : ''}`} ref={modalRef}>
            <div className='relative'>
                <div className="create">
                    <p>Create New group</p>
                </div>
                <div className="group-name">
                    <p>Group Name</p>
                    <input type="text" placeholder='Enter group name' />
                </div>
                <div className="choose-color">
                    <p>Choose colour</p>
                    <div className='list-color'>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className='button'>
                    <button>Create</button>
                </div>
            </div>

        </div>
    )
}

export default ColorListpop