import Group from "../group/Group"
import ShowNotes from "../shownotes/ShowNotes"
import './Notes.css'

function Notes() {
  const Name = 'Ajay f'
  return (


    <div className="main-notes">
      <div>
        <Group name={Name} />
      </div>
      <div>
        <ShowNotes />
      </div>
    </div>


  )
}

export default Notes