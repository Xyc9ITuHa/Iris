import Link from "next/link";
import LasersMenu from "@/app/components/modules/LaserMenu/LaserMenu";
import styles from "./layout.module.sass";

export default function LaserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <div className={styles.menuContainer}>
                <div className={styles.header}>
                    <h1 className={styles.heading}>Laser Database</h1>
                    <p className={styles.subheading}>Browse our collection of infrared lasers</p>
                </div>

                <div className={styles.menuSection}>
                    <LasersMenu limit={20} />
                </div>
            </div>

            <div className={styles.childrenWrapper}>
                {children}
            </div>
        </div>
    );
}