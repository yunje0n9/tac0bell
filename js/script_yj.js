
/**/
$(document).ready(function(){
  setInterval(function(){
    $('.main-imgs > img').eq(1).animate({'top':'374'},1000);
    $('.main-imgs > img').eq(1).animate({'top':'379'},1000);
  });
});
$(document).ready(function(){
  setInterval(function(){
    $('.main-imgs > img').eq(2).animate({'top':'422'},1000);
    $('.main-imgs > img').eq(2).animate({'top':'427'},1000);
  });
});
$(document).ready(function(){
  setInterval(function(){
    $('.main-imgs > img').eq(3).animate({'top':'432'},1000);
    $('.main-imgs > img').eq(3).animate({'top':'437'},1000);
  });
});

/*클릭 풍선들 움직임*/
$(document).ready(function(){
    setInterval(function(){
      $('.baloon1').animate({'top':'200'},1200);
      $('.baloon1').animate({'top':'210'},1200);
    });
  });

$(document).ready(function(){
  setInterval(function(){
    $('.baloon2').animate({'top':'120'},1200);
    $('.baloon2').animate({'top':'130'},1200);
  });
});

$(document).ready(function(){
  setInterval(function(){
    $('.baloon3').animate({'top':'250'},1200);
    $('.baloon3').animate({'top':'260'},1200);
  });
});

/*하단 빛 반짝이는 효과*/
$(document).ready(function(){
  for (var i = 0; i < 2; i++) {
    $('.light > img').eq(0).fadeIn(1000);
    $('.light > img').eq(0).fadeOut(1000);
    }
    $('.light > img').eq(0).fadeIn(1000);
});
$(document).ready(function(){
  for (var i = 0; i < 2; i++) {
    $('.light > img').eq(1).fadeIn(1000);
    $('.light > img').eq(1).fadeOut(1000);
    }
    $('.light > img').eq(1).fadeIn(1000);
});
$(document).ready(function(){
  for (var i = 0; i < 2; i++) {
    $('.light > img').eq(2).fadeIn(1000);
    $('.light > img').eq(2).fadeOut(1000);
    }
    $('.light > img').eq(2).fadeIn(1000);
});
$(document).ready(function(){
  for (var i = 0; i < 2; i++) {
    $('.light > img').eq(3).fadeIn(1000);
    $('.light > img').eq(3).fadeOut(1000);
    }
    $('.light > img').eq(3).fadeIn(1000);
});

/*메뉴 누를 시 흐르듯 그 화면으로 이동*/
$(function(){
  var menu = $('.header > ul > li');
  var contents = $('#contents > div');

  menu.click(function(){
    var index = $(this).index();
    var section = contents.eq(index);
    var offset = section.offset().top;

    $('html,body').animate({scrollTop:offset}, 200);
    menu.removeClass('on');
    menu.eq(index).addClass('on');
  });
});

/*스크롤이 가서 붙도록 하기*/
var scrollEvent = false;
var count = 0;

$("html, body").on('mousewheel', function (c) {
  c.preventDefault();
  var m = c.originalEvent.wheelDelta;
  var sb = $("#section1").height();

  if(m > 1 && scrollEvent == false && count >= 1){
    console.log(count);
    scrollEvent = true;
    count--;
    $("html, body").stop().animate({scrollTop:sb*count},
      {duration:300, complete: function () {
        scrollEvent = false;}
      });
  } else if (m < 1 && scrollEvent == false && count < 7){
    console.log(count);
    scrollEvent = true;
    count++;
    $("html, body").stop().animate({scrollTop:sb*count},
      {duration:300, complete: function () {
        scrollEvent = false;}
      });
  }
});

/*배너1 모달 팝업 열기*/
$(document).ready(function(){
  var modalLayer = $("#myModal1");
  var modalLink = $(".banner1");
  var modalCont = $(".box_modal");
  var marginLeft = modalCont.outerWidth()/2;
  var marginTop = modalCont.outerHeight()/2;

  modalLink.click(function(){
    modalLayer.fadeIn("slow");
    modalCont.css({"margin-top" : -marginTop, "margin-left" : -marginLeft});
    $(this).blur();
    $(".box_modal > img").focus();

    return false;
  });

  $(".modal > .closer").click(function(){
    modalLayer.fadeOut("slow");
    modalLink.focus();
  });
});

