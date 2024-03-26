function animateNumber(
  finalNumber,
  duration = 5000,
  startNumber = 0,
  callback
) {
  const startTime = performance.now();
  function updateNumber(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime > duration) {
      callback(finalNumber);
    } else {
      const rate = elapsedTime / duration;
      const currentNumber = Math.round(rate * finalNumber);
      callback(currentNumber);
      requestAnimationFrame(updateNumber);
    }
  }
  requestAnimationFrame(updateNumber);
}
document.addEventListener("DOMContentLoaded", function () {
  animateNumber(332, 300, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("courses-count").innerText = formattedNumber;
  });
  animateNumber(1403, 300, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("members-count").innerText = formattedNumber;
  });
  animateNumber(60, 300, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("authors-count").innerText = formattedNumber;
  });
  animateNumber(120, 300, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("subjects-count").innerText = formattedNumber;
  });
});
