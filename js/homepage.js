// 轮播图
var mySwiper1 = new Swiper('#swiper1', {
    loop: true,
    autoplay:true,
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable :false,
        bulletActiveClass: 'my-bullet-active',

    },
});
//鼠标滑过pagination控制swiper切换
for(i=0;i<mySwiper1.pagination.bullets.length;i++){
    mySwiper1.pagination.bullets[i].index=i+1;
    mySwiper1.pagination.bullets[i].onmouseover=function(){
      mySwiper1.slideTo(this.index);
    };
}

// 菜单栏
// console.log($(".content-area ul li").length)//7
// for(var i=0;i<$(".content-area ul li").length;i++){
//     var index=$(this).index();
//     var det=$('.details-area ul').eq(index);
//     $(det).css({'display':'none'})
    
// }
var index1=0;   //定义index1作为菜单栏的index
$(".nav ul li").mouseover(function(){
    index1=$(this).index();
    // console.log(index1)
    var cont=$('.content-area ul').eq(index1);
    for(var i=0;i<$(".nav ul li").length;i++){
        // 内容区非指定的内容不显示
        $('.content-area').css({'display':'none'});
        $('.content-area ul').css({'display':'none'});
        // $('.details-area ul').css({'display':'none'})
        // 内容详情区非指定的内容不显示
        $('.details-area').css({'display':'none'});
        $('.details-area div').css({'display':'none'})
        $('.details-area div').eq(index1).children().css({'display':'none'});
    }
    // console.log($('.content-area ul').eq(index).hasClass('nocontent'))
    // console.log($('.content-area ul').eq(index).html())
    // 显示内容区content-area
    if($('.content-area ul').eq(index1).html()==0){
        // 如果菜单栏没有子项，不显示内容区
        $('.content-area').css({'display':'none'});
        $('.content-area ul').css({'display':'none'});
        // 如果菜单栏没有子项，不显示详情区
        $('.details-area').css({'display':'none'});
        // $('.details-area div').css({'display':'none'});
        // $('.details-area div').eq(index1).children().css({'display':'none'});
    }else{
        // 显示内容区content-area
        $('.content-area').css({'display':'block'});
        $(cont).css({'display':'block'});
        // 显示详情区details-area
        $('.details-area').css({'display':'block'});
        $('.details-area div').eq(index1).css({'display':'block'})
        $('.details-area div').eq(index1).children().eq(0).css({'display':'block'});
    }
   
    // 鼠标移出菜单，内容区和详情区不显示
    $(".nav ul li").mouseout(function(){
        //否则不显示内容区和详情区
        $('.content-area').css({'display':'none'});
        $('.content-area ul').css({'display':'none'});

        $('.details-area').css({'display':'none'});
        $('.details-area div').css({'display':'none'})
        $('.details-area div').eq(index1).children().css({'display':'none'});
        //如果鼠标移出菜单时，移入内容区，则内容区和详情区不消失
        $(".content-area").mouseover(function(){
            
            $('.content-area').css({'display':'block'});
            $('.content-area ul').eq(index1).css({'display':'block'});

            $(".content-area ul li").mouseover(function(){
                $('.details-area').css({'display':'block'});
            })
        })
        
    })
})

