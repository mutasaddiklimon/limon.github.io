const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Adjust the canvas size based on the window size
function resizeCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

resizeCanvas(); // Set initial size

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%+-/';
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function draw() {
    // Clear the canvas with a translucent background for the "trailing" effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the color and font for the text
    ctx.fillStyle = '#0F0'; // Green text color
    ctx.font = `${fontSize}px monospace`;

    // Draw the drops
    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drops when they reach the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // Reset drop to start from the top
        }
        drops[i]++;
    }
}

// Continuously call the draw function to animate
setInterval(draw, 35);

// Update the canvas size and columns array on window resize
window.addEventListener('resize', () => {
    resizeCanvas();
    columns = Math.floor(canvas.width / fontSize);
    drops.length = columns; // Adjust the length of the drops array
    for (let i = 0; i < columns; i++) {
        drops[i] = 1; // Reset drops to start from the top
    }
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=> {
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute;

        if (top >=offset && top <offset + height)
            {
                navlinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a [href*='+ id + ']').classList.add('active')
                } )
            }
    } )
    
}
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}