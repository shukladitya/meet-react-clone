import ListItems from "../ListItems";
import Styles from "./index.module.scss";

let PeopleBar = (props) => {
  return (
    <>
      <div className={Styles.heading}>
        <span>People</span>
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
        <div>
          <span class="material-symbols-outlined">person_add</span>
          <span>Add people</span>
        </div>
        <div className={Styles.inputWrapper}>
          <span class="material-symbols-outlined">search</span>
          <input type="text" className={Styles.inputField}></input>
        </div>
      </div>
      <div className={Styles.footer}>
        <p>In call</p>
        <ListItems
          name="Aditya Shukla"
          avatar="https://cdn.britannica.com/45/197045-050-842A4A43/Mishima-Yukio-1966.jpg"
        />
        <ListItems
          name="Hemanth C"
          avatar="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/800px-SpongeBob_SquarePants_character.svg.png"
        />
        <ListItems
          name="KARTIK"
          avatar="https://i.guim.co.uk/img/media/c8b1d78883dfbe7cd3f112495941ebc0b25d2265/256_0_3840_2304/master/3840.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=579884b0bd058f1350519d3cc586d587"
        />
        <ListItems
          name="Anshu upadhyay"
          avatar="https://media.gq.com/photos/561d292502a8cebe217a4a55/master/pass/Dennis-Stock-James-Dean-cover-sq2.jpg"
        />
        <ListItems
          name="Kumar Anish"
          avatar="https://content.thriveglobal.com/wp-content/uploads/2018/01/Happy_guy.jpg?w=1550"
        />
        <ListItems
          name="Kavitha M S"
          avatar="https://miro.medium.com/max/1400/1*HEoLBLidT2u4mhJ0oiDgig.png"
        />
        <ListItems
          name="Abhinav"
          avatar="https://wp.en.aleteia.org/wp-content/uploads/sites/2/2018/09/web3-happy-people-outside-smile-sun-nature-eduardo-dutra-620857-unsplash.jpg?w=620&h=348&crop=1"
        />
        <ListItems
          name="Adwiti B"
          avatar="https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy.jpeg"
        />
      </div>
    </>
  );
};
export default PeopleBar;
