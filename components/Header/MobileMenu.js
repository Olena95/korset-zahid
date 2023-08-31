import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
const MobileMenu = () => {
    const router = useRouter();
    const [isMenuOpen, setMenuOpen] = useState();

    useEffect(() => {
        if (isMenuOpen) {
            setMenuOpen(!isMenuOpen);
        }
    }, [router.asPath]);
    const viberGroup =
        "https://invite.viber.com/?g2=AQBTNn249om6Vk%2BnMl71CgzcLPXBYNOJX7FHdkkZ2OGx5dMKkJlX5leFyOm2Hx6p";
    return (
        <div className="menuToggle ">
            <input
                type="checkbox"
                onChange={(e) => setMenuOpen(e.target.checked)}
                checked={isMenuOpen}
            />

            <span className="burger-icon"></span>
            <span className="burger-icon"></span>
            <span className="burger-icon"></span>

            <ul className="menu custom-shadow">
                <Link href="/">
                    <li> Головна</li>
                </Link>
                <Link href="/methodology">
                    <li>Методологія</li>
                </Link>

                <Link href="/services">
                    <li>Послуги</li>
                </Link>

                <Link href="/contacts">
                    <li>Контакти</li>
                </Link>
                <Link href={viberGroup} target="_blank">
                    <li>
                        <Image
                            src="/images/icons/viber.png"
                            width={32}
                            height={32}
                            alt="viber"
                        />
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default MobileMenu;
