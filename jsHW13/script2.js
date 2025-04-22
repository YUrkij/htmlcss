document.querySelectorAll('.color-cell').forEach(cell => {
    const color = cell.getAttribute('data-color');
    cell.style.backgroundColor = color;

    cell.addEventListener('click', function() {
        document.getElementById('text').style.color = color;
    });
});