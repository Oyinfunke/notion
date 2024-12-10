var currentSlide = 0;
var totalSlides = 5; // Adjust to your actual slide count

function navigateSlide(direction) {
    if (direction === 'left' && currentSlide > 0) {
        currentSlide--;
    } else if (direction === 'right' && currentSlide < totalSlides - 1) {
        currentSlide++;
    }

    updateSlide();
    updateProgress();
}

function updateSlide() {
    var iframe = document.getElementById('google-slides');
    var slideUrl = "https://docs.google.com/presentation/d/e/2PACX-1vQjySdmK_14lv1zTWGU6oM28pU9meXSvquHSFN2PwPVbD7fO65HuZv-lVH73-3KRA/embed?start=false&loop=false&delayms=3000&slide=" + currentSlide;
    iframe.src = slideUrl;
}

function updateProgress() {
    var circles = document.querySelectorAll('.progress-circle');
    circles.forEach(function(circle, index) {
        if (index === currentSlide) {
            circle.style.backgroundColor = '#3498db'; // Active circle
        } else {
            circle.style.backgroundColor = 'white'; // Inactive circle
        }
    });
}
