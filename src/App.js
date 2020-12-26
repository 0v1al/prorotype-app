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
import Register from './components/Register';
import Login from './components/Login';
import RecipeCreate from './components/RecipeCreate';

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
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/recipe/create" component={RecipeCreate} exact />
        </Switch>
      </main>
      <Route path="/" component={Footer} />
    </Router>
  );
}

export default App;
