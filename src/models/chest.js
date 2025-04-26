export default class Chest {
    constructor(coins, isOpen, isLocked, position) {
        this.coins = coins;
        this.isOpen = isOpen;
        this.isLocked = isLocked;
        this.position = position;
    }
    
    openChest() {
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

     drawChest (ctx) {
        if (!this.isOpen) {
          ctx.fillStyle = '#6d5e54'; // Chest color
          ctx.fillRect(this.position.x * 5, this.position.y * 5, 40, 30); // Draw chest as a rectangle
          ctx.strokeStyle = 'black'; // Outline color
          ctx.strokeRect(this.position.x * 5, this.position.y * 5, 40, 30); // Outline the chest
        } else {
            ctx.fillStyle = 'gold'; // Open chest color
            ctx.fillRect(this.position.x * 5, this.position.y * 5, 40, 30);
            ctx.strokeStyle = 'black';
            ctx.strokeRect(this.position.x * 5, this.position.y * 5, 40, 30);
        }
      }
}