import "./TarorCard.css";
import "./MajorArcana.json";

function TarotCard(title, description, image) {
  return (
    <div className="tarot-card">
      <div className="tarot-image">{image}</div>
      <div className="tarot-title">
        <h3>{title}</h3>
      </div>
      <div className="tarot-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TarotCard;
