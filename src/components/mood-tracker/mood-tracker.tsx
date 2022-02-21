import { useState } from "react";
import moodContext from "../../context/mood-context";
import { SVGICON } from "../../global/icon";
import { useLocalStorage } from "../../hooks/use-local-storage/use-local-storage";
import MoodCalender from "../calender/mood-calender";
import FacePainter from "../face-painter/face-painter";
import { Modal } from "../modal/modal";
import { SvgIcon } from "../svg-icon/svg-icon";
import "./mood-tracker.scss";
const MoodTracker = () => {
  const [showModal, setShowModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [staticModal, setStaticModal] = useState(false);
  const [data, setData] = useLocalStorage("data", []);

  const showInfoModal = () => {
    setInfoModal(true);
    setShowModal(true);
  };

  const showStaticModal = () => {
    setStaticModal(true);
    setShowModal(true);
  };
  const handleClose = () => {
    setStaticModal(false);
    setInfoModal(false);
    setShowModal(false);
  };
  const providerState = {
    data,
    setData,
  };
  return (
    <>
      <header>
        <SvgIcon
          onClick={showStaticModal}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          style={{ marginRight: "1em" }}
          pathFill="#000"
          d={SVGICON.STATISTICS}
        />
        <h1>Mood Tracker</h1>
        <SvgIcon
          onClick={showInfoModal}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          style={{ marginLeft: "1em" }}
          pathFill="#000"
          d={SVGICON.INFO}
        />
      </header>

      <moodContext.Provider value={providerState}>
        <FacePainter showModal={showModal} handleClose={handleClose} />
        <Modal
          handleClose={handleClose}
          title="Statistics"
          show={showModal && staticModal}
        >
          <MoodCalender />
        </Modal>
        <Modal
          handleClose={handleClose}
          title="About"
          show={showModal && infoModal}
        >
          <div className="info-section">
            <p>
              My life has changed as a result of tracking my daily mood and it
              has helped me become more aware of myself.
            </p>
            <p>
              In order to track my mood every day, I created a mood tracker
              application.
            </p>
            <p>
              You can use this application too and share your experience with
              me. It's open-source, and you are welcome to look at the code and
              report any ideas or bugs.
            </p>
            <p>
              I have some ideas to get this application more useful and
              user-friendly so if you think you can help me contact me.
            </p>
            <p>Feel free to contact me: </p>
            <a href="https://twitter.com/Hanie_Asemi">
              <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                pathFill="#1b70f7"
                d={SVGICON.TWITTER}
              />
            </a>
            <a href="https://github.com/hanieas">
              <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                d={SVGICON.GITHUB}
              />
            </a>
            <a href="https://www.linkedin.com/in/hanie-asemi/">
              <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                pathFill="#5190f5"
                d={SVGICON.LINKEDIN}
              />
            </a>
          </div>
        </Modal>
      </moodContext.Provider>
    </>
  );
};
export default MoodTracker;
