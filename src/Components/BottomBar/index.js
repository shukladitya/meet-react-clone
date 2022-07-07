import Buttons from "../Buttons";
import Styles from "./index.module.scss";
let BottomBar = (props) => {
  let currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <>
      <div className={Styles.bottomBar}>
        <span className={Styles.dateSection}>
          {currentTime} <span className={Styles.divider}></span>abc-def-ghi
        </span>
        <span className={Styles.primaryButtons}>
          <Buttons
            offCode="&#xe02b;"
            onCode="&#xe029;"
            onColor="#3D4143"
            offColor="#EB4334"
            fieldStyle={false}
            message="Turn on microphone (CTRL + D)"
            shift="-4rem"
          />
          <Buttons
            offCode="videocam_off"
            onCode="videocam"
            onColor="#3D4143"
            offColor="#EB4334"
            fieldStyle={false}
            message="Turn on camera (CTRL + E)"
            shift="-4rem"
          />
          <Buttons
            onCode="closed_caption"
            offCode="closed_caption"
            onColor="#8BB5F8"
            offColor="#3D4143"
            biggerIcon={true}
            fieldStyle={false}
            message="Turn on captions (c)"
            shift="-2rem"
          />
          <Buttons
            onCode="present_to_all"
            offCode="present_to_all"
            onColor="#3D4143"
            offColor="#3D4143"
            biggerIcon={true}
            fieldStyle={false}
            message="Present now"
            shift="-1rem"
          />
          <Buttons
            onCode="more_vert"
            offCode="more_vert"
            onColor="#3D4143"
            offColor="#3D4143"
            biggerIcon={true}
            fieldStyle={false}
            message="More options"
            shift="-1rem"
          />
          <Buttons
            onCode="call_end"
            offCode="call_end"
            onColor="#EB4334"
            offColor="#EB4334"
            biggerIcon={true}
            fieldStyle={true}
            message="Leave call"
          />
        </span>
        <span className={Styles.secondaryButtons}>
          <Buttons
            currentSection={props.currentSection}
            setCurrentSection={props.setCurrentSection}
            section={1}
            clickHandler={props.handleSplitter}
            offCode="info"
            onCode="info"
            onColor="#8BB5F8"
            offColor="transparent"
            biggerIcon={true}
            fieldStyle={false}
            message="Meeting details"
            shift="-2rem"
          />
          <Buttons
            currentSection={props.currentSection}
            setCurrentSection={props.setCurrentSection}
            section={2}
            clickHandler={props.handleSplitter}
            offCode="group"
            onCode="group"
            onColor="#8BB5F8"
            offColor="transparent"
            biggerIcon={true}
            fieldStyle={false}
            message="Show everyone"
            shift="-2rem"
          />
          <Buttons
            currentSection={props.currentSection}
            setCurrentSection={props.setCurrentSection}
            section={3}
            clickHandler={props.handleSplitter}
            onCode="chat"
            offCode="chat"
            onColor="#8BB5F8"
            offColor="transparent"
            biggerIcon={true}
            fieldStyle={false}
            message="Chat with everyone"
            shift="-2.5rem"
          />
          <Buttons
            onCode="category"
            offCode="category"
            onColor="#8BB5F8"
            offColor="transparent"
            biggerIcon={true}
            fieldStyle={false}
            message="Activities"
            shift="-1rem"
          />
          <Buttons
            onCode="lock_person"
            offCode="lock_person"
            onColor="#8BB5F8"
            offColor="transparent"
            biggerIcon={true}
            fieldStyle={false}
            message="Host Controls"
            shift="-3rem"
          />
        </span>
        <span className={`material-symbols-outlined ` + Styles.moreBtn}>
          expand_less
        </span>
      </div>
    </>
  );
};
export default BottomBar;
