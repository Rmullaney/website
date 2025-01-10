import 'website/2048-components/2048-game';
import 'website/2048-components/2048-grid';
import 'website/2048-components/2048-tile';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('game-root');
    
    // Create the game component and add it to the root
    const game = document.createElement('2048-game');
    root.appendChild(game);
  
    console.log("Game initialized!");
});