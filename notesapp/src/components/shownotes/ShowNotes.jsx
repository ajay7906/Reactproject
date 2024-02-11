import './shownotes.css'
import BackgroundImg from '../../assets/image-removebg-preview 1.png'
import EndToEnd from '../../assets/endtoend.png'
function ShowNotes() {
  return (
    <div className='background'>
      <div className='background-images'>
        <div className="image">
          <img src={BackgroundImg} alt="" />
          <h2>Pocket Notes</h2>
          <p>Send and receive messages without keeping your phone online. 
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className='encryption'>
          <img src={EndToEnd} alt="" />
          <p>end-to-end encrypted</p>
        </div>
      </div>
    </div>
  )
}

export default ShowNotes