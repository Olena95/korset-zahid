import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const router = useRouter();

    const viberGroup =
        "https://invite.viber.com/?g2=AQBTNn249om6Vk%2BnMl71CgzcLPXBYNOJX7FHdkkZ2OGx5dMKkJlX5leFyOm2Hx6p";

    const instagram =
        "https://www.instagram.com/korset_zakhid_lviv?igsh=MTUxemNuZzFveWdhbQ==";
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
                    <div className="col  col-md-2 col-lg-1 main-header__menu-icons">
                        <Link href={viberGroup} target="_blank">
                            <Image
                                src="/images/icons/viber.png"
                                width={32}
                                height={32}
                                alt="viber"
                            />
                        </Link>
                        <Link href={instagram} target="_blank">
                            <Image
                                src="/images/icons/instagram.png"
                                width={32}
                                height={32}
                                alt="viber"
                            />
                        </Link>
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
