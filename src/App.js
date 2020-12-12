import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavbarMenu from './layout/NavbarMenu';
import Footer from './layout/Footer';
import StartPage from './components/StartPage';
import Recipe from './components/Recipe';
import IngredientDetails from './components/IngredientDetails';
import CustomRecipes from './components/CustomRecipes';
import CustomRecipe from './components/CustomRecipe';
import RecipeModify from './components/RecipeModify';
import History from './components/History';
import RecipeAdd from './components/RecipeAdd';
import MyRecipes from './components/MyRecipes';

import './App.css';

const App = () => {
  return (
    <Router>
      <Route path="/" component={NavbarMenu} />
      <main className="customContainer">
        <Switch>
          <Route path="/" component={StartPage} exact />
          <Route path="/recipe" component={Recipe} exact />
          <Route path="/ingredient" component={IngredientDetails} exact />
          <Route path="/recipes/custom" component={CustomRecipes} exact />
          <Route path="/recipe/custom" component={CustomRecipe} exact />
          <Route path="/recipe/modify" component={RecipeModify} exact />
          <Route path="/recipes/history" component={History} exact />
          <Route path="/recipe/add" component={RecipeAdd} exact />
          <Route path="/recipes/my" component={MyRecipes} exact />
        </Switch>
      </main>
      <Route path="/" component={Footer} />
    </Router>
  );
}

export default App;
