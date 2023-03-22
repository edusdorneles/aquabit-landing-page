import { useGlobal } from "providers/Global";

// Styles
import { StoreModalStyle } from "./styles";

// Icons
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const StoreModal: React.FC = () => {
  const { openStoreModal, setOpenStoreModal } = useGlobal();

  return (
    <StoreModalStyle
      className={openStoreModal ? "store-modal__container--active" : ""}
    >
      <div className="store-modal__content">
        <div className="store-modal__title">
          <h2>O Aquabit está disponíel nas seguintes plataformas:</h2>
        </div>

        <div className="store-modal__buttons">
          <a
            href="https://apps.apple.com/br/app/aquabit/id1491215734?l=en"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpenStoreModal(false)}
          >
            <FaApple />
            Disponível na App Store
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.aquabitapp.aquabitApp.cadernoDeManejo&pli=1"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpenStoreModal(false)}
          >
            <FaGooglePlay />
            Disponível na Google Play
          </a>
        </div>

        <div className="store-modal__close">
          <AiOutlineClose onClick={() => setOpenStoreModal(false)} />
        </div>
      </div>
    </StoreModalStyle>
  );
};

export default StoreModal;
