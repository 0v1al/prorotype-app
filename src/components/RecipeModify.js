import { Navbar, Nav } from 'react-bootstrap';
import defaultImg from '../assets/images/default.jpg';
import { Link } from 'react-router-dom';
import styles from '../styles/RecipeModify.module.css';
import style from '../styles/IngredientsList.module.css';

const RecipeModify = () => {
    return (
        <>
            <div className="container mt-5"><h3 className="text-uppercase mb-4">Modify Recipe</h3></div>
            <div className={[style.ingredientsList, "container"].join(" ")}>
                <Navbar expand="lg" className={["m-0", style.navbarIngredientsList].join(' ')}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="">
                        <Nav.Link href="#home" className="active text-uppercase">Recipe Ingredients</Nav.Link>
                        <Nav.Link href="#link" className="text-uppercase">Nutritional Values</Nav.Link>
                        <Nav.Link href="#link" className="text-uppercase">Average Price/Price Ingredients</Nav.Link>
                        <Nav.Link href="#link" className="text-uppercase">Description</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <button
                            className={["btn btn-sm btn-success mr-2 text-uppercase btnDownload", style.btnDownload].join(" ")}>
                            Save
                        </button>
                        <button
                            className={["btn btn-sm btn-primary mr-2 text-uppercase btnDownload", style.btnDownload].join(" ")}>
                            Download
                        </button>
                        <button
                            className={["btn btn-sm btn-primary text-uppercase btnDownload", style.btnDownload].join(" ")}>
                            Add a new ingredient
                        </button>
                    </Nav>
                </Navbar>
                <ul className={style.ingredients}>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>ingredient 1, 100g</p>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-danger text-uppercase mr-2">Remove</button>
                            <button className="btn btn-sm btn-success text-uppercase">Change Quantity</button>
                        </div>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>ingredient 2, 100g</p>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-danger text-uppercase mr-2">Remove</button>
                            <button className="btn btn-sm btn-success text-uppercase">Change Quantity</button>
                        </div>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>ingredient 3, 100g</p>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-danger text-uppercase mr-2">Remove</button>
                            <button className="btn btn-sm btn-success text-uppercase">Change Quantity</button>
                        </div>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>ingredient 4, 100g</p>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-danger text-uppercase mr-2">Remove</button>
                            <button className="btn btn-sm btn-success text-uppercase">Change Quantity</button>
                        </div>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>ingredient 5, 100g</p>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-danger text-uppercase mr-2">Remove</button>
                            <button className="btn btn-sm btn-success text-uppercase">Change Quantity</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default RecipeModify
