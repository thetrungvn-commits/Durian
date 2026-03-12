document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const aosElements = document.querySelectorAll('[data-aos]');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Simple AOS implementation
        aosElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('active');
            }
        });
    });

    // Form Handling
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                product: document.getElementById('product').value,
                message: document.getElementById('message').value
            };

            console.log('Order Submitted:', formData);
            alert('Cảm ơn bạn! Chúng tôi đã nhận được yêu cầu đặt hàng và sẽ liên hệ lại sớm nhất.');
            orderForm.reset();
        });
    }

    // Trigger scroll event once to show initial elements
    window.dispatchEvent(new Event('scroll'));

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
