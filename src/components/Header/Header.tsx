import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobal } from "providers/Global";

// Styles
import { HeaderStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { BiMenu } from "react-icons/bi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Header: React.FC = () => {
  const { setOpenFormModal } = useGlobal();
  const [openMenu, setOpenMenu] = useState(false);
  const currentPage = useLocation();

  return (
    <HeaderStyle>
      <Container className="header__container">
        <div className="header__title">
          <Link
            to="/"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            <img src="/images/logo-aquabit.svg" alt="Logo Aquabit" />
          </Link>
        </div>

        <div className="header__menu">
          <div
            className="header__menu--mobile"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <BiMenu />
          </div>

          <div
            className={
              openMenu
                ? "header__menu--desktop header__mobile__menu--active"
                : "header__menu--desktop"
            }
          >
            <nav>
              <ul>
                <li>
                  <Link
                    className={
                      currentPage.pathname === "/sobre-nos" ? "active-page" : ""
                    }
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    to="/sobre-nos"
                  >
                    Sobre Nós
                  </Link>
                </li>

                <li>
                  <Link
                    className={
                      currentPage.pathname === "/aplicativo"
                        ? "active-page"
                        : ""
                    }
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    to="/aplicativo"
                  >
                    O Aplicativo
                  </Link>
                </li>

                <li>
                  <Link
                    className={
                      currentPage.pathname === "/faq" ? "active-page" : ""
                    }
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    to="/central-de-ajuda"
                  >
                    Central de Ajuda
                  </Link>
                </li>

                <li>
                  <div className="header__buttons--mobile">
                    <div className="header__buttons--login">
                      <a
                        href="https://web.aquabitfarm.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaUserAlt />
                        Entrar
                      </a>
                    </div>

                    <div className="header__buttons--teste-gratis">
                      <button onClick={() => setOpenFormModal(true)}>
                        Teste Gratuito <MdOutlineArrowRightAlt />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="header__buttons">
          <div className="header__buttons--login">
            <a
              href="https://web.aquabitfarm.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaUserAlt />
              Entrar
            </a>
          </div>

          <div className="header__buttons--teste-gratis">
            <button onClick={() => setOpenFormModal(true)}>
              Teste Gratuito <MdOutlineArrowRightAlt />
            </button>
          </div>
        </div>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
