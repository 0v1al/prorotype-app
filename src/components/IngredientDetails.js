import style from '../styles/IngredientDetails.module.css';
import defaultImg from '../assets/images/default.jpg';

const IngredientDetails = () => {
    return (
        <div className={["container", style.ingredientDetailsContainer].join(' ')}>
            <div className={style.ingredientsDetails}>
                <img className="responsive w-100" src={defaultImg} alt="ingredient-img" />
                <div className={style.ingredientDetails}>
                    <h3 className="text-uppercase mb-4">Ingredient Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet nisl condimentum mauris semper rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum lacinia erat sem, in venenatis est porta at. Aenean vulputate ornare risus, a elementum enim porta quis. Proin sed ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean tempus erat in tempus finibus. Nulla at justo quis erat tempus molestie. Etiam ex leo, molestie laoreet tristique quis, ultricies at sem. Suspendisse placerat consectetur elementum. Pellentesque vitae cursus velit. </p>
                    <div className="input-group mt-2">
                        <label className="input-group-text">Serving Size</label>
                        <select className="custom-select">
                            <option>100g</option>
                            <option>200g</option>
                            <option>300g</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={style.ingredientNutritionalValues}>
                <h3 className="text-uppercase mb-4">Nutritional Values</h3>
                <h6 className="text-uppercase">Vitamins</h6>
                <table class="table table-sm table-hover table-bordered shadow-sm table-light bordered mb-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Vitamin A</td>
                            <td>5.7mg</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Vitamin B</td>
                            <td>5.7mg</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Vitamin C</td>
                            <td>5.7mg</td>
                            <td>1%</td>
                        </tr>
                    </tbody>
                </table>
                <h6 className="text-uppercase">Minerals</h6>
                <table class="table table-sm table-hover table-bordered shadow-sm table-light bordered mb-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Calcium</td>
                            <td>5.7mg</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Iron</td>
                            <td>5.7mg</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Magnesium</td>
                            <td>5.7mg</td>
                            <td>1%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-5">
                <h3 className="text-uppercase">Caloric Ratio</h3>
            </div>
        </div>
    )
}

export default IngredientDetails
