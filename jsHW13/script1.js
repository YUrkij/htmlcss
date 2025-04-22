const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById('addBlockBtn').addEventListener('click', function() {
    const container = document.getElementById('blocks-container');
    const block = document.createElement('div');
    
    const r = random(0, 255);
    const g = random(0, 255);
    const b = random(0, 255);
    block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    block.className = 'block';
    
    block.addEventListener('click', function() {
        this.remove();
    });
    
    container.appendChild(block);
});