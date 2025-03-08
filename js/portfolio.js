const galleryImages = [
    '/assets/images/portfolio_pics/lemma1.jpg',
    '/assets/images/portfolio_pics/lemma2.jpg',
    '/assets/images/portfolio_pics/lemma3.jpg',
    '/assets/images/portfolio_pics/lemma4.jpg',
    '/assets/images/portfolio_pics/lemma5.jpg',
    '/assets/images/portfolio_pics/lemma6.jpg',
    '/assets/images/portfolio_pics/lemma7.jpg',
    '/assets/images/portfolio_pics/lemma8.jpg',
    '/assets/images/portfolio_pics/lemma9.jpg',
    '/assets/images/portfolio_pics/lemma10.jpg',
    '/assets/images/portfolio_pics/lemma11.jpg',
    '/assets/images/portfolio_pics/lemma12.jpg',
    '/assets/images/portfolio_pics/lemma13.jpg',
    '/assets/images/portfolio_pics/lemma14.jpg',
    '/assets/images/portfolio_pics/lemma15.jpg',
    '/assets/images/portfolio_pics/lemma16.jpg',
    '/assets/images/portfolio_pics/lemma17.jpg',
    '/assets/images/portfolio_pics/lemma18.jpg',
    '/assets/images/portfolio_pics/lemma19.jpg'
];

const galleryContainer = document.querySelector('.w-full.flex.flex-col');

galleryImages.forEach((imagePath, index) => {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'w-full flex justify-center mb-8';
    
    const image = document.createElement('img');
    image.src = imagePath;
    image.alt = `Gallery Image ${index + 1}`;
    image.className = 'w-[95vw] h-auto max-h-[80vh] object-contain shadow-xl rounded-lg';
    
    imageContainer.appendChild(image);
    galleryContainer.appendChild(imageContainer);
});