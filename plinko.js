const board = document.querySelector('.plinko-board');
const ball = document.createElement('div');
ball.classList.add('ball');

function generateBoard() {
    const rows = 10;
    const columns = 3;
    const pinSize = 20;
    const pinSpacing = 30;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const pin = document.createElement('div');
            pin.classList.add('plinko-pin');
            pin.style.top = `${i * pinSize}px`;
            pin.style.left = `${j * pinSpacing}px`;
            pin.style.width = `${pinSize}px`;
            pin.style.height = `${pinSize}px`;
            board.appendChild(pin);
        }
    }
}

function dropBall() {
    const startPosition = {
        x: 0,
        y: 0
    };

    const endPosition = {
        x: Math.random() * (board.offsetWidth - ball.offsetWidth),
        y: Math.random() * (board.offsetHeight - ball.offsetHeight)
    };

    const animation = ball.animate([
        startPosition,
        endPosition
    ], {
        duration: 1000,
        easing: 'ease-out',
        iterations: 1
    });

    animation.addEventListener('finish', () => {
        // Add logic for what happens when the ball falls
    });
}

generateBoard();
board.appendChild(ball);
dropBall();