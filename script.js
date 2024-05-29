document.addEventListener("DOMContentLoaded", () => {
    const ball = document.querySelector('.ball');
    const square = document.querySelector('.square');
    const text = document.querySelector('.fade-text');

    // Additional animations can be added here
    setInterval(() => {
        ball.style.backgroundColor = getRandomColor();
        square.style.backgroundColor = getRandomColor();
        text.style.color = getRandomColor();
    }, 1000);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
