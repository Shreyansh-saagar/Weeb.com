const navtoggle = document.querySelector("#navbarToggler")
const menu = document.querySelector("#navigation")
navtoggle.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
})



// DOM 

function search(){

    let searchName = document.getElementById("searchAnime").value;

    if(searchName === ""){
        alert("Please Search by anime name")
    }
    else{

        //API request
        
        let animeName = document.getElementById("animeName")
        let characterName = document.getElementById("Character")
        let words = document.getElementById("quote")
        let p =  fetch(`https://animechan.xyz/api/random/anime?title=${searchName}`, { method: "GET", mode: 'cors'})
        p.then((response) => {
            console.log(response.status)
            console.log(response.ok)
            console.log(response.headers)
            return response.json()
        }).then((q) => {
            animeName.innerHTML = q.anime
            characterName.innerHTML = q.character
            words.innerHTML = q.quote
            }
        )
    }
}


//anime quote
/* let p =  fetch("https://animechan.xyz/api/random/anime?title=naruto", { method: "GET", mode: 'cors'})
    p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((quote) => console.log(quote)) */

        