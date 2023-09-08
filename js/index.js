$(document).ready(function(){

  $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

    //주메뉴 오버시 해당하는 서브박스의 전체배경색과 왼쪽이미지 나오게 함
    $(".main").hover(function(){

      $(".subBoxImg .image img").show();
  
      $(this).find(".sub_all").css({"background":"#eee"});

    },function(){

      $(".subBoxImg .image img").hide();

      $(this).find(".sub_all").css({"background":"#fff"});
    }); 

  //알림존 슬라이드

  let $simg = $(".slide ul ");
  let $simgli = $(".slide ul li");
  let $sbtn = $(".slide_btn ul li");
  let $spre = $(".slide_side_btn .pre");
  let $snext = $(".slide_side_btn .nex");
  let simg_w = $simgli.width();  //이미지의 가로너비
  let simg_n = $simgli.length;  //이미지의 총개수
  let soldidx=0;  //기존이미지
  let sindex=0;  //선택된 새이미지


  //index번째 비주얼 이미지 이동하는 함수생성
  function slideImg(sindex){

    targetX=-(sindex * simg_w)  //움직이는 거리(너비)

    $simg.stop().animate({left:targetX},600);  //위에서 계산한 거리만큼 움직임
    $sbtn.eq(soldidx).removeClass("active");  //기존버튼 비활성화
    $sbtn.eq(sindex).addClass("active");  //선택버튼 활성화
    soldidx=sindex;

  };

  //자동함수 생성
  function slideAuto(){

    sindex++;
    if(sindex == simg_n){  //simg_n은 이미지개수 5, index는 0,1,2,3,4
      sindex=0;
    }
    slideImg(sindex);  //함수호출
  }

  auto = setInterval(slideAuto,4000);  

  //하단버튼
  $sbtn.click(function(){

    clearInterval(auto); 
    $(".play").hide();
    $(".stop").show();
    sindex=$(this).index();
    slideImg(sindex);
    auto = setInterval(slideAuto,4000); 
  });

  //Play, Stop
  $(".play").hide();  //처음에는 stop버튼을 보이게 하기위해 play버튼을 숨김

  $(".stop").click(function(){
    clearInterval(auto); 
    $(".stop").hide();
    $(".play").show();
  });
  
  $(".play").click(function(){
    auto = setInterval(slideAuto,4000); 
    $(".play").hide();
    $(".stop").show();
  });


  /* section3 right */
  $(".section3_tab li").click(function(){

    let num = $(this).index();
    let move = 118*num;  //가로폭 160px씩 증가됨(css에서 설정한 .tab-li 가로 너비:160px)

    $(".section3_tab-header .section3_tab-highlight").animate({left: move});
    $(this).siblings().removeClass("active");  
    $(this).addClass("active");  


    let result = $(this).attr("data-alt");
    $(".section3_tab-contents div").removeClass("active");
    $("#" + result).addClass("active"); 

  });



  //탭 컨텐츠
  $(".section4_btn li").click(function(){

    $(this).addClass("active");  
    $(this).siblings().removeClass("active");  

    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn(); 

  });


  //푸터 패밀리사이트
  chk = true;

  $(".family_site dl dt").click(function() {

    if (chk) {
    $(".arrow").html("<span class='material-icons icon2'>arrow_drop_down</span>");
    $(".family_site dd ul").slideDown();
    chk = false;
  } else {
    $(".arrow").html("<span class='material-icons icon2'>arrow_drop_up</span>");
    $(".family_site dd ul").slideUp();
    chk = true;
  }

  });


    //animate부분(close/open)
    bb=true;

    $(".trigger_btn").click(function(){
  
      $(this).toggleClass("active");
  
      if(bb){
        $(".quick_icon .icon4").stop(true,true).animate({"bottom":"50px"},500,"easeOutBack")
        $(".quick_icon .icon3").stop(true,true).animate({"bottom":"100px"},500,"easeOutBack")
        $(".quick_icon .icon2").stop(true,true).animate({"bottom":"150px"},500,"easeOutBack")
        $(".quick_icon .icon1").stop(true,true).animate({"bottom":"200px"},500,"easeOutBack")
        bb=false;
      }else{
        $(".quick_icon li").stop(true,true).animate({bottom:"0px"},500);
        bb=true;
      }
  
    });
  
});