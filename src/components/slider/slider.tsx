import { SLIDER } from "../../global/global";
import { Button } from "../button/button";
import { ISlider } from "./slider-interface";
import "./slider.scss";
const Slider = (props: ISlider) => {
  const { lipState, onInput, onSubmit, loading } = props;

  return (
    <>
      <input
        type="range"
        min={SLIDER.MIN}
        max={SLIDER.MAX}
        value={lipState}
        className="slider"
        onInput={onInput}
      />
      <Button loading={loading} onSubmit={onSubmit} />
    </>
  );
};
export default Slider;
