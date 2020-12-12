import { useState } from 'react'
import style from '../styles/Recipe.module.css';
import IngredientsList from './IngredientsList';
import { Link } from 'react-router-dom';

const Recipe = () => {
    const [recipeName, setRecipeName] = useState("");
    const [loading, setLoading] = useState(true);
    const [numberServings, setNumberServings] = useState(null);
    const [error, setError] = useState('');
    const [notFound, setNotFound] = useState(false);

    const handleListIngredientsRecipe = e => {
        e.preventDefault();
        setError('');
        setNotFound(false);
        setLoading(true);

        if (!recipeName.trim()) {
            setError('The recipe name field must be completed');
        } else if (numberServings <= 0) {
            setError('The number of servings must be equal or greater than 1');
        }

        if (recipeName === '404') {
            setNotFound(true);
        }

        setLoading(false);
    }

    return (
        <div className={["container mt-5 d-flex justify-content-center align-items-center flex-column", style.recipeContainer].join(' ')}>
            <h2 className="mr-auto text-uppercase">recipe ingredients list</h2>
            <p className="mr-auto mb-5">Find the list of ingredients for a certain recipe</p>
            <form className="mt-5 w-50">
                <div className="form-group">
                    <label>Recipe name:</label>
                    <input type="text" className="form-control" onChange={e => setRecipeName(e.target.value)} placeholder="Enter the recipe name...    " />
                </div>
                <div className="form-group">
                    <label>Number of servings:</label>
                    <input type="number" className="form-control" onChange={e => setNumberServings(e.target.value)} placeholder="Enter the number of servings...    " />
                </div>
                <div className="form-group">
                    <label className="mb-2">Search by certain criteria:</label>
                    <br></br>
                    <div class="form-check-inline mr-4">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Nutrients
                    </label>
                    </div>
                    <div class="form-check-inline mr-4">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Calories
                    </label>
                    </div>
                    <div class="form-check-inline mr-4">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Diet
                    </label>
                    </div>
                    <div class="form-check-inline mr-4">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Health
                    </label>
                    </div>
                </div>

                <input type="submit" className="btn btn-success w-100 text-uppercase" onClick={handleListIngredientsRecipe} value="search" />
            </form>
            {!loading && !notFound && !error && <IngredientsList />}
            {
                !loading && notFound &&
                <span className="alert alert-danger mt-4 w-50 shadow-sm font-weight-bold mb-0">
                    The recipe you searched for doesn't exist.
                    Add your own recipe from <Link to="recipe/add" className="text-uppercase">here</Link>
                </span>
            }
            {
                !loading && error &&
                <span className="alert alert-danger mt-4 w-50 shadow-sm font-weight-bold">{error}</span>
            }
        </div >
    )
}

export default Recipe;