/*배너2 모달 팝업 열기*/
$(document).ready(function(){
  var modalLayer = $("#myModal2");
  var modalLink = $(".banner2");
  var modalCont = $(".box_modal");
  var marginLeft = modalCont.outerWidth()/2;
  var marginTop = modalCont.outerHeight()/2;

  modalLink.click(function(){
    modalLayer.fadeIn("slow");
    modalCont.css({"margin-top" : -marginTop, "margin-left" : -marginLeft});
    $(this).blur();
    $(".box_modal > img").focus();

    return false;
  });

  $(".modal > .closer").click(function(){
    modalLayer.fadeOut("slow");
    modalLink.focus();
  });
});

$(document).ready(function(){
  var modalLayer = $("#myModal1");
  var modalLink = $(".banner1");
  var modalCont = $(".box_modal1");
  var marginLeft = modalCont.outerWidth()/2;
  var marginTop = modalCont.outerHeight()/2;

  modalLink.click(function(){
    modalLayer.fadeIn("slow");
    modalCont.css({"margin-top" : -marginTop, "margin-left" : -marginLeft});
    $(this).blur();
    $(".box_modal1 > img").focus();

    return false;
  });

  $(".modal1 > .closer").click(function(){
    modalLayer.fadeOut("slow");
    modalLink.focus();
  });
});

$(document).ready(function(){
  var modalLayer = $("#myModal2");
  var modalLink = $(".banner2");
  var modalCont = $(".box_modal2");
  var marginLeft = modalCont.outerWidth()/2;
  var marginTop = modalCont.outerHeight()/2;

  modalLink.click(function(){
    modalLayer.fadeIn("slow");
    modalCont.css({"margin-top" : -marginTop, "margin-left" : -marginLeft});
    $(this).blur();
    $(".box_modal2 > img").focus();

    return false;
  });

  $(".modal2 > .closer").click(function(){
    modalLayer.fadeOut("slow");
    modalLink.focus();
  });
});

/*배너3 모달 팝업 열기*/
$(document).ready(function(){
  var modalLayer = $("#myModal3");
  var modalLink = $(".banner3");
  var modalCont = $(".box_modal3");
  var marginLeft = modalCont.outerWidth()/2;
  var marginTop = modalCont.outerHeight()/2;

  modalLink.click(function(){
    modalLayer.fadeIn("slow");
    modalCont.css({"margin-top" : -marginTop, "margin-left" : -marginLeft});
    $(this).blur();
    $(".box_modal > img").focus();

    return false;
  });

  $(".modal3 > .closer").click(function(){
    modalLayer.fadeOut("slow");
    modalLink.focus();
  });
});

/*하단 문 모달 팝업 열기*/
$(document).ready(function(){
  var modalLayer = $("#myModal4");
  var modalLink = $(".doors");
  var modalCont = $(".box_modal4");
  var marginLeft = modalCont.outerWidth()/2;
  var marginTop = modalCont.outerHeight()/2;

  modalLink.click(function(){
    modalLayer.fadeIn("slow");
    modalCont.css({"margin-top" : -marginTop, "margin-left" : -marginLeft});
    $(this).blur();
    $(".box_modal4 > img").focus();

    return false;
  });

  $(".modal4 > .closer").click(function(){
    modalLayer.fadeOut("slow");
    modalLink.focus();

  });
});

/*배너1 모달 팝업 열기*/
$(document).ready(function(){
    setInterval(function(){
      $('.img2').animate({'top':'210'},1200);
      $('.img2').animate({'top':'190'},1200);
    });
  });

