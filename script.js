
// Initialize the slide index to zero. (Because index zero is equal to slide one)
let slideIndex = 0;

// Call the function to show the initial slide.
showSlides(slideIndex);

// Function to show the next or previous slide.
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to display the slide based on the current index.
function showSlides(n) {
    let slides = document.getElementsByClassName("slideshow-background"); // Get all of the slides.
    if (n >= slides.length) {
        slideIndex = 0; // Loop back to the first slide.
    }

    if (n < 0) {
        slideIndex = slides.length - 1; // Loop back to the last slide.
    }

    // Hide all of the slides.
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    // Display the current slide.
    slides[slideIndex].style.display = "flex"; // Use flex to keep the layout.
}

// Auto-play the slideshow.
setInterval(() => plusSlides(1), 10000); // Auto-play every ten seconds. (10000 is equal to ten seconds)

// Create arrow buttons for navigation.
function createArrows() {
    let slideshowBox = document.querySelector(".slideshow-background"); // Reference to slideshow box.
    let slideshowContainer = document.querySelector("body");

    // Get the bounding box of the slideshow container.
    let boxTop = slideshowBox.getBoundingClientRect().top;
    let boxLeft = slideshowBox.getBoundingClientRect().left;
    let boxRight = slideshowBox.getBoundingClientRect().right;
    let boxHeight = slideshowBox.getBoundingClientRect().height;
    let boxWidth = slideshowBox.getBoundingClientRect().width;
    let padding = 5; // Move the arrows closer to the white box.

    // Calculate the vertical center of the box.
    let verticalCenter = boxTop + boxHeight / 2;

    // Create the left arrow.
    let leftArrow = document.createElement("a");
    leftArrow.innerHTML = "&#10094;"; // Unicode for the left arrow.
    leftArrow.style.position = "absolute";
    leftArrow.style.top = `${verticalCenter - 20}px`; // Center the arrow vertically relative to the white box.
    leftArrow.style.left = `${boxLeft - padding - 40}px`; // Place it to the left of the white box.
    leftArrow.style.fontSize = "40px";
    leftArrow.style.color = "white";
    leftArrow.style.cursor = "pointer";
    leftArrow.style.userSelect = "none";
    leftArrow.style.zIndex = "1000";
    slideshowContainer.appendChild(leftArrow);

    // Add click event for the left arrow.
    leftArrow.addEventListener("click", () => plusSlides(-1));

    // Create the right arrow.
    let rightArrow = document.createElement("a");
    rightArrow.innerHTML = "&#10095;"; // Unicode for the right arrow.
    rightArrow.style.position = "absolute";
    rightArrow.style.top = `${verticalCenter - 20}px`; // Center the arrow vertically relative to the white box.
    rightArrow.style.left = `${boxRight + padding + 15}px`; // Place it to the right of the white box.
    rightArrow.style.fontSize = "40px";
    rightArrow.style.color = "white";
    rightArrow.style.cursor = "pointer";
    rightArrow.style.userSelect = "none";
    rightArrow.style.zIndex = "1000";
    slideshowContainer.appendChild(rightArrow);

    // Add click event for the right arrow.
    rightArrow.addEventListener("click", () => plusSlides(1));
}

// Call the function to create navigation arrows.
createArrows();