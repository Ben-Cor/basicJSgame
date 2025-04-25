import './style.css'

const character = {
  hairColor: "brown",
  eyeColor: "blue",
  clothesColor: "brown",
  isDead: false,
  coins: 0,
  position: {
      x: 0,
      y: 0,
  },
  move: function(direction) {
      if (direction === 'up') {
          this.position.y += 1;
      }
      else if (direction === 'down') {
          this.position.y -= 1;
      }
      else if (direction === 'left') {
          this.position.x -= 1;
      }
      else if (direction === 'right') {
          this.position.x += 1;
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
      x: 10,
      y: 5,
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