/*배너1 모달 슬라이드*/
$(document).ready(function(){
  var cnt = 0;
  var imgurl = '';

  $('.back1').click(function(){
    cnt--;
    if(cnt < 0){
      cnt = 3;
    }
    imgurl = 'images/tacobell_intro_' + cnt + '.png';
    $('.slide1 img').attr('src', imgurl);
  });

  $('.next1').click(function(){
    cnt++;
    if(cnt > 3){
      cnt = 0;
    }
    imgurl = 'images/tacobell_intro_' + cnt + '.png';
    $('.slide1 img').attr('src', imgurl);
  });
});

/*배너2 모달 슬라이드*/
$(document).ready(function(){
  var cnt = 0;
  var imgurl = '';

  $('.back2').click(function(){
    cnt--;
    if(cnt < 0){
      cnt = 2;
    }
    imgurl = 'images/taco_intro_' + cnt + '.png';
    $('.slide2 img').attr('src', imgurl);
  });

  $('.next2').click(function(){
    cnt++;
    if(cnt > 2){
      cnt = 0;
    }
    imgurl = 'images/taco_intro_' + cnt + '.png';
    $('.slide2 img').attr('src', imgurl);
  });
});

/*하단 문 모달 내 이동*/
$(document).ready(function(){
  $('.storefinding1').click(function(){
    $('.img4_1').hide();
    $('.img4_2').show('fadeIn');
  });
  // $('.storefinding1').click(function(){
  //   $('.img4_2').hide();
  //   $('.img4_1').show('fadeIn');
  // });
});

