import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/ `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("britney-fly", "Icone Britney Spears comissária")}
        </article>
    `
}

export default CardFrontBack;