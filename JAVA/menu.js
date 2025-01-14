function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImage.src = image.src;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

function filterMenu(category) {
    const items = document.querySelectorAll('.menu-card');
    items.forEach(item => {
        if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

const menuCategoryItems = document.querySelectorAll('.menu-categories li');

menuCategoryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Buang kelas aktif daripada semua kategori
        menuCategoryItems.forEach(i => i.classList.remove('active-category'));
        // Tambahkan kelas aktif kepada kategori yang diklik
        item.classList.add('active-category');
    });
});


    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


