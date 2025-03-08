const images = [
    'assets/images/slideshow_pics/gallery_1.jpg',
    'assets/images/slideshow_pics/gallery_2.jpg',
    'assets/images/slideshow_pics/gallery_3.jpg',
    'assets/images/slideshow_pics/gallery_4.jpg'
];

const header = document.querySelector('header');

let currentImageIndex = 0;

function updateBackgroundImage() {
    // Add fade transition effect
    header.style.transition = 'background-image 1s ease-in-out';
    header.style.backgroundImage = `url(${images[currentImageIndex]})`;
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Initial load
updateBackgroundImage();

// Change image every 8 seconds
setInterval(updateBackgroundImage, 8000);

// Add smooth scroll behavior for the "Book Now" button
const bookButton = document.querySelector('.book-button');
if (bookButton) {
    bookButton.addEventListener('click', () => {
        document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
    });
}