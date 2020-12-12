import { Navbar, Nav } from 'react-bootstrap';

import styles from '../styles/NavbarMenu.module.css';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.footerText}>
                    Copyright &copy; {currentYear}, Shop Assistant. All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
