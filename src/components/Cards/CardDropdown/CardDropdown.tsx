import { useState } from "react";

// Styles
import { CardDropdownStyle } from "./styles";

// Icons
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

// Interfaces
interface IProps {
  title: string;
  description: string;
}

const CardDropdown: React.FC<IProps> = (props) => {
  const [openCard, setOpenCard] = useState(false);

  return (
    <CardDropdownStyle
      onClick={() => {
        setOpenCard(!openCard);
      }}
    >
      <div className="card__title">
        <h2>{props.title}</h2>
      </div>

      <div
        className={
          openCard
            ? "card__description card__description--active"
            : "card__description"
        }
      >
        <p>{props.description}</p>
      </div>

      <div className="card__button">
        {openCard ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
    </CardDropdownStyle>
  );
};

export default CardDropdown;
