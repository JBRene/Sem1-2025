const headers = document.querySelectorAll('.header');
const contents = document.querySelectorAll('.subject-content');

headers.forEach((header, index) => {
    header.addEventListener('click', () => {
        const content = contents[index];
        const isActive = content.classList.contains('active');

        contents.forEach(c => c.classList.remove('active'));

        if (!isActive) {
            content.classList.add('active');
        }
    });
});