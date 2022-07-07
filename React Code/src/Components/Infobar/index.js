import Styles from "./index.module.scss";

let InfoBar = (props) => {
  return (
    <>
      <div className={Styles.heading}>
        <span>Meeting details</span>
        <span
          className={"material-symbols-outlined " + Styles.closeBtn}
          onClick={() => {
            props.splitHandler();
          }}
        >
          close
        </span>
      </div>
      <div className={Styles.mainSection}>
        <p>Joinig info</p>
        <p>https://meet.google.com/abc-def-ghi</p>
        <div>
          <span class="material-symbols-outlined">content_copy</span>
          <span>Copy joining info</span>
        </div>
      </div>
      <div className={Styles.footer}>
        Google Calender attachments will be shown here
      </div>
    </>
  );
};
export default InfoBar;
