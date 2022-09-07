import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, recipesSelector } from './slices/recipes';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const { recipes } = useSelector(recipesSelector)

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])

  console.log('Recipes: ', recipes);
  
  return (
    <div className="App">
      <section>
        <h1>Recipes</h1>
        <div className='content'>
          {
            recipes.map((recipe, index) =>
              <div key={index}>
                <h2>{recipe.title}</h2>
              </div>
            )
          }
        </div>
      </section>
    </div>
  );
}

export default App;
