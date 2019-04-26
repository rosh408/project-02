import { SVG_NS } from "../settings";

export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 50;
      this.score = 0;
    //   this.color = "red";

      document.addEventListener("keydown", event => {
        switch (event.key) {
            case up:
              this.up();
              break;
            case down:
              this.down();
              break;
          }
      });

      //arrow functions dont have a this context, thatg means this is still refering to the object that we 
      // make when wed say const player! = new Paddle();

    }
    //..
    up() {
        // get the max number...
        // either 0 or the y position minus speed
        // current y position of the paddle - 10px every time the game loop is running
        this.y = Math.max( 0, this.y - this.speed );
      }
    
      down() {
        // get the min number...
        // either the height of the board minus the height of the paddle
        // or the y position plus the speed
        this.y = Math.min( this.boardHeight - this.height, this.y + this.speed );
      }

      coordinates(x, y, width, height) {
          let leftX = x;
          let rightX = x + width;
          let topY = y;
          let bottomY = y + height;
          return [leftX, rightX, topY, bottomY];
        }

    render(svg){
        2
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'white');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);

        svg.appendChild(rect);

    }
  }

  // Padddle.js

// import { SVG_NS } from '../settings';

// export default class Paddle {

//   constructor(boardHeight, width, height, x, y) {
//     this.boardHeight = boardHeight;
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
//     this.speed = 10;
//     this.score = 0;
//   }
  
//   render(svg) {
//     let rect = document.createElementNS(SVG_NS, 'rect');
//     rect.setAttributeNS(null, 'fill', 'white');
//     rect.setAttributeNS(null, 'width', this.width);
//     rect.setAttributeNS(null, 'height', this.height);
//     rect.setAttributeNS(null, 'x', this.x); // x of the top left corner
//     rect.setAttributeNS(null, 'y', this.y); // y of the top left corner
//     svg.appendChild(rect);
//   }

// }