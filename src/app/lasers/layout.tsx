import LaserMenuWrapper from "@/app/components/modules/LaserMenu/LaserMenuWrapper";
import CommandInput from "../components/modules/LaserMenu/parts/IRISqa/CommandInput";
import styles from "./layout.module.sass";
import IRISIcon from "../components/svg/IRISIcon";

export default async function LaserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.wrapper}>
            <CommandInput />
            <div className={styles.container}>
                <div className={styles.menuContainer}>
                    <div className={styles.header}>
                        <a href="/admin/">
                            <div className={styles.logoContainer}>
                                <IRISIcon className={styles.logoicon} />
                                <h1 className={styles.logo}>IRIS</h1>
                            </div>
                        </a>
                    </div>

                    <div className={styles.menuSection}>
                        <LaserMenuWrapper />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}