// Styles
import { CardAboutStyle } from "./styles";

// Interfaces
interface IProps {
  title: string;
  text: string;
  colorSecondary?: boolean;
  proposito?: boolean;
}

const CardAbout: React.FC<IProps> = (props) => {
  return (
    <CardAboutStyle>
      <div
        className={
          props.colorSecondary
            ? "card__image card__image--not-default"
            : "card__image"
        }
      >
        <h2 className={props.proposito ? "card__image__proposito" : ""}>
          {props.title}
        </h2>
      </div>

      <div className="card__text">
        <p>{props.text}</p>
      </div>
    </CardAboutStyle>
  );
};

export default CardAbout;
