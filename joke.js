let button =document.querySelector("button");
let para=document.querySelector("p");
async function joke() {
    let joke=await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
    let json=await joke.json();
    console.log(json);
    if(json.type==="single")
     {
        para.textContent=json.joke;
     }
     else if(json.type==="twopart")
        {
            para.textContent = `${json.setup} - ${json.delivery}`;

        }   
}
button.addEventListener("click",joke);


