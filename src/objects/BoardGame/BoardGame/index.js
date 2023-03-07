import "./style.css"
import CardFrontBack from "../../../components/CardFrontBack";

function BoardGame(amountOfCards) {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountOfCards);

    return /*html*/ `
    <section class="board-game"> 
        ${$htmlContent}
    </section>
    `
}

export default BoardGame;