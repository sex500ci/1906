
//二级导航定位 三级导航隐藏效果
$(document).bind('scroll',function(){
	if($(this).scrollTop()>50){
		$('#nav_heard').css("display","block");	
		$('p_label').css("display","none");
		$('#nav_heard').css({
			position:"fixed",
			top:0,
			zIndex:100
		})
	}else{
		$('#three_heard').css("display","block");
		$('#nav_heard').css("display","none");
		$('#nav_heard').css({
			position:"static"
		})
	}
	//购物车导航定位
	if($(this).scrollTop()>803){
		$('.p_shopping').css({
			position:"fixed",
			top:50,
			zIndex:100
		})}else{
			$('.p_shopping').css({
			position:"static"
		})
	  }
})
//点击导航隐藏搜索淡出
$('.fangdajing').click(function(){
	$('#five_heard').css({
		display:"block",
		position:"fixed",
	    top:0,
	    zIndex:100
	});
	$('.fangdajingfive').animate({right:"910px"},1000,"linear");
	$('#nav_heard').fadeOut(1000);
})
//点击搜索隐藏导航淡出
$('.delete').bind('click',function(){
	$('#five_heard').css({
		display:"none",
		position:"static",
	});
	$('#nav_heard').fadeIn(1000);  
})
//划过图片切换
$('.p_imglis li').hover(function (){
	$(this).css("border","1px solid red").siblings().removeAttr("style");
	var p_index=$(this).index();
	$(".p_img img:nth-child("+(p_index+1)+")").css({
		zIndex:20
	}).siblings().css({
		zIndex:0
	});
})
//点击切
//$(".p_leftt").click(function(){
//	console.log(is);
//	is++;
//	$('.p_imglis li:nth-child("+(is+1)+")').css("border","1px solid red");
//})
//手机颜色 手机内存  多选配件
$(".p_color,.p_coo,.p_recommendlist ul img").click(function(){
	$(this).css("border","1px solid red").siblings().removeAttr("style");
})
//划过显示隐藏显示     
$('.p_serve99').hover(function(){
   $('.p_popupleft').show();
$('.p_serve99').mouseout(function(){
   $('.p_popupleft').hide();
    })
 })
 $('.p_popupleft').unbind()
/*  mouseover(function(){
   $('.p_serve99').show();
 $('p_popupleft').mouseout(function(){
    $('.p_popupleft').hide()
       })
   })
        */
//lhj添加购物车用


$('.p_join').bind('click',function(){
	console.log(localStorage.getItem('index'));

	if (localStorage.getItem('index')) {
		var codeArr = JSON.parse(localStorage.getItem('index')).spid;//本地存储中的商品列表
		console.log(typeof codeArr);
	} else {
		var codeArr = [];
	}
	codeArr.push($(this).attr('spid'));
	var jstr = JSON.stringify({"spid":codeArr});
	localStorage.setItem('index',jstr);

	console.log(JSON.parse(localStorage.getItem('index')).spid);
})

console.log(JSON.parse(localStorage.getItem('index')).spid);