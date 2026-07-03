import { useEffect, useState } from 'react';
import MyRecipeComponent from './MyRecipeComponent';
import video from './food.mp4';
import lupe from './lupe.png';
import chef from './chef.png'
import './App.css';

function App() {

  const MY_ID = process.env.REACT_APP_EDAMAM_ID;
  const MY_KEY = process.env.REACT_APP_EDAMAM_KEY;

  const [mySearch, setMySearch] = useState('');
  const [myRecipe, setMyRecipe] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('');

  // Fetch recipes from the Edamam API whenever a new search is submitted
  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipe(data.hits);
    }
  getRecipe()
  }, [wordSubmitted, MY_ID, MY_KEY] )

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  // Prevent page reload on form submit and trigger the search
  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className='chef'>
        <img src={ chef } alt="chef" width='50px' />
        </div>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch} />
        </form>
        <button onClick={finalSearch}> 
          <img src={ lupe } alt="icon" width='25px' height='25px' />
        </button>
      </div>

      {myRecipe.map((element, index) => (
        <MyRecipeComponent key={index}
        label={element.recipe.label}
        image={element.recipe.image}
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        time={element.recipe.totalTime}
        fat={element.recipe.digest[0].total}
        link={element.recipe.url}/>
      ))}
    </div>
  );
}

export default App;