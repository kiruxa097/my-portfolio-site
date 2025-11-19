document.querySelectorAll('.menu-btn').forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        const section = document.getElementById(target);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});
