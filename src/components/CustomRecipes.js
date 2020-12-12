import style from '../styles/IngredientsList.module.css';
import defaultImg from '../assets/images/default.jpg';
import { Link } from 'react-router-dom';

const CustomRecipes = () => {
    return (
        <>
            <div className="container mt-5"><h3 className="text-uppercase mb-4">Custom Recipes</h3></div>
            <div className={[style.ingredientsList, "container"].join(' ')}>
                <ul className={style.ingredients}>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>custom recipe 1</p>
                        </div>
                        <Link to="/recipe/custom" className={style.ingredientDetailsBtn}>View Details</Link>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>custom recipe 2</p>
                        </div>
                        <Link to="/recipe/custom" className={style.ingredientDetailsBtn}>View Details</Link>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>custom recipe 3</p>
                        </div>
                        <Link to="/recipe/custom" className={style.ingredientDetailsBtn}>View Details</Link>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>custom recipe 4</p>
                        </div>
                        <Link to="/recipe/custom" className={style.ingredientDetailsBtn}>View Details</Link>
                    </li>
                    <li className={style.ingredient}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={defaultImg} alt="ingredient-image" className={style.ingredientImage} />
                            <p className={style.ingredientName}>custom recipe 5</p>
                        </div>
                        <Link to="/recipe/custom" className={style.ingredientDetailsBtn}>View Details</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CustomRecipes;
