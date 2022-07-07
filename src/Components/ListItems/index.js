import Buttons from "../Buttons";
import Styles from "./index.module.scss";

let ListItems = (props) => {
  return (
    <>
      <div className={Styles.listItems}>
        <div>
          <div
            style={{
              backgroundImage: `url(${props.avatar})`,
            }}
            className={Styles.avatar}
          ></div>
          <p>{props.name}</p>
        </div>
        <div className={Styles.buttonSet}>
          <Buttons
            offCode="&#xe02b;"
            onCode="&#xe029;"
            onColor="lightgrey"
            offColor="lightgrey"
            fieldStyle={false}
            message="Turn on microphone"
            shift="-4rem"
          />
          <div></div>
          <Buttons
            offCode="push_pin"
            onCode="push_pin"
            onColor="lightgrey"
            offColor="lightgrey"
            fieldStyle={false}
            message="Pin to screen"
            shift="-4rem"
          />
        </div>
      </div>
    </>
  );
};

export default ListItems;
