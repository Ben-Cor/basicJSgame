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
    const step = 3; // Movement step size
    const characterSize = 40; // Character size in pixels

    if (direction === 'up' && this.position.y > 0) {
        this.position.y -= step;
    } else if (direction === 'down' && this.position.y < 110) {
        this.position.y += step;
    } else if (direction === 'left' && this.position.x > 0) {
        this.position.x -= step;
    } else if (direction === 'right' && this.position.x < 150) {
        this.position.x += step;
    }
  },
  hasKey: true,
  inventory: ['sword', 'shield', 'hat', 'potion'],
}

export default character;