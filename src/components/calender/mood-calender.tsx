import Calendar from "react-calendar";
import { FACE_STATE } from "../../global/global";
import { IFacePainterData } from "../face-painter/face-painter-interface";
import { useMoodContext } from "../../context/mood-context";
import "./mood-calender.scss";
import "react-calendar/dist/Calendar.css";
export const MoodCalender = () => {
  const { data } = useMoodContext()
  return (
    <Calendar
      tileContent={({ activeStartDate, date, view }) => {
        const findedData: IFacePainterData | undefined = data.find(
          (item: IFacePainterData) => {
            return (
              new Date(item.date).getUTCDate() === date.getUTCDate() &&
              date.getMonth() === new Date(item.date).getMonth()
            );
          }
        );
        if (view === "month" && findedData) {
          const state = findedData.lipState;
          if (state < FACE_STATE.MAX_MISERABLE) {
            return <span>😔</span>;
          } else if (
            state > FACE_STATE.MIN_SAD &&
            state <= FACE_STATE.MAX_SAD
          ) {
            return <span>☹️</span>;
          } else if (
            state > FACE_STATE.MIN_DEPRESSED &&
            state <= FACE_STATE.MAX_DEPRESSED
          ) {
            return <span>🙁</span>;
          } else if (
            state > FACE_STATE.MIN_CALM &&
            state <= FACE_STATE.MAX_CALM
          ) {
            return <span>😐</span>;
          } else if (
            state > FACE_STATE.MIN_SMILING &&
            state <= FACE_STATE.MAX_SMILING
          ) {
            return <span>🙂</span>;
          } else if (
            state > FACE_STATE.MIN_HAPPY &&
            state <= FACE_STATE.MAX_HAPPY
          ) {
            return <span>😊</span>;
          } else {
            return <span>😍</span>;
          }
        } else {
          return null;
        }
      }}
    />
  );
};

export default MoodCalender;
