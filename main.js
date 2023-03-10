import "./src/styles/settings/colors.css"
import "./src/styles/generics/reset.css"
import "./src/styles/elements/base.css"

import BoardGame from "./src/objects/BoardGame/BoardGame";
import ScoreBoard from "./src/objects/BoardGame/ScoreBoard";


const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
  ${ScoreBoard()}
  ${BoardGame(2)}
  `
  );