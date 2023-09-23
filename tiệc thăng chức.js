// Lắng nghe sự kiện khi trang đã tải xong
document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách tất cả các phần tử .image-box
    var imageBoxes = document.querySelectorAll(".image-box");
  
    // Lặp qua từng phần tử .image-box
    imageBoxes.forEach(function(imageBox) {
      // Lấy phần tử img và figcaption trong mỗi .image-box
      var img = imageBox.querySelector("img");
      var figcaption = imageBox.querySelector("figcaption");
  
      // Đặt chiều cao của .image-box dựa trên tỉ lệ khung hình của hình ảnh
      var aspectRatio = img.naturalWidth / img.naturalHeight;
      var boxHeight = imageBox.offsetWidth / aspectRatio;
      imageBox.style.height = boxHeight + "px";
  
      // Đặt vị trí và chiều cao của figcaption
      figcaption.style.top = "auto";
      figcaption.style.bottom = "0";
      figcaption.style.height = "auto";
    });
  });