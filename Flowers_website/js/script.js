// To create a lightbox effect for images, 
   // you can add a click event listener to each image that opens a larger version of the image in a modal when clicked:
// Add a click event listener to all images
// Add a click event listener to the body for image clicks
document.body.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalImg = document.createElement('img');
        modalImg.src = event.target.src;
        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        // Close the modal when clicked outside the image
        modal.addEventListener('click', function() {
            modal.remove();
        });
    }
});

//To create a scroll-to-top button that appears when the user scrolls down 
//and disappears when they are at the top, you can use JavaScript to toggle its visibility based on the scroll position:

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    // Calculate how far the user has scrolled from the top
    const scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    
    // Get the height of the viewport
    const viewportHeight = window.innerHeight;
    
    // Get the height of the entire page
    const totalHeight = document.documentElement.scrollHeight;
    
    // Calculate the remaining height (total height - viewport height)
    const remainingHeight = totalHeight - viewportHeight;
    
    // Show the scroll-to-top button if the user has scrolled beyond 75% of the remaining height
    if (scrollDistance > remainingHeight * 0.75) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
