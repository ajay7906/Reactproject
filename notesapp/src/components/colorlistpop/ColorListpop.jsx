import './colorpopups.css'

function ColorListpop() {
    return (
        <div className="main-popups">
            <div className='relative'>
                <div className="create">
                    <p>Create New group</p>
                </div>
                <div className="group-name">
                    <p>Group Name</p>
                    <input type="text" placeholder='Enter group name'/>
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