$(".content-area ul li").mouseover(function(){
    var index2=$(this).index();
    // console.log(index)
    var detAre=$('.details-area div').eq(index1);
    // console.log(detAre)
    var det=$(detAre).children().eq(index2);
    // console.log(det)
    for(var i=0;i<$(".content-area ul li").length;i++){
        // var index=$(this).index();
        // var det=$('.details-area ul').eq(index);
        $('.details-area').css({'display':'none'});
        $('.details-area div').css({'display':'none'})
        $(detAre).children().css({'display':'none'})
    }
    $('.details-area').css({'display':'block'});
    $(detAre).css({'display':'block'})
    $(det).css({'display':'block'});
    // console.log(det)
})
//鼠标移出内容区，且不在菜单栏和详情区，内容区和详情区消失
$(".content-area").mouseout(function(){
    $('.content-area').css({'display':'none'});
    $('.details-area').css({'display':'none'});
    //鼠标移入详情区，内容区和详情区不消失
    $(".details-area").mouseover(function(){
        $('.content-area').css({'display':'block'});
        $('.details-area').css({'display':'block'});
    })

})
//鼠标移出详情区区，且不在菜单栏和内容区，内容区和详情区消失
$(".details-area").mouseout(function(){
    $('.content-area').css({'display':'none'});
    $('.details-area').css({'display':'none'});
    //鼠标移入内容区，内容区和详情区不消失
    $(".content-area").mouseover(function(){
        $('.content-area').css({'display':'block'});
        $('.details-area').css({'display':'block'});
    })

})
//设置点击放大镜后菜单列表消失动画，搜索框出现
$('.nav .search a img').click(function(){
    $('.nav ul').fadeOut(600,'swing');
    $('.nav .sign').fadeOut(600,'swing');
    $('.nav .shopcar').fadeOut(600,'swing');
    $('.nav .search').fadeOut(600,'swing');
    setTimeout(function(){ 
        $('.nav .searchDetail').fadeIn(600,'swing');
    },600);
})
//设置点击搜索框X后搜索框消失动画，菜单栏出现
$('.nav .searchDetail .close-search').click(function(){
    $('.nav .searchDetail').fadeOut(600,'swing');
    setTimeout(function(){ 
        $('.nav ul').fadeIn(600,'swing');
        $('.nav .sign').fadeIn(600,'swing');
        $('.nav .shopcar').fadeIn(600,'swing');
        $('.nav .search').fadeIn(600,'swing');
    },600);
})

var mySwiper2 = new Swiper('#swiper2', {
    slidesPerView : 3,
    centeredSlides : true,
    spaceBetween : 20,
    loop: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// 登录模块
$('.login').click(function(){
    $('.mask').css({'display':'block'});
    $('.fm').css({'display':'block'});

    // if (getCookie('username')) {
    //     username.value = getCookie('username');
    //     userpass.value = getCookie('userpass');
    //     auto.checked = true;
    // }
})
// 关闭登录界面
$('.fm .close').click(function(){
    $('.mask').css({'display':'none'});
    $('.fm').css({'display':'none'});
})

$('.fm .login_hd .login_switch p').eq(0).click(function(){
    $('.fm input').css({'display':'none'});
    $('.fm .login_auto').css({'display':'none'});
    $('.fm .submit').css({'display':'none'});
    $('.fm .login_main').css({'display':'none'});
    $('.fm .other_login').css({'display':'none'});
    $('.fm .login_title').css({'display':'none'});
    $('.fm .login_hd .login_tip').css({'display':'none'});
    $('.fm .login_title2').css({'display':'block'});
    $('.fm .qrcode_login').css({'display':'block'});
    $('.fm .login_hd .login_switch p').eq(0).css({'display':'none'});
    $('.fm .login_hd .login_switch p').eq(1).css({'display':'block'});
})
$('.fm .login_hd .login_switch p').eq(1).click(function(){
    $('.fm input').css({'display':'block'});
    $('.fm .login_auto').css({'display':'block'});
    $('.fm .submit').css({'display':'block'});
    $('.fm .login_main').css({'display':'block'});
    $('.fm .other_login').css({'display':'block'});
    $('.fm .login_hd .login_tip').css({'display':'block'});
    $('.fm .login_title').css({'display':'block'});
    $('.fm .login_title2').css({'display':'none'});
    $('.fm .qrcode_login').css({'display':'none'});
    $('.fm .login_hd .login_switch p').eq(1).css({'display':'none'});
    $('.fm .login_hd .login_switch p').eq(0).css({'display':'block'});
})

// 注册模块
// $('.signin').click(function(){
//     $('.mask').css({'display':'block'});
//     $('.fm').css({'display':'block'});
// })
// // 关闭注册界面
// $('.fm .close').click(function(){
//     $('.mask').css({'display':'none'});
//     $('.fm').css({'display':'none'});
// })

