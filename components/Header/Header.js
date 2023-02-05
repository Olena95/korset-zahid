import Image from "next/image";
import { useRouter } from "next/router";

import MobileMenu from "./MobileMenu";

const Header = () => {
  const router = useRouter();

  console.log(router);
  return (
    <div className="container-fluid">
      <header>
        <div className={`row mb-3 main-header active-background`}>
          <div className={`col-6 col-xs-3 col-md-4 col-lg-3   `}>
            KORSET-ZAHID
          </div>
          <div
            className="col  col-md-1 col-lg-1 main-header__menu-btn"
            onClick={() => router.push("/")}
          >
            Головна
          </div>
          <div
            className="col  col-md-1 col-lg-1 main-header__menu-btn"
            onClick={() => router.push("/methodology")}
          >
            Методологія
          </div>

          <div
            className="col  col-md-2 col-lg-1 main-header__menu-btn"
            onClick={() => router.push("/services")}
          >
            Послуги
          </div>

          <div
            className="col  col-md-2 col-lg-1 main-header__menu-btn"
            onClick={() => router.push("/contacts")}
          >
            Контакти
          </div>

          <div className="col-2 main-header__menuBurger">
            <MobileMenu />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
