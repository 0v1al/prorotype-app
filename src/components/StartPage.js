import { Link } from 'react-router-dom';

import styles from '../styles/StartPage.module.css';

const StartPage = () => {
    return (
        <div className={styles.startPage}>
            <h1 className={styles.startPageHeader}>Shop Assistant</h1>
            <span className={styles.startPageDesc}>Immediately find the list of ingredients for a recipe and its nutritional values</span>
            <Link to="/recipe" className="btnApp">access the app</Link>
        </div >
    )
}

export default StartPage
