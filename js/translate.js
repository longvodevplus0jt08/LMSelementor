var arrLang = {
  en: {
    HOME: 'HOME',
    TEACHERS: 'TEACHERS',
    CONTACT: 'CONTACT',
    COURSES: 'COURSES',
  },
  vi: {
    HOME: 'TRANG CHỦ',
    TEACHERS: 'GIẢNG VIÊN',
    CONTACT: 'LIÊN HỆ',
    COURSES: 'KHÓA HỌC',
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
  $('.lang').each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
  });
});
