import './style.css'

const character = {
  hairColor: "brown",
  eyeColor: "blue",
  clothesColor: "brown",
  isDead: false,
  coins: 0,
  position: {
      x: 10,
      y: 10,
  },
  move: function(direction) {
      if (direction === 'up') {
          this.position.y -= 5;
      }
      else if (direction === 'down') {
          this.position.y += 5;
      }
      else if (direction === 'left') {
          this.position.x -= 5;
      }
      else if (direction === 'right') {
          this.position.x += 5;
      }
  },
  hasKey: true,
  inventory: ['sword', 'shield', 'hat', 'potion'],
}

const chest = {
  coins: 5,
  isOpen: false,
  isLocked: false,
  position: {
      x: 120,
      y: 50,
  },
  openChest: function() {
     if (character.position === this.position) {
          if (this.isLocked && !character.hasKey) {
              console.log("The chest is locked.");
          } else if (this.isLocked && character.hasKey) {
              console.log("You unlocked the chest with the key!");
          } else {
              this.isOpen = true;
              character.coins += this.coins;
              this.coins = 0;
              console.log("You opened the chest and found " + this.coins + " coins!");
          }
      }
  }
}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

function drawChest () {
  if (!chest.isOpen) {
    ctx.fillStyle = '#6d5e54'; // Chest color
    ctx.fillRect(chest.position.x * 5, chest.position.y * 5, 40, 30); // Draw chest as a rectangle
    ctx.strokeStyle = 'black'; // Outline color
    ctx.strokeRect(chest.position.x * 5, chest.position.y * 5, 40, 30); // Outline the chest
  } else {
      ctx.fillStyle = 'gold'; // Open chest color
      ctx.fillRect(chest.position.x * 5, chest.position.y * 5, 40, 30);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(chest.position.x * 5, chest.position.y * 5, 40, 30);
  }
}

function drawCharacter() {
  ctx.fillStyle = '#ffcc00'; // Character color
  ctx.fillRect(character.position.x * 5, character.position.y * 5, 40, 40); // Draw character as a rectangle
  ctx.strokeStyle = 'black'; // Outline color
  ctx.strokeRect(character.position.x * 5, character.position.y * 5, 40, 40); // Outline the character
  ctx.fillStyle = 'black'; // Eye color
}

drawChest();
drawCharacter();

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
      drawChest();
      drawCharacter();
  });
}

moveCharacter();