function show() {
    document.getElementById('icon-inactive').style.display = 'none';
    document.getElementById('icon-active').style.display = 'block';
}
function hide() {
    document.getElementById('icon-inactive').style.display = 'block';
    document.getElementById('icon-active').style.display = 'none';
}


$(document).ready(function () {
    $('#sidebar').mCustomScrollbar({
        theme: 'minimal',
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        document.getElementById('icon-inactive').style.display = 'block';
        document.getElementById('icon-active').style.display = 'none';
    });

    $('#icon-inactive').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

$(document).ready(function () {
    $('#sidebar-2').mCustomScrollbar({
        theme: 'minimal',
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar-2').removeClass('active');
        $('.overlay').removeClass('active');
        document.getElementById('icon-inactive').style.display = 'block';
        document.getElementById('icon-active').style.display = 'none';
    });

    // $('#isCollapse').on('click', function () {
    //   $('#sidebar-2').addClass('active');
    //   $('.overlay').addClass('active');
    //   $('.collapse.in').toggleClass('in');
    //   $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    // });

    $('#back').on('click', function () {
        $('#sidebar-2').removeClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

function showSidebar(element) {
    const tbody = document.querySelector('#list-sidebar');
    let index = 1;
    var key = element.getAttribute("key");
    if (key) {
        let data = {
            HOME: ["HOME_II", "HOME_LANDING_PAGE", "HOME_SUBSCRIPTION", "HOME_COURSE_SEARCH", "ZOOM_MEETING", "HOME_KIDS", "POINTS_SYSTEM"],
            COURSES: ["COURSES_TEMPLATE", "LESSONS", "SEARCH_COURSE", "MEMBERSHIP", "COURSES_DETAIL"],
            PAGES: ["BUDDYPRESS", "EVENT", "HEADERS", "SIDE_NAVIGATION", "ABOUT", "TEACHER", "TEACHERS_PROFILE"],
            CONTACT: ["CONTACT_LAYOUT_2", "CONTACT_LAYOUT_3"]
        };
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
        data[key].forEach(function (product) {
            const row = document.createElement('div');
            row.innerHTML = `<a href="#" class="list-group-item list-group-item-action lang" key=${product} aria-current="true"></a>`;
            tbody.appendChild(row);
            index++;
        })
        $(document).ready(function () {
            // The default language is English
            var lang = localStorage.getItem('lang');;
            $('.lang').each(function (index, element) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            });
        });
        $('#sidebar-2').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    }
}




function navigate(element) {
    window.location.href = `${window.location.origin}/${element}`
}