import styleClasses from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <li className={styleClasses.item}>
      <Card>
        <div className={styleClasses.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styleClasses.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styleClasses.actions}>
          <button>Add to Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
