import style from '../styles/IngredientsList.module.css';
import { Navbar, Nav } from 'react-bootstrap';

import defaultImg from '../assets/images/default.jpg';
import { Link } from 'react-router-dom';

const IngredientsList = () => {
    return (
        <div className={style.ingredientsList}>
            <Navbar expand="lg" className={["m-0", style.navbarIngredientsList].join(' ')}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="">
                    <Nav.Link href="#home" className="active text-uppercase">Recipe Ingredients</Nav.Link>
                    <Nav.Link href="#link" className="text-uppercase">Nutritional Values</Nav.Link>
                    <Nav.Link href="#link" className="text-uppercase">Average Price/Price Ingredients</Nav.Link>
                    <Nav.Link href="#link" className="text-uppercase">Description</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Link
                        to="recipe/modify"
                        className={["btn btn-sm mr-2 btn-success text-uppercase btnDownload", style.btnDownload].join(" ")}>
                        Modify
                    </Link>
                    {/* <button
                        className={["btn btn-sm btn-success mr-2 text-uppercase btnDownload", style.btnDownload].join(" ")}>
                        Save
                    </button> */}
                    <button
                        className={["btn btn-sm btn-success mr-2 text-uppercase btnDownload", style.btnDownload].join(" ")}>
                        Save to History
                    </button>
                    <button
                        className={["btn btn-sm btn-primary text-uppercase btnDownload", style.btnDownload].join(" ")}>
                        Download
                    </button>
                </Nav>
            </Navbar>
            <ul className={style.ingredients}>
                <li className={style.ingredient}>
                    <div className="d-flex flex-row align-items-center">
                        <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                        <p className={style.ingredientName}>ingredient 1, 100g</p>
                    </div>
                    <Link to="/ingredient" className={style.ingredientDetailsBtn}>View Details</Link>
                </li>
                <li className={style.ingredient}>
                    <div className="d-flex flex-row align-items-center">
                        <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                        <p className={style.ingredientName}>ingredient 2, 100g</p>
                    </div>
                    <Link to="/ingredient" className={style.ingredientDetailsBtn}>View Details</Link>
                </li>
                <li className={style.ingredient}>
                    <div className="d-flex flex-row align-items-center">
                        <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                        <p className={style.ingredientName}>ingredient 3, 100g</p>
                    </div>
                    <Link to="/ingredient" className={style.ingredientDetailsBtn}>View Details</Link>
                </li>
                <li className={style.ingredient}>
                    <div className="d-flex flex-row align-items-center">
                        <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                        <p className={style.ingredientName}>ingredient 4, 100g</p>
                    </div>
                    <Link to="/ingredient" className={style.ingredientDetailsBtn}>View Details</Link>
                </li>
                <li className={style.ingredient}>
                    <div className="d-flex flex-row align-items-center">
                        <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                        <p className={style.ingredientName}>ingredient 5, 100g</p>
                    </div>
                    <Link to="/ingredient" className={style.ingredientDetailsBtn}>View Details</Link>
                </li>
            </ul>
        </div>
    )
}

export default IngredientsList
