import { useState } from "react";
import Buttons from "../Buttons";
import Styles from "./index.module.scss";

let PeopleCard = (props) => {
  const [showExtraBtn, setShowExtraBtn] = useState("none");
  return (
    <div
      className={Styles.card}
      onMouseEnter={() => {
        setShowExtraBtn("block");
      }}
      onMouseLeave={() => {
        setShowExtraBtn("none");
      }}
    >
      <span className={"material-symbols-outlined " + Styles.micIcon}>
        mic_off
      </span>
      <span
        style={{
          backgroundImage: `url(${props.avatar})`,
        }}
        className={Styles.avatar}
      ></span>
      <span className={Styles.nameLabel}>{props.name}</span>
      <span className={Styles.btnSet} style={{ display: showExtraBtn }}>
        <Buttons
          onCode="push_pin"
          offCode="push_pin"
          onColor="#030304d3"
          offColor="transparent"
          biggerIcon={true}
          fieldStyle={false}
          message="Pin to screen"
          shift="-1rem"
        />
        <Buttons
          onCode="mic_off"
          offCode="mic_off"
          onColor="#030304d3"
          offColor="transparent"
          biggerIcon={true}
          fieldStyle={false}
          message="Mic off"
          shift="-1rem"
        />
        <Buttons
          onCode="do_not_disturb_on"
          offCode="do_not_disturb_on"
          onColor="#030304d3"
          offColor="transparent"
          biggerIcon={true}
          fieldStyle={false}
          message="remove"
          shift="-1rem"
        />
      </span>
    </div>
  );
};
export default PeopleCard;
