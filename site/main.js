$(function () {
  $('a[href^="#"]').on('click', function () {
    var speed = 100; // スクロール速度(ミリ秒)
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    //$('html').animate({ scrollTop: position }, speed, 'swing');
    $('html').animate({ scrollTop: position }, speed, 'linear');
    return false;
  });
});
