export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card--container">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={process.env.PUBLIC_URL + `/images/${props.item.coverImg}`}
      ></img>
      <div className="card--stats">
        <img src={process.env.PUBLIC_URL + './images/star.png'} ></img>
        <p>
          <span>{props.item.stats.rating}</span> ({props.item.stats.reviewCount}
          ) &#183; {props.item.location}
        </p>
      </div>
      <p className="card--heading">{props.item.title}</p>
      <p className="card--price">
        <span>From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
