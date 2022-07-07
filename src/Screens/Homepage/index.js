import { useState } from "react";
import BottomBar from "../../Components/BottomBar";
import Chatbar from "../../Components/Chatbar";
import InfoBar from "../../Components/Infobar";
import PeopleBar from "../../Components/PeopleBar";
import PeopleCard from "../../Components/PeopleCard";
import Styles from "./index.module.scss";

let HomePage = () => {
  const [splitScreen, setSplitScreen] = useState(false);
  const [openedSection, setOpenedSection] = useState(1);
  let handleSplitter = () => {
    setSplitScreen((prev) => !prev);
  };
  return (
    <>
      <div className={Styles.scaffold}>
        <div className={Styles.splitter}>
          <div className={Styles.peopleHolder}>
            <PeopleCard
              name="Aditya Shukla"
              avatar="https://cdn.britannica.com/45/197045-050-842A4A43/Mishima-Yukio-1966.jpg"
            />
            <PeopleCard
              name="Hemanth C"
              avatar="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/800px-SpongeBob_SquarePants_character.svg.png"
            />
            <PeopleCard
              name="KARTIK"
              avatar="https://i.guim.co.uk/img/media/c8b1d78883dfbe7cd3f112495941ebc0b25d2265/256_0_3840_2304/master/3840.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=579884b0bd058f1350519d3cc586d587"
            />
            <PeopleCard
              name="Anshu upadhyay"
              avatar="https://media.gq.com/photos/561d292502a8cebe217a4a55/master/pass/Dennis-Stock-James-Dean-cover-sq2.jpg"
            />
            <PeopleCard
              name="Kumar Anish"
              avatar="https://content.thriveglobal.com/wp-content/uploads/2018/01/Happy_guy.jpg?w=1550"
            />
            <PeopleCard
              name="Kavitha M S"
              avatar="https://miro.medium.com/max/1400/1*HEoLBLidT2u4mhJ0oiDgig.png"
            />
            <PeopleCard
              name="Abhinav"
              avatar="https://wp.en.aleteia.org/wp-content/uploads/sites/2/2018/09/web3-happy-people-outside-smile-sun-nature-eduardo-dutra-620857-unsplash.jpg?w=620&h=348&crop=1"
            />
            <PeopleCard
              name="Adwiti B"
              avatar="https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy.jpeg"
            />
          </div>
          <div
            className={Styles.panelHolder}
            style={{
              width: splitScreen ? "35%" : "0%",
              marginLeft: splitScreen ? "1rem" : "0",
              transition: "all 0.5s",
            }}
          >
            {splitScreen && openedSection === 1 ? (
              <InfoBar splitHandler={handleSplitter} />
            ) : openedSection === 2 ? (
              <PeopleBar splitHandler={handleSplitter} />
            ) : (
              <Chatbar splitHandler={handleSplitter} />
            )}
          </div>
        </div>
        <BottomBar handleSplitter={handleSplitter} currentSecton={openedSection} setCurrentSection={setOpenedSection}/>
      </div>
    </>
  );
};
export default HomePage;
