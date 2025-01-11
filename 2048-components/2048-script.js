import './2048-game.js';
import './2048-tile.js';



document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('game-root');
    
    // Create the game component and add it to the root
    const game = document.createElement('game-2048');
    root.appendChild(game);
  
    console.log("Game initialized!");
});