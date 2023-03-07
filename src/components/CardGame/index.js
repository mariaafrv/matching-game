import "./style.css"

function CardGame(icon = "zoom", alt = "Icone de lupa") {
    
    let card = /*html*/ `
    <article class="card-game">
        <img src= "images/${icon}.png" class="card-logo" alt="${alt}">
    </article>
`
  return card
}

export default CardGame;