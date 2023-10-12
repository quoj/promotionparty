// Khởi tạo một mảng chứa tất cả các gallery item
const galleryItems = document.querySelectorAll('.gallery-item');

// Lặp qua từng gallery item
galleryItems.forEach((item) => {
    // Thêm sự kiện click để hiển thị hình ảnh khi được click
    item.addEventListener('click', () => {
        // Lấy hình ảnh trong gallery item
        const image = item.querySelector('img');
        // Lấy đường dẫn của hình ảnh
        const imageUrl = image.getAttribute('src');
        // Hiển thị hình ảnh trong một cửa sổ popup hoặc lightbox
        // Có thể sử dụng thư viện JavaScript hoặc CSS để tạo popup/ lightbox
        console.log('Image URL:', imageUrl);
    });
});