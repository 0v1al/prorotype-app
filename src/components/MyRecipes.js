import style from '../styles/IngredientsList.module.css';
import { Navbar, Nav } from 'react-bootstrap';

import defaultImg from '../assets/images/default.jpg';
import { Link } from 'react-router-dom';

const MyRecipes = () => {
    return (
        <>
            <div className="container mt-5"><h3 className="text-uppercase mb-4">My Recipes</h3></div>
            <div className={[style.ingredientsList, "container"].join(' ')}>
                <ul className={style.ingredients}>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>recipe 1</p>
                        </div>
                        <Link to="/recipe/custom" className={style.ingredientDetailsBtn}>View Details</Link>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>recipe 2</p>
                        </div>
                        <Link to="/recipe/custom" className={style.ingredientDetailsBtn}>View Details</Link>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>recipe 3</p>
                        </div>
                        <Link to="/recipe/custom" className={style.ingredientDetailsBtn}>View Details</Link>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>recipe 4</p>
                        </div>
                        <Link to="/recipe/custom" className={style.ingredientDetailsBtn}>View Details</Link>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>recipe 5</p>
                        </div>
                        <Link to="/recipe/custom" className={style.ingredientDetailsBtn}>View Details</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MyRecipes
