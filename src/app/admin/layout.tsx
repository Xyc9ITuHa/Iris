import React from 'react';
import styles from './admin.module.sass';
import IRISIcon from '../components/svg/IRISIcon';

export const metadata = {
    title: 'Admin Dashboard - Laser Management',
    description: 'Manage laser database with CRUD operations'
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.adminLayout}>
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <div className={styles.logoContainer}>
                        <IRISIcon className={styles.logoicon} />
                        <h1 className={styles.logo}>IRIS</h1>
                    </div>

                    <div className={styles.navLinks}>
                        <a href="/lasers" className={styles.navLink}>Home</a>
                        <a href="/admin" className={styles.navLink}>Dashboard</a>
                    </div>
                </div>
            </nav>
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
