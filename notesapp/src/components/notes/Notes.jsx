import Group from "../group/Group"
import GroupNotes from "../groupnotes/GroupNotes"
import ShowNotes from "../shownotes/ShowNotes"
import './Notes.css'

function Notes() {
  const Name = 'Ajay f'
  return (


    <div className="main-notes">
      <div className="group-css">
        <Group name={Name} />
      </div>
      <div className="shownotesdata">
        {/*<ShowNotes />*/}
        <GroupNotes/>
      </div>
    </div>


  )
}

export default Notes