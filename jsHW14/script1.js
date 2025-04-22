document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('commentForm');
    const commentsContainer = document.querySelector('.comments');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const text = document.getElementById('comment').value.trim();
        
        if (!name || !text) {
            alert('Please fill all fields!');
            return;
        }
        
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        
        const date = new Date();
        const timeString = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
        
        commentDiv.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${name}</span>
                <span class="comment-date">${timeString}</span>
            </div>
            <p>${text}</p>
        `;
        
        commentsContainer.appendChild(commentDiv);
        
        form.reset();
    });
});