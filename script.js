// Function to handle opening the Gallery Modal
function openModal(imageSrc, captionText) {
    // 1. Select the elements
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    
    // 2. Set the content
    modalImg.src = imageSrc;
    modalCaption.innerText = captionText;

    // 3. Initialize and Show the Bootstrap Modal
    const galleryModalElement = document.getElementById('galleryModal');
    const galleryModal = new bootstrap.Modal(galleryModalElement);
    galleryModal.show();
}

// Optional: Add shadow to navbar on scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-sm');
        nav.style.background = 'rgba(255, 255, 255, 1)';
    } else {
        nav.classList.remove('shadow-sm');
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});