import Styles from "./index.module.scss";
let Chatbar = (props) => {
  return (
    <div className={Styles.scaffold}>
      <div className={Styles.heading}>
        <span>In-call messages</span>
        <span
          className={"material-symbols-outlined " + Styles.closeBtn}
          onClick={() => {
            props.splitHandler();
          }}
        >
          close
        </span>
      </div>
      <p className={Styles.info}>
        Messages can be seen only by people in the call and are deleted when the
        call ends
      </p>
      <div className={Styles.messages}>
        <div>
          <span>
            <span>Aditya Shukla</span>
            <p>22:00</p>
          </span>
          <p>Hello It is the last section.</p>
        </div>
        <div>
          <span>
            <span>Hemanth C</span>
            <p>22:05</p>
          </span>
          <p>Great! we can play PUBG now</p>
        </div>
        <div>
          <span>
            <span>Abhinav</span>
            <p>22:05</p>
          </span>
          <p>Lets go and watch rocketry!</p>
        </div>
      </div>
      <div className={Styles.inputWrapper}>
        <input
          type="text"
          className={Styles.inputField}
          placeholder="Send a message to everyone"
        ></input>
        <span class="material-symbols-outlined">send</span>
      </div>
    </div>
  );
};
export default Chatbar;
