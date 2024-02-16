import { useContext, useEffect, useLayoutEffect, useState } from "react"
import Group from "../group/Group"
import GroupNotes from "../groupnotes/GroupNotes"
import ShowNotes from "../shownotes/ShowNotes"
import './Notes.css'
import { ColorContext } from "../../context/ColorContext"

function Notes() {

  const { selectedGroup } = useContext(ColorContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showGroup, setShowGroup] = useState('none');
  const [showNotes, setShowNotes] = useState('block');

  const handleGroupClick = () => {

    setShowGroup('none');
    setShowNotes('block');
    // setIsMobile(false);
  };

  const handleBackClick = () => {
    setShowGroup('block');

    setShowNotes('none');
  };



  useEffect(() => {

    const handleResize = () => {

      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (


    <div className="main-notes">
      {/*display: selectedGroup!==null && windowWidth <= 768
      display:selectedGroup===null && windowWidth <= 768

       */}


      {
        windowWidth <= 780 ?
          <>
            <div className="group-css" style={{ display: selectedGroup !== null && windowWidth <= 780 ? `${showGroup}` : `${showNotes}` }}>
              <Group handleGroupClick={handleGroupClick} />
            </div>

            <div className="shownotesdata" style={{ display: selectedGroup === null && windowWidth <= 780 ? `${showGroup}` : `${showNotes}` }}>
              {
                selectedGroup === null ? <ShowNotes /> : <GroupNotes handleBackClick={handleBackClick} />
              }


            </div>
          </> :
          <>

            <div className="group-css">
              <Group handleGroupClick={handleGroupClick} />
            </div>

            <div className="shownotesdata">
              {
                selectedGroup === null ? <ShowNotes /> : <GroupNotes handleBackClick={handleBackClick} />
              }


            </div>


          </>

      }
    </div>


  )
}

export default Notes