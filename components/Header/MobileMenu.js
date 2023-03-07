import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState();

  useEffect(() => {
    if (isMenuOpen) {
      setMenuOpen(!isMenuOpen);
    }
  }, [router.asPath]);

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
      </ul>
    </div>
  );
};

export default MobileMenu;
