function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var elements = document.querySelectorAll(".elimated");
  elements.forEach(function (el) {
    if (isElementInViewport(el)) {
      el.classList.add("show");
    }
  });
}

// Thêm sự kiện cuộn trang
window.addEventListener("scroll", handleScroll);

// Gọi hàm handleScroll lần đầu tiên để kiểm tra các phần tử ban đầu
handleScroll();
