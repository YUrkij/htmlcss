const colorPicker = document.getElementById('colorPicker');
        document.querySelectorAll('.block').forEach(block => {
            block.addEventListener('click', () => {
                block.style.backgroundColor = colorPicker.value;
            });
        });