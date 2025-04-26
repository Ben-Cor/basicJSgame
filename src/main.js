import './style.css'
import Chest from './models/chest';
import character from './models/character';

// Create a new chest object
const chest1 = new Chest(5, false, false, { x: 120, y: 50 });

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;


function drawCharacter() {
  ctx.fillStyle = '#ffcc00'; // Character color
  ctx.fillRect(character.position.x * 5, character.position.y * 5, 40, 40); // Draw character as a rectangle
  ctx.strokeStyle = 'black'; // Outline color
  ctx.strokeRect(character.position.x * 5, character.position.y * 5, 40, 40); // Outline the character
  ctx.fillStyle = 'black'; // Eye color
}

drawCharacter();
chest1.drawChest(ctx);

function moveCharacter(direction) {
  document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') {
          character.move('up');
      } else if (event.key === 'ArrowDown') {
          character.move('down');
      } else if (event.key === 'ArrowLeft') {
          character.move('left');
      } else if (event.key === 'ArrowRight') {
          character.move('right');
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      chest1.drawChest(ctx);
      drawCharacter();
  });
}

moveCharacter();