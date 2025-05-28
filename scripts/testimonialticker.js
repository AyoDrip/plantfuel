document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showNextTestimonial() {
        testimonials.forEach(testimonial => {
            testimonial.style.display = "none";
        });
        testimonials[index].style.display = "block";
        index = (index + 1) % testimonials.length;
    }
    showNextTestimonial();

    setInterval(showNextTestimonial, 3000);
});