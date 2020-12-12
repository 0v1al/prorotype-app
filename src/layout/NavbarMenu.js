import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/NavbarMenu.module.css';

const NavbarMenu = () => {
  return (
    <Navbar expand="lg" fixed="top" className={["px-5 py-3", styles.navbarColor].join(' ')}>
      <Navbar.Brand className={["text-uppercase", styles.navbarBrand].join(" ")}>Shop Assistant</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
      <Nav className="ml-auto">
        <Link to="/recipe" className={styles.navLink}>Recipes</Link>
        <Link to="/recipes/custom" className={styles.navLink}>Custom Recipes</Link>
        {/* <Link to="/recipes/my" className={styles.navLink}>My Recipes</Link> */}
        <Link to="/recipes/history" className={styles.navLink}>History</Link>
      </Nav>
      {/* </Navbar.Collapse>  */}
    </Navbar>
  );
}

export default NavbarMenu;
