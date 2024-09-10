document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');
    const contents = document.querySelectorAll('.content-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const contentId = button.getAttribute('data-content');
            document.getElementById(contentId).classList.add('active');
        });
    });
});
