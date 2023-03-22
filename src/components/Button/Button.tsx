// Styles
import { ButtonStyle } from "./styles";

// Icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// Interfaces
interface IProps {
  title: string;
  outline?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ title, outline, onClick }: IProps) => {
  return (
    <ButtonStyle>
      <button className={outline ? "oulined-button" : ""} onClick={onClick}>
        {title}
        <MdOutlineKeyboardArrowRight />
      </button>
    </ButtonStyle>
  );
};

export default Button;
