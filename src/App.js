// immer an den import denken sämtlicher sachen die wir hier brauchen
import { useEffect, useState } from 'react';
import MyRecipeComponent from './MyRecipeComponent';
import video from './food.mp4';
import lupe from './lupe.png';
import chef from './chef.png'
import './App.css';

function App() {

// die zwei sachen finden wir bei unserer API adresse unter den jeweiligen namen "id" und "key"
  const MY_ID = "6109b51a";
  const MY_KEY = "b2312c56eb1afeeb5dc6dc21523f646d";

  const [mySearch, setMySearch] = useState(''); // das ist für das eingabefeld um zu sehen was der user eingibt und immer mit "" in den () damit das feld leer ist zum start 
  const [myRecipe, setMyRecipe] = useState([]); // das ist für das objekt bzw. für die abbildung der rezepte und da setzen wir immer leere [] ind die ()
  const [wordSubmitted, setWordSubmitted] = useState('');  //das ist für die abfrage durch betätigen des enterknopfes und mit "" in den () bleibt die seite am anfang leer

// konstante für die asynchrone abfrage der rezepte bei API durch verwendung von "await" und "fetch" und unsere "ID" und "KEY" von oberen konstanten
  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipe(data.hits); //veränderter zustand der rezepte was abgebildet wird nach der eingabe
      // console.log(data.hits) dadurch krigen wir zugang bei "console" für die sachen die wir brauchen
      console.log(data.hits)
    }
  getRecipe() // hier rufen wir die asynchrone abfrage auf
  }, [wordSubmitted] ) // damit rufen wir seite bei null auf, nur in verbindung mit API bei "q"

// konstante um zugriff zum eingabefeld zu kriegen
  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
    // console.log(e.target.value) können wir kontrolieren ob alles abgebildet wir was wir eingeben in "console"
  }

// konstante um das neuladen der seite zu verhindern
  const finalSearch = (e) => {
    e.preventDefault() //damit verhindern wir das die seite sich immer wieder neu lädt bei betätigen des "enter" knopfes
    setWordSubmitted(mySearch) // veränderter zustand um das zu bestättigen was im eigabefeld steht damit es abgebldet wird
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

{/* dieser block ist für den input und den knopf zuständig */}
      <div className='container'>
{/* das attribut "onSubmit" ist für die taste "enter" zuständig, in verbindung mit der methode(funktion)
"finalSearch" verhindern wir das die seite bei jedem buchstaben die abfrage an API schickt */}
        <form onSubmit={finalSearch}>
{/* in dieser zeile schreiben den ausgangszustand des suchfeldes/eingabefeld "value"
mit dem attribut "onChange" kriegen wir zugang zu dem was der user im eingabefeld eingibt und gleichen
es verändertem zustand durch eine methode(funktion) in dem fall "myRecipeSearch" */}
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch} />
        </form>
{/* diese methode(funktion) ist für den knopf zuständig, damit er funktioniert */}
        <button onClick={finalSearch}> 
          <img src={ lupe } alt="icon" width='25px' height='25px' />
        </button>
      </div>

      {/* <div className='container'>
        <button onClick={finalSearch}>
          <img src={lupe} alt="icon" width='25px' height='25px' />
        </button>
      </div> */}

{/* dieser block ist für das abbilden der rezepte zuständig incl. bilder usw. */}
{/* mit der methode "map" kriegen wir zugang zu jedem element aus der API in verbindung mit dem ausgangszustand "myRcipe" */}
      {myRecipe.map((element, index) => (
        <MyRecipeComponent key={index} // ist die neue komponente mit dem einzigartigem schlüßel
        label={element.recipe.label} //die ganzen sachen die wir brauchen, kriegen wir über (console.log(data.hits)) raus
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

// https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=6109b51a&app_key=b2312c56eb1afeeb5dc6dc21523f646d