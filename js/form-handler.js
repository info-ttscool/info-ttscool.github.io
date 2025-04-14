document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
        this.reset();
    });
});