import { useState, useEffect } from "react";
import { SLIDER } from "../../global/global";
import Slider from "../slider/slider";
import { IFacePainterData, IFacePainterProps } from "./face-painter-interface";
import { useMoodContext } from "../../context/mood-context";
import "./face-painter.scss";

const FacePainter = (props: IFacePainterProps) => {
  var initialLipState: number;
  const { data, setData } = useMoodContext();
  const [loading, setLoading] = useState(false);

  const todaySession = data.find((item: IFacePainterData) => {
    return item.date === new Date().setHours(0, 0, 0, 0);
  });
  if (todaySession) {
    initialLipState = todaySession.lipState;
  } else {
    initialLipState = SLIDER.MID;
  }

  const [lipState, setLipState] = useState<number>(initialLipState);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLipState(parseInt(e.target.value));
  };
  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    const today = new Date().setHours(0, 0, 0, 0);
    const filteredData = data.filter((item: IFacePainterData) => {
      return item.date !== today;
    });
    setData([...filteredData, { date: today, lipState: lipState }]);
  };

  useEffect(() => {
    const initializeCanvas = () => {
      var canvas = document.getElementById("lipConvas") as HTMLCanvasElement;
      var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      var width = 300;
      var height = 150;
      var scale = window.devicePixelRatio;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.scale(scale, scale);
      ctx.beginPath();
      ctx.moveTo(50, 40);
      ctx.quadraticCurveTo(150, lipState, 250, 40);
      ctx.lineWidth = 2;
      ctx.stroke();
    };
    initializeCanvas();
  }, [lipState]);

  return (
    <>
      <div className="face">
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="lips">
          <canvas id="lipConvas"></canvas>
        </div>
      </div>
      <Slider
        lipState={lipState}
        onInput={onInput}
        onSubmit={onSubmit}
        loading={loading}
      />
      
    </>
  );
};
export default FacePainter;
