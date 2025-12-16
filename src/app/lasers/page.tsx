import IRISIcon from "../components/svg/IRISIcon";
import styles from "./page.module.sass";

export default function LaserPage() {
    return (
        <div className={styles.pageWrap}>
            <IRISIcon className={styles.icon} />
        </div>
    );
}