/* 모달창 띄워질 때 바디 스크롤 막기*/
$(document).ready(function(){
  $('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
  $('.box_modal4').on('scroll mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지
    event.preventDefault();
    event.stopPropagation();

    return false;
  });

  $('html, body').css({'overflow': 'auto', 'height': '100%'}); //scroll hidden 해제
  $('.box_modal4').off('scroll mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
});

/*매장찾기 지도 이동 및 효과*/
$('.maps_logo').click(function(){
  $('.maps_site > img').eq(1).toggleClass('open');

  if($('.maps_site > img').eq(1).hasClass('open')){
    $('.maps_site > img').eq(1).animate({'right':'118'}, 5000);
  } else {
    $('.maps_site > img').eq(1).animate({'right':'65'}, 5000);
  }
});

/*매장찾기 지도 이동 및 효과*/
$(document).ready(function(){
  $('.maps_logo').mouseover(function(){
      $('.maps_site1, .maps_site2').fadeToggle(500);
      // $('.maps_site2').fadeToggle(300);
  });
});

/*매장찾기 서치 결과값*/
$(function(){
  $('.tab dd').hide().first().show();

  $('.tab dt').click(function(){
    $('.tab dd').hide();
    $(this).next().show();
    $('.tab dt').removeClass('on');
    $(this).addClass('on');
  });
});

/*매장찾기 셀렉트1*/
$(function() {
  if ($('.select-options1 ul li').hasClass('selected')) {
    $('.select1 .input').text($('.select-options1 li.selected > span:first-child').text());
  } else {
    $('.select1 .input').text($('.select-options1 li:first-child > span:first-child').text());
  }
  $('.select1').click(function() {
    $('.select-options1').toggleClass('visible');
  });
  $('.select-options1 li').click(function() {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    $('.select1 .input').text($(this).find('span:first-child').text());
  });
});

/*매장찾기 셀렉트2*/
$(function() {
  if ($('.select-options2 ul li').hasClass('selected')) {
    $('.select2 .input').text($('.select-options2 li.selected > span:first-child').text());
  } else {
    $('.select2 .input').text($('.select-options2 li:first-child > span:first-child').text());
  }
  $('.select2').click(function() {
    $('.select-options2').toggleClass('visible');
  });
  $('.select-options2 li').click(function() {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    $('.select2 .input').text($(this).find('span:first-child').text());
  });
});
//
// /*매장찾기 뒤로가기*/
// $(function() {
//   $('.img4_2 > img').click(function(){
//     history.back();
//   });
// });

/*유림*/
$(function(){
// 이벤트클릭 위아래로 시작
  $(document).ready(function(){
    setInterval(function(){
      $('.event_click1').animate({'bottom':'270'},1200);
      $('.event_click1').animate({'bottom':'275'},1200);
    });
  });
  $(document).ready(function(){
    setInterval(function(){
      $('.event_click2').animate({'bottom':'65'},1200);
      $('.event_click2').animate({'bottom':'70'},1200);
    });
  });
  $(document).ready(function(){
    setInterval(function(){
      $('.event_click3').animate({'bottom':'250'},1200);
      $('.event_click3').animate({'bottom':'255'},1200);
    });
  });
// 이벤트클릭 위아래로 끝

// 이벤트부분 마우스오버 시작
  $('.paper1').mouseover(function(){
    $('.paper1_1').show();
  })
  $('.paper1_1').mouseleave(function(){
    $('.paper1_1').hide();
  })

  $('.paper2').mouseover(function(){
    $('.paper2_2').show();
  })
  $('.paper2_2').mouseleave(function(){
    $('.paper2_2').hide();
  })

  $('.paper3').mouseover(function(){
    $('.paper3_3').show();
  })
  $('.paper3_3').mouseleave(function(){
    $('.paper3_3').hide();
  })
  // 이벤트부분 마우스오버 끝

  // event modal 시작
    $(function(){
      $('.paper1_1').click(function(){
        $('.event_modal1').show();
      });
      $('.closer1').click(function(){
        $('.event_modal1').hide();
      })
    });

    $(function(){
      $('.paper2_2').click(function(){
        $('.event_modal2').show();
      });
      $('.closer2').click(function(){
        $('.event_modal2').hide();
      })
    });

    $(function(){
      $('.paper3_3').click(function(){
        $('.event_modal3').show();
      });
      $('.closer3').click(function(){
        $('.event_modal3').hide();
      })
    });
  // event modal 끝


//  리셉션클릭 위아래로 시작
  $(document).ready(function(){
    setInterval(function(){
      $('.reception_click1').animate({'top':'290'},1200);
      $('.reception_click1').animate({'top':'285'},1200);
    });
  });
  $(document).ready(function(){
    setInterval(function(){
      $('.reception_click2').animate({'top':'285'},1200);
      $('.reception_click2').animate({'top':'290'},1200);
    });
  });
// 리셉션클릭클릭 위아래로 끝

// 리셉션부분 마우스오버 시작
  $('.posting1').mouseover(function(){
    $('.posting1_1').show();
  })
  $('.posting1_1').mouseleave(function(){
    $('.posting1_1').hide();
  })
  $('.posting2').mouseover(function(){
    $('.posting2_2').show();
  })
  $('.posting2_2').mouseleave(function(){
    $('.posting2_2').hide();
  })
// 리셉션부분 마우스오버 끝

// reception modal 시작

  // 리셉션 첫번째모달 시작
  $(function(){
    $('.posting1_1').click(function(){
      $('.reception_modal1').show();
    });
    $('.closer4').click(function(){
      $('.reception_modal1').hide();
    });
  });
  // 리셉션 첫번째모달 끝

  // 리셉션 두번째 모달 시작
  $('.posting2_2').click(function(){
      $('.reception_modal2').show();
  });
  $('.close').click(function(){
      $('.reception_modal2').hide();
  });
  // 리셉션 두번째 모달 끝

  $('.r_x').click(function(){
      $('.reception_modal2').hide();
  });
  // 클로즈



// 리셉션모달1
  $(function(){
    $('.A_box').hide();

    $('.Q_box').click(function(){
      var bool = $(this).hasClass('on');
      if(!bool){
        $('.A_box').slideUp();
        $(this).next().slideDown();
        $('.Q_box').removeClass('on');
        $(this).addClass('on');
      } else{
        $(this).next().slideUp();
        $(this).removeClass('on');
      }
    });
  });


// FAQ인풋
  $(function() {
    if ($('.select-options ul li').hasClass('selected')) {
      $('.select .input').text($('.select-options li.selected > span:first-child').text());
    } else {
      $('.select .input').text($('.select-options li:first-child > span:first-child').text());
    }
    $('.select').click(function() {
      $('.select-options').toggleClass('visible');
    });
    $('.select-options li').click(function() {
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
      $('.select .input').text($(this).find('span:first-child').text());
    });
  });


// 서서히 나타나게
$(document).ready(function(){
  var modalLayer = $(".event_modal1");
  var modalLink = $(".paper1_1");
  var modalCont = $(".event_modal1_contents > img");
  var marginLeft = modalCont.outerWidth()/2;
  var marginTop = modalCont.outerHeight()/2;

  modalLink.click(function(){
    modalLayer.fadeIn("slow");
    modalCont.css({"margin-top" : -marginTop, "margin-left" : -marginLeft});
    $(this).blur();
    $(".event_modal1_contents > img").focus();

    return false;
  });

  $(".closer1").click(function(){
    modalLayer.fadeOut("slow");
    modalLink.focus();
  });
});


});



/*유성*/
$(document).ready(function(){
  setInterval(function(){
    $('.menu_click1').animate({'top':'80'}, 1200);
    $('.menu_click1').animate({'top':'90'}, 1200);
  })
});

$(document).ready(function(){
  setInterval(function(){
    $('.menu_click3').animate({'top':'-215'}, 1200);
    $('.menu_click3').animate({'top':'-225'}, 1200);
  })
});


$(function(){
  $('.sidemenu').click(function(){
    $('.icon_kitchen').css('display','block');
    $('.exit').css('display','block');
    $('.dot2').css('display','block');
    $('.dot').css('display','block');
  });
  $('.exit').click(function(){
    $('.icon_kitchen').css('display','none');
    $('.exit').css('display','none');
    $('.dot').css('display','none');
    $('.dot2').css('display','none');
  });
});

$(function(){
  $('.dot2').click(function(){
    $('.taco').animate({'left':'380'},1200);
    $('.burrito').fadeIn(2000);
  });
});
$(function(){
  $('.dot').click(function(){
    $('.taco').animate({'left':'973'},1200);
    $('.burrito').fadeOut(2000);
  });
});

$(function(){
  $('.box').click(function(){
    $('#modal_custom').css('display','block');
    $('.b-close').click(function(){
      $('#modal_custom').css('display','none');
    });
  });
});
// custom_box//
$(function(){
  $('.box').click(function(){
    $('#modal_custom').css('display','block');
    $('.b-close').click(function(){
      $('#modal_custom').css('display','none');
    });
  });
});
$(document).ready(function(){
  $('.chk1').click(function(){
    $(this).css('opacity', 1);
    $('.chk1').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk2').click(function(){
    $(this).css('opacity', 1);
    $('.chk2').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk3').click(function(){
    $(this).css('opacity', 1);
    $('.chk3').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk4').click(function(){
    $(this).css('opacity', 1);
    $('.chk4').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk5').click(function(){
    $(this).css('opacity', 1);
    $('.chk5').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk6').click(function(){
    $(this).css('opacity', 1);
    $('.chk6').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk7').click(function(){
    $(this).css('opacity', 1);
    $('.chk7').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk8').click(function(){
    $(this).css('opacity', 1);
    $('.chk8').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk9').click(function(){
    $(this).css('opacity', 1);
    $('.chk9').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk10').click(function(){
    $(this).css('opacity', 1);
    $('.chk10').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk11').click(function(){
    $(this).css('opacity', 1);
    $('.chk11').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk12').click(function(){
    $(this).css('opacity', 1);
    $('.chk12').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk13').click(function(){
    $(this).css('opacity', 1);
    $('.chk13').click(function(){
    $(this).css('opacity', 0);
    });
  });
  $('.chk14').click(function(){
    $(this).css('opacity', 1);
    $('.chk14').click(function(){
    $(this).css('opacity', 0);
    });
  });
});
// custom_box//

//--start_up--//
$(document).ready(function(){
  $('.tex').click(function(){
    $('.CEO_modal').css('display','block')
  });
});

$(function(){
  $('.ceo_exit').click(function(){
    $('.CEO_modal').css('display','none')
  });
});

// --start_up--//
