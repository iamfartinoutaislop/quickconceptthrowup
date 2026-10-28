window.onload = function() {
    window.addEventListener('mousemove', (event) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const radians = Math.atan2(mouseY - centerY, mouseX - centerX);
        const degrees = radians * (180 / Math.PI);

        document.body.style.rotate = `${degrees}deg`;
    });
}