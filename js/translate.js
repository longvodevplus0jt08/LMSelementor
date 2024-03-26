var arrLang = {
  en: {
    HOME: 'HOME',
    TEACHERS: 'TEACHERS',
    CONTACT: 'CONTACT',
    COURSES: 'COURSES',
    PAGES: 'PAGES',
    BLOG: 'BLOG',
    GALLERY: 'GALLERY',
    SHOP: 'SHOP',
    HOME_II: 'Home II',
    SECOND_LEVEL: 'SECOND LEVEL',
    HOME_LANDING_PAGE: 'Home – Landing Page',
    HOME_SUBSCRIPTION: 'Home – Subscription',
    HOME_COURSE_SEARCH: 'Home – Course-Search',
    ZOOM_MEETING: 'Zoom Meeting',
    HOME_KIDS: 'Home – kids',
    POINTS_SYSTEM: 'Points System',
    COURSES_TEMPLATE: 'Courses-Template',
    LESSONS: 'Lessons',
    SEARCH_COURSE: 'Search-Course',
    MEMBERSHIP: 'Membership',
    COURSES_DETAIL: 'Courses Detail',
    COURSES_TYPE_1: 'Courses Type 1',
    COURSES_TYPE_2: 'Courses Type 2',
    COURSES_TYPE_3: 'Courses Type 3',
    COURSES_TYPE_4: 'Courses Type 4',
    BUDDYPRESS: 'BuddyPress',
    EVENT: 'Event',
    MEMBERS: 'Members',
    SITE_WIDE_ACTIVITY: 'Site-Wide Activity',
    EVENT_LISTING: 'Event Listing',
    EVENTS_MONTH: 'Events Month',
    EVENTS_DAY: 'Events Day',
    HEADERS: 'Headers',
    HEADER_1: 'Header-1',
    HEADER_2: 'Header-2',
    HEADER_3: 'Header-3',
    HEADER_4: 'Header-4',
    SIDE_NAVIGATION: 'Side-Navigation',
    ABOUT: 'About',
    TEACHER: 'Teachers',
    TEACHERS_PROFILE: 'Teachers Profile',
    CONTACT_LAYOUT_2: 'Contact – layout-2',
    CONTACT_LAYOUT_3: 'Contact – layout-3',
  },
  vi: {
    HOME: 'TRANG CHỦ',
    TEACHERS: 'GIẢNG VIÊN',
    CONTACT: 'LIÊN HỆ',
    COURSES: 'KHÓA HỌC',
    PAGES: 'TRANG',
    BLOG: 'NHẬT KÝ',
    GALLERY: 'THƯ VIỆN',
    SHOP: 'CỬA HÀNG',
    HOME_II: 'Trang chủ II',
    SECOND_LEVEL: 'Cấp bậc hai',
    HOME_LANDING_PAGE: 'Trang chủ – Landing Page',
    HOME_SUBSCRIPTION: 'Trang chủ – Subscription',
    HOME_COURSE_SEARCH: 'Trang chủ – Course-Search',
    ZOOM_MEETING: 'Cuộc họp Zoom',
    HOME_KIDS: 'Trang chủ – kids',
    POINTS_SYSTEM: 'Hệ thống điểm',
    COURSES_TEMPLATE: 'Mẫu khóa học',
    LESSONS: 'Bài học',
    SEARCH_COURSE: 'Tìm kiếm khóa học',
    MEMBERSHIP: 'Thành viên',
    COURSES_DETAIL: 'Chi tiết khóa học',
    COURSES_TYPE_1: 'Thể loại khóa học 1',
    COURSES_TYPE_2: 'Thể loại khóa học 2',
    COURSES_TYPE_3: 'Thể loại khóa học 3',
    COURSES_TYPE_4: 'Thể loại khóa học 4',
    BUDDYPRESS: 'BuddyPress',
    EVENT: 'Sự kiện',
    MEMBERS: 'Thành viên',
    SITE_WIDE_ACTIVITY: 'Hoạt động bên ngoài',
    EVENT_LISTING: 'Danh sách sự kiện',
    EVENTS_MONTH: 'Sự kiện tháng',
    EVENTS_DAY: 'Sự kiện ngày',
    HEADERS: 'Tiêu đề',
    HEADER_1: 'Tiêu đề 1',
    HEADER_2: 'Tiêu đề 2',
    HEADER_3: 'Tiêu đề 3',
    HEADER_4: 'Tiêu đề 4',
    SIDE_NAVIGATION: 'Điều hướng bên',
    ABOUT: 'Về chúng tôi',
    TEACHER: 'Giảng viên',
    TEACHERS_PROFILE: 'Thông tin giảng viên',
    CONTACT_LAYOUT_2: 'Giao diện liên hệ 2',
    CONTACT_LAYOUT_3: 'Giao diện liên hệ 3',
  },
};

$(document).ready(function () {
  // The default language is English
  var lang = 'en';
  $('.lang').each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
  });
});

// get/set the selected language
$('.translate').click(function () {
  var lang = $(this).attr('id');
  localStorage.setItem('lang', lang);
  $('.lang').each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
  });
});



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
      CONTACT: ["CONTACT_LAYOUT_2", "CONTACT_LAYOUT_2"]
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




