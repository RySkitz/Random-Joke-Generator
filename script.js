const jokeContainer = document.getElementById("Box__Joke");
const generateJoke = document.getElementById("Box__Button");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
generateJoke.addEventListener("click",getJoke);
getJoke(); 
