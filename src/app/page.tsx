import Image from "next/image";
import styles from "./page.module.css";
import Game from "./app";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Game dimension={6} />
      </main>
      <footer className={styles.footer}>
        Tic Tac Toe        
      </footer>
    </div>
  );
}
