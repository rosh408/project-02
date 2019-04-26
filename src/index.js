import './styles/game.css';
import Game from './partials/Game';

// create a game instance
const game = new Game('game', 1212, 625);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
