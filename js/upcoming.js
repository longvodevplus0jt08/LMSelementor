$(document).ready(function(){
    var currentIndex = 0;
    var images = $('.image-wrapper');
    var totalImages = images.length;

    function showImage(index) {
        images.hide();
        $(images[index]).show();
    }

    function toggleButtons() {
        if ($(window).width() < 768) {
            $('#prevButton').prop('disabled', false);
            $('#nextButton').prop('disabled', false);
        } else {
            $('#prevButton').prop('disabled', true);
            $('#nextButton').prop('disabled', true);
        }
    }


    toggleButtons();

    $('#prevButton').click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    $('#nextButton').click(function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    toggleButtons();

    $(window).resize(function() {
        toggleButtons();
        if ($(window).width() >= 768) {
            location.reload();
        } else {
            showImage(currentIndex);
        }
    });
});