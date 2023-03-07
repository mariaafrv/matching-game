import "./style.css"
import CardGame from "../../../components/CardGame";

function BoardGame(amountOfCards) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountOfCards);

    return /*html*/ `
    <section class="board-game"> 
    ${$htmlContent}
    </section>
    `
}

export default BoardGame;