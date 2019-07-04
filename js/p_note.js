//点击切换注册类型
$('.p_personage').click(function(){
	$('.p_personage').css("color","red");
	$(".p_enterprise").css("color","inherit");
	$(".p_none").css("display","none");
	$(".p_noye").css("display","block");
})
$(".p_enterprise").click(function(){
	$(".p_enterprise").css("color","red");
	$('.p_personage').css("color","inherit");
	$(".p_none").css("display","block");
	$(".p_noye").css("display","none");
})
//滑块
var inn=[0,0,0,0]
var fa=false;
$(function() {
    $(".inner").mousedown(function(e) {
        var dx, os = $(".inner").offset(),
        _differ = $(".outer").width() - $(".inner").width();
        $(document).mousemove(function(e) {
            dx = e.pageX - os.left;
            if (dx < 0) {
                dx = 0;
            } else if (dx > _differ) {
                dx = _differ;
            }
            $(".filter-box").css('width', dx);
            $(".inner").css("left", dx);
        });
        $(document).mouseup(function(e) {
            $(document).off('mousemove');
            $(document).off('mouseup');
            dx = e.pageX - os.left;
            if (dx < _differ) {
                SlideCheckFail();
            } else if (dx >= _differ) {
                SlideCheckSuccess(_differ);
                 fa=true;
            }
        })
    }) 
});
function SlideCheckFail() {
    $(".outer").removeClass("act");
    $(".inner").css("left", 0);
    $(".inner").html("&gt;&gt;");
    $(".filter-box").css('width', 0);
    $(".outer>span").html("按住滑块，拖拽到最右边");
    $("#CaptchaID").val("0");
    $(".outer span").addClass("txtRoll");
}
function SlideCheckSuccess(dx) {
    $(".outer").addClass("act");
    $(".outer>span").html("验证通过！");
    $(".inner").html('&radic;');
    $(".inner").css("left", dx);
    $(".filter-box").css('width', dx);
    $("#CaptchaID").val("1");
    $(".outer span").removeClass("txtRoll");
}

//正则验证
//手机
    var faa=false;
$('#p_zphone').bind({
	focus:function(){
	$(".bor1").css("border-color","#000");	
	},
	blur:function(){
		var str=$(this).val();
	    str=str.replace(/\s+/g,'');
	    var reg=/^(1|\+861)[3-9][0-9]{9}$/g;//匹配8到20位任意字符
	if(reg.test(str)){
		 faa=true;
		$('<i><img class="m" src="img/dd.png"/><i>').replaceAll('.t1');
	}else{
		 faa=false;
		
		$(".bor1").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t1');
		$('.p_tis').show();
		$('.p_tistxt').html('请输入正确的手机号');
	  } 
    if($("#p_zphone").val()==""){
	 	 faa=false;
	 	$(".bor1").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t1');
		$('.p_tis').show();
		$('.p_tistxt').html('输入不能为空');
	 }
	},keydown:function(){
		$(".t1").show()
	}
})
//企业名
var fab=false;
$('#p_zcomp').bind({
	focus:function(){
	$(".bor2").css("border-color","#000");	
	},
	blur:function(){
		var str=$(this).val();
	    str=str.replace(/\s+/g,'');
	    var reg=/[\u4e00-\u9fa5]{2-30}/g;//匹配8到20位任意字符
	if(reg.test(str)){
		 fab=true;
		$('<i><img class="m" src="img/dd.png"/><i>').replaceAll('.t2');
	}else{
		 fab=false;
		$(".bor2").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t2');
		$('.p_tis').show();
		$('.p_tistxt').html('请输入中文');
	 } 
	 if($("#p_zcomp").val()==""){
	 	 fab=false;
	 	$(".bor2").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t2');
		$('.p_tis').show();
		$('.p_tistxt').html('输入不能为空');
	 }
	},keydown:function(){
		$(".t2").show();
	}
})
//企业邮箱
var fac=false;
$('#p_zmail').bind({
	focus:function(){
	$(".bor3").css("border-color","#000");	
	},
	blur:function(){
		var str=$(this).val();
	    str=str.replace(/\s+/g,'');
	     reg=/^[0-9a-z]{2,18}@([0-9a-z]{2,6})\.[a-z]{2,3}$/g;//匹配8到20位任意字符
	if(reg.test(str)){
		 fac=true;
		$('<i><img class="m" src="img/dd.png"/><i>').replaceAll('.t3');
	}else{
		 fac=false;
		$(".bor3").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t3');
		$('.p_tis').show();
		$('.p_tistxt').html('请输入正确的邮箱');
	 } 
	 if($("#p_zmail").val()==""){
	 	 fac=false;
	 	$(".bor3").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t3');
		$('.p_tis').show();
		$('.p_tistxt').html('输入不能为空');
	 }
	},keydown:function(){
		$(".t3").show();
	}
})
//企业税号
var facc
$('#p_zduty').bind({
	focus:function(){
	$(".bor4").css("border-color","#000");	
	},
	blur:function(){
		var str=$(this).val();
	    str=str.replace(/\s+/g,'');
	    var reg=/\[0-9]{4-20}/g;//匹配8到20位任意字符
	if(reg.test(str)){
		 facc=true;
		$('<i><img class="m" src="img/dd.png"/><i>').replaceAll('.t4');
	}else{
		 facc=false;
		$(".bor4").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t4');
		$('.p_tis').show();
		$('.p_tistxt').html('请输入正确的税号');
	 } 
	  if($("#p_zduty").val()==""){
	 	 facc=false;
	 	$(".bor4").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t4');
		$('.p_tis').show();
		$('.p_tistxt').html('输入不能为空');
	 }
	},keydown:function(){
		$(".t4").show();
	}
})

//密码验证
var fad=false;
$('#p_zpass').bind({
	focus:function(){
	$(".bor5").css("border-color","#000");	
	},
	blur:function(){
		var str=$(this).val();
	    str=str.replace(/\s+/g,'');
	    var reg=/^[0-9a-zA-Z]{6,20}$/g;//匹配8到20位任意字符
	if(reg.test(str)){
		 fad=true;
		$('<i><img class="m" src="img/dd.png"/><i>').replaceAll('.t5');
	}else{
		 fad=false;
		$(".bor5").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t5');
		$('.p_tis').show();
		$('.p_tistxt').html('格式不正确');
	 } 	
	 if($("#p_zpass").val()==""){
	 	 fad=false;
	 	$(".bor5").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t5');
		$('.p_tis').show();
		$('.p_tistxt').html('输入不能为空');
	 }
	},keydown:function(){
		$(".t5").show();
	}
})
//密码确认
var fae=false;
$("#p_topass").bind({
	focus:function(){
	$(".bor6").css("border-color","#000");	
	},
	blur:function(){
	if($("#p_topass").val()==$('#p_zpass').val()&&$("#p_topass").val()!=""){
		 fae=true;
		$('<i><img class="m" src="img/dd.png"/><i>').replaceAll('.t6');
	}else{
		 fae=false;
		$(".bor6").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t6');
		$('.p_tis').show();
		$('.p_tistxt').html('密码输入不一致');
	 } 	
	 if($("#p_topass").val()==""){
	 	 fae=false;
	 	$(".bor6").css("border-color","red");
		$('<i><img src="img/hh.png"/><i>').replaceAll('.t6');
		$('.p_tis').show();
		$('.p_tistxt').html('输入不能为空');
	 }
	},keydown:function(){
		$(".t6").show();
	}
})
//短信验证
var faf=false;
$('#p_plac').blur(function(){
	var str=$(this).val();
	str=str.replace(/\s+/g,'');
	 var reg=/[0-9a-zA-z]{4}/g;//匹配8到20位任意字符
	if(reg.test(str)){
		 faf=true;
	}else{
		 faf=false;
		$(".bor0").css("border-color","red");
		$('.p_tis').show();
		$('.p_tistxt').html('验证码错误');
	 }
	if($("#p_plac").val()==""){
	 	 faf=false;
	 	$(".bor0").css("border-color","red");
		$('.p_tis').show();
		$('.p_tistxt').html('输入不能为空');
	 }
})
//短信验证
var fag=false;
$('#p_topnot').blur(function(){
	var str=$(this).val();
	str=str.replace(/\s+/g,'');
	 var reg=/[0-9a-zA-z]{4}/g;//匹配8到20位任意字符
	if(reg.test(str)){
		 fag=true;
	}else{
		 fag=false;
		$(".bor00").css("border-color","red");
		$('.p_tis').show();
		$('.p_tistxt').html('验证码错误');
	 }
	if($("#p_topnot").val()==""){
	 	 fag=false;
	 	$(".bor00").css("border-color","#243242");
		$('.p_tis').show();
		$('.p_tistxt').html('输入不能为空');
	 }
})


//提交注册
$(".p_subm").click(function(){
	if((faa&&fad&&fae&&faf)==true){
		var usename = $('#p_zphone').val();
		var password = $('#p_zpass').val();
		$.ajax({
			type:'get',
			url:'./login.php',
			cache: false,
			data:'act=add&user='+usename+'&pass='+password,
			dataType:'json',
			success:function(data){ 
				console.log(data);//注册成功提示
				if(data.err==0){
				  alert('注册成功，页面跳转首页')
				  window.location.href='./detail.html';//成功后跳转页面
				}  
				else{
			  $('.p_tis').show();
			  $('.p_tistxt').html('此手机号已经被注册');
				}	
			}
		})
	}else{
		alert(1)
	}
})


