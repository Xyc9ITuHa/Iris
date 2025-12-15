import LaserMenuWrapper from "@/app/components/modules/LaserMenu/LaserMenuWrapper";
import CommandInput from "../components/modules/LaserMenu/parts/IRISqa/CommandInput";
import styles from "./layout.module.sass";

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
                        <h1 className={styles.heading}>Laser Database</h1>
                        <p className={styles.subheading}>Browse our collection of infrared lasers</p>
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