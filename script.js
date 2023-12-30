// Image Gallery Lightbox
const galleryImages = document.querySelectorAll("#portfolio .gallery img");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.appendChild(overlay);

        const overlayImage = document.createElement("img");
        overlayImage.src = image.src;
        overlayImage.className = "overlay-image";
        overlay.appendChild(overlayImage);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });
    });
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Add your form submission logic here
        alert("Form submitted!");
    });
}
