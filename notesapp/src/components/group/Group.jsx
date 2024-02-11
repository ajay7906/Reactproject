
import ColorListpop from '../colorlistpop/ColorListpop';
import './group.css'
function Group({ name }) {
    const nameParts = name.split(' ');

    // Get the first letter of the first name and the first letter of the last name
    const initials =
        nameParts.length >= 2
            ? nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase()
            : name.charAt(0).toUpperCase();
    return (
        <div className='main'>
           <h2>Pocket Notes</h2>
            <div className='group-info'>
                <div className="groups">
                    <p className="short">{initials}</p>
                    <p>My Notes</p>
                </div>
                <div className="groups">
                    <p className="short">{initials}</p>
                    <p>My Notes</p>
                </div>
                <div className="groups">
                    <p className="short">{initials}</p>
                    <p>My Notes</p>
                </div>
            </div>
            <div className='addgroup'>
                <p>+</p>
                
            </div>
            <ColorListpop/>

        </div>
    )
}

export default Group