
const RecipeAdd = () => {
    return (
        <div className="mt-5 container d-flex align-items-center justify-content-center flex-column">
            <h3 className="text-uppercase mr-auto">Add Your Own Recipe</h3>
            <form className="w-50 mt-4">
                <div className="form-group">
                    <label>Recipe name</label>
                    <input type="text" className="form-control" placeholder="Recipe name..." />
                </div>
                <div className="form-group">
                    <label>Ingredient 1</label>
                    <input type="text" className="form-control" placeholder="Ingredient 1" />
                </div>
                <div className="form-group">
                    <label>Ingredient 2</label>
                    <input type="text" className="form-control" placeholder="Ingredient 2" />
                </div>
                <div className="form-group">
                    <label>Ingredient 3</label>
                    <input type="text" className="form-control" placeholder="Ingredient 3" />
                </div>
                <button type="submit" class="w-100 btn btn-success text-uppercase">add</button>
            </form>
        </div>
    )
}

export default RecipeAdd
