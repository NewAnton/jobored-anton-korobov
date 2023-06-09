import styles from "./Header.module.scss";

import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href="/">
          <Image
            className={styles.logoImg}
            src="/logo.svg"
            width={30}
            height={30}
            alt="site logo"
          />
          <h1 className={styles.logoTitle}>Jobored</h1>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                className={
                  router.pathname === "/vacancies" ? styles.activeLink : ""
                }
                href="/vacancies"
              >
                Поиск вакансиий
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={
                  router.pathname === "/favorites" ? styles.activeLink : ""
                }
                href="/favorites"
              >
                Избранное
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
