// nicht vergessen das bild zu importieren
import check from './check.png'

// in die klammern ({werden die "props" eingegeben}) die wir aus der App.js nehmen
function MyRecipeComponent({label, image, ingredients, calories, time, fat, link}) {
    return (<div>
        <div className='box'>
        <div className="container">
            <h2>{label}</h2>
        </div>

        <div className="container">
{/* um fotos abzubilden verwenden wir einen "prop" und setzen den in den tag "img" */}
            <img className='pic' src={image} alt="dish" />
        </div>

        <div className="container">
            <h3>Ingredients</h3>
        </div>

        <ul className="container list">
{/* hier wird index als ein einzigartiger schlüßel verwendet */}
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    <img src={check} alt="check" width='20px' className='icon' /> {ingredient}</li>
            ))}
        </ul>

        <hr className='horizOne'/>

        <div className="container-info">
            <div className='haupt-cont'>
            <div className='cont'>
                <span>Cal</span>
            </div>
            <div className='cont'>
                <p>{calories.toFixed()}</p>{/* mit "toFixed()" diese schreibweise runden wir die zahlen bis zum komma ab, wenn
wenn wir eine zahl in die () reinschreiben, so werden uns dann soviele zahlen nach dem komma abgebildet */}
            </div>
            </div>

            <hr className='vert' />

            <div className='haupt-cont'>
            <div className='cont'>
                <span>Min</span>
            </div>
            <div className='cont'>
                <p>{ time } min</p>
            </div>
            </div>

            <hr className='vert' />

            <div className='haupt-cont'>
            <div className='cont'>
                <span>Fat</span>
            </div>
            <div className='cont'>
                <p>{ fat.toFixed() } g</p>
            </div>
            </div>
        </div>

        <hr className='horizTwo' />

        <div className='container'>
            <a href={link} target='blank'>Link to the Recipe</a>
        </div>
        </div>
    </div>
    );
}

export default MyRecipeComponent;