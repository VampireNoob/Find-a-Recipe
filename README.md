<h1 align="center">Find a Recipe React App 👨‍🍳</h1>  
<p align="center">
    A simple Recipe App built using <a href="https://reactjs.org/">React</a>
</p>

![find the recipe](https://github.com/VampireNoob/Find-a-Recipe/assets/128150500/4fdc558f-91bb-4132-b841-b81d90626326)


## This is a super simple Recipe App built using React.js and API.

You can view a live demo of the project here: https://find-the-recipes.netlify.app/

## 🙂 Features:

- 🔎 Work with API
- 🎞️ Video / Image
- 🖼️ Work with SCSS

## A piece of code where we use the "async" function in conjunction with the "fetch" method.
````
useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`Link of API`);
      const data = await response.json();
      setMyRecipe(data.hits);
    }
  getRecipe()
  }, [wordSubmitted] )
````

## Built With

In this section you will find the programming languages ​​/ frameworcs / libraries that I used in this project.

* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/c43e4d15-62e4-4254-a673-c4021fd4cf25" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/e8f0b5ca-935a-45d1-b5c0-419f02ee83d4" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/d1885e0d-bc56-480b-b104-b181b8c82cbf" width="30">
* <img src="https://github.com/VampireNoob/Find-a-Recipe/assets/128150500/55565bce-a0ad-4d0f-8398-d735decd3e62 " width="30">
## Contact
