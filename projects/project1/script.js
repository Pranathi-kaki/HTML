// Simple animation for input field focus
const searchInput = document.querySelector('input');

searchInput.addEventListener('focus', () => {
    searchInput.style.transition = '0.3s';
    searchInput.style.width = '70%';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.transition = '0.3s';
    searchInput.style.width = '60%';
});

// Logo bounce animation
const logo = document.querySelector('.logo img');
logo.addEventListener('mouseover', () => {
    logo.style.animation = 'bounce 0.5s ease infinite';
});

logo.addEventListener('mouseout', () => {
    logo.style.animation = 'none';
});

// Bounce keyframe animation
const style = document.createElement('style');
style.textContent = `
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}
`;
document.head.appendChild(style);
