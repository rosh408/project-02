# Pong Game

A basic pong game using SVGs.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down

## Game.js

methods: triggerBall(), render()

-

## Ball.js

methods: wallCollision(), paddleCollision(), goal(), render()

- called 2 let variables for both balls "circle" and "ballTwo"
- reset() consists of 3 important math functions to let the ball travel in random directions (Math.Abs, Math.random, Math.floor)
- set if else statements under wallCollision() to give vx and vy properties the opposite direction.

## Board.js 

methods: render()


## Paddle.js

methods: up(), down(), coordinates(), render().


## Score.js

methods: render()
