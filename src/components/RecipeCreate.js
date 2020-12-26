import React from 'react'

const RecipeCreate = () => {
    return (
        <div className={["container mt-5 d-flex justify-content-center align-items-center flex-column"].join(' ')}>
            <h2 className="mr-auto text-uppercase">Create Recipe</h2>
            <p className="mr-auto mb-5">Create your own recipe, and access it later</p>
            <form className="w-50">
                <div class="form-group">
                    <label for="exampleInputEmail1">Recipe Name:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter recipe name..." />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Recipe Ingredient:</label>
                    <div className="d-flex justify-content-center align-items-center">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter recipe ingredient..." />
                        <span className="btn btn-danger">
                            <i class="fas fa-trash"></i>
                        </span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Recipe Ingredient:</label>
                    <div className="d-flex justify-content-center align-items-center">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter recipe ingredient..." />
                        <span className="btn btn-danger">
                            <i class="fas fa-trash"></i>
                        </span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Recipe Ingredient:</label>
                    <div className="d-flex justify-content-center align-items-center">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter recipe ingredient..." />
                        <span className="btn btn-danger">
                            <i class="fas fa-trash"></i>
                        </span>
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" class="btn btn-success text-uppercase w-50">Create Recipe</button>
                    <button type="submit" class="btn btn-primary text-uppercase w-50">New ingredient</button>
                </div>
            </form>
        </div>
    )
}

export default RecipeCreate
