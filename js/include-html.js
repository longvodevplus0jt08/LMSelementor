document.addEventListener("DOMContentLoaded", function() {
    var includeElements = document.querySelectorAll('[data-include]');
    includeElements.forEach(function(element) {
        var file = element.getAttribute('data-include');
        var cssFile = element.getAttribute('data-css');
        var jsFile = element.getAttribute('data-js'); // Lấy tên file JavaScript từ thuộc tính data-js
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                element.innerHTML = html;

                if (cssFile) {
                    var linkElement = document.createElement('link');
                    linkElement.setAttribute('rel', 'stylesheet');
                    linkElement.setAttribute('href', cssFile);
                    document.head.appendChild(linkElement);
                }
                if (jsFile) {
                    var scriptElement = document.createElement('script');
                    scriptElement.setAttribute('src', jsFile);
                    document.body.appendChild(scriptElement);
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
});
