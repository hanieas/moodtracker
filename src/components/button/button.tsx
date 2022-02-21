import { IButton } from "./button-interface";
import './button.scss'
export const Button = (props: IButton) => {
  const { onSubmit, loading } = props;
  return (
    <button className="submit-button" onClick={onSubmit} disabled={loading}>
      {loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            margin: "auto",
            background: "none",
            display: "block",
            shapeRendering: "auto",
          }}
          width="34px"
          height="34px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="9"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1.25s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
        </svg>
      ) : (
        <span>Submit</span>
      )}
    </button>
  );
};
