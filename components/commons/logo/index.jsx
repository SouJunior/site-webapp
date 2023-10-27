import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link href="/" passHref>
      <Image
        className={styles.logo}
        src="/assets/icons/Logo.svg"
        alt="logo SouJunior"
        width={216}
        height={33}
      />
    </Link>
  );
}
