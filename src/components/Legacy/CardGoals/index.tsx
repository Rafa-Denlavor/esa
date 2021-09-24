import './CardGoals.scss';

export function CardGoals(props: CardGoalsProps) {
  return (
    <div className="cardGoals">
      <img src={props.url} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

type CardGoalsProps = {
  url : string,
  alt : string,
  title : string,
  text : string
}


