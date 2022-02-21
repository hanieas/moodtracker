import { SVGICON } from "../../global/icon";
import { SvgIcon } from "../svg-icon/svg-icon";
import { IModalProps } from "./modal-interface";
import "./modal.scss";
export const Modal = (props: IModalProps) => {
  const { handleClose, title, children } = props;
  const showHideClassName = props.show
    ? "overlay display-flex"
    : "overlay display-none";

  return (
    <div className={showHideClassName}>
      <div className="content">
        <header className="modal-header">
          <SvgIcon
            onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            pathFill="#000"
            d={SVGICON.CLOSE}
          />
          <h1 className="modal-title">{title}</h1>
        </header>

        <div className="content-container">{children}</div>
      </div>
    </div>
  );
};
