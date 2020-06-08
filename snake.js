const button = document.getElementById('play');
const score = document.getElementById('score');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// creating the snake
let snake = [ { x: 150, y: 150 }, { x: 140, y: 150 }, { x: 130, y: 150 }, { x: 120, y: 150 } ];

function drawSnakeParts(snakeBodyPart) {
	ctx.fillStyle = '#fca311';
	ctx.strokestyle = '#ffff';
	ctx.fillRect(snakeBodyPart.x, snakeBodyPart.y, 10, 10);
	ctx.strokeRect(snakeBodyPart.x, snakeBodyPart.y, 10, 10);
}

function drawSnake() {
	snake.forEach(drawSnakeParts);
}
