import { useEffect, useState } from "react";
import Styles from "./index.module.scss";
let Buttons = (props) => {
  const [toggleButton, setToggleButton] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  let messageElement;
  let buttonElement;

  useEffect(() => {
    messageElement = document.querySelector(".messageElement");
    buttonElement = document.querySelector(".buttonElement");
  }, []);

  let clickHandler = () => {
    setToggleButton((prev) => !prev);
    props.clickHandler();
    if (props.section) {
      props.setCurrentSection(props.section);
    }
  };
  return (
    <span
      className={Styles.everythingButton}
      onMouseEnter={() => {
        setShowMessage(true);
      }}
      onMouseLeave={() => {
        setShowMessage(false);
      }}
    >
      <span
        className={`${Styles.message} messageElement`}
        style={{
          display: showMessage ? "block" : "none",
          left: props.shift,
        }}
      >
        {props.message}
      </span>
      <span
        onClick={clickHandler}
        className={
          "material-symbols-outlined" +
          ` ${Styles.button} ${Styles.ripple} buttonElement`
        }
        style={{
          backgroundColor: toggleButton ? props.onColor : props.offColor,
          fontSize: props.biggerIcon ? "1.5rem" : "1.2rem",
          padding: props.biggerIcon
            ? `0.6rem ${props.fieldStyle ? "1.5rem" : "0.6rem"}`
            : `0.7rem ${props.fieldStyle ? "1.2rem" : "0.7rem"}`,
        }}
      >
        {toggleButton ? props.onCode : props.offCode}
      </span>
    </span>
  );
};
export default Buttons;
