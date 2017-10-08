//倒记时函数
var shuzu_target=[]
var datetime_id=[]
function duoge_daojishi(){
    setTimeout("duoge_daojishi()", 1000);
for (var i=0,j=shuzu_target.length;i<j;i++){
    today=new Date();
    timeold=shuzu_target[i]-today.getTime();
    sectimeold=timeold/1000;
    secondsold=Math.floor(sectimeold);
    msPerDay=24*60*60*1000;
    e_daysold=timeold/msPerDay;
    daysold=Math.floor(e_daysold);
    e_hrsold=(e_daysold-daysold)*24;
    hrsold=Math.floor(e_hrsold);
    e_minsold=(e_hrsold-hrsold)*60;
    minsold=Math.floor((e_hrsold-hrsold)*60);
    seconds=Math.floor((e_minsold-minsold)*60);
    if (daysold<0) {
        document.getElementById(datetime_id[i]).innerHTML="逾期,倒计时已经失效";
    }
    else {
        if (hrsold<10) {hrsold="0"+hrsold}
        if (minsold<10) {minsold="0"+minsold}
        if (seconds<10) {seconds="0"+seconds}
        if (daysold<3) {
document.getElementById(datetime_id[i]).innerHTML="<span>"+daysold+"</span>"+" 天 "+"<span>"+hrsold+"</span>"+" 时 "+"<span>"+minsold+"</span>"+" 分 "+"<span>"+seconds+"</span>"+" 秒" 
        }
        else {
			document.getElementById(datetime_id[i]).innerHTML="<span>"+daysold+"</span>"+" 天 "+"<span>"+hrsold+"</span>"+" 时 "+"<span>"+minsold+"</span>"+" 分 "+"<span>"+seconds+"</span>"+" 秒" 
            //document.getElementById(datetime_id[i]).innerHTML=daysold+" 天 "+hrsold+" 时 "+minsold+" 分 "+seconds+" 秒";
        }
    }
}
}
setTimeout("duoge_daojishi()", 100);
//弹出框
function guanbi_div(div_cs1,div_cs2)
{
$("#"+div_cs2).stop().fadeOut(100);
$("#"+div_cs1).stop().fadeOut(100);
}
function tanchu_div(div_cs1,div_cs2)
{
$("#"+div_cs1).css({ 'height': $(document).height() });
$("#"+div_cs1).stop().show();
$("#"+div_cs2).tanchu_ctyle();
$("#"+div_cs2).stop().show();
}
jQuery.fn.tanchu_ctyle=function(loaded) {
var tanchu_obj01 = this;
body_width01 = parseInt($(window).width());
body_height01 = parseInt($(window).height());
block_width01 = parseInt(tanchu_obj01.width());
block_height02 = parseInt(tanchu_obj01.height());
left_position01 = parseInt((body_width01/2) - (block_width01/2)  + $(window).scrollLeft());
if (body_width01<block_width01) { left_position01 = 0 + $(window).scrollLeft(); };
top_position = parseInt((body_height01/2) - (block_height02/2) + $(window).scrollTop());
if (body_height01<block_height02) { top_position = 0 + $(window).scrollTop(); };
if(!loaded) {
tanchu_obj01.css({'position': 'absolute'});
tanchu_obj01.css({ 'top': top_position, 'left': left_position01 });
$(window).bind('resize', function() { 
tanchu_obj01.tanchu_ctyle(!loaded);
});
$(window).bind('scroll', function() { 
tanchu_obj01.tanchu_ctyle(!loaded);
});
} else {
tanchu_obj01.stop();
tanchu_obj01.css({'position':'absolute'});
tanchu_obj01.animate({ 'top':top_position },0,'linear');
}
}
//公用滑出隐藏和显示
function gong_show(id){
$("#"+id).show();
};
function gong_hide(id){
$("#"+id).hide();
};
//返回顶部
$(document).ready(function(){
        $("#back_to_top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, 500);
        });
        var $backToTopFun = function() {
                var st = $(document).scrollTop(), winh = $(window).height();
                (st > 0)? $("#back_to_top").show(): $("#back_to_top").hide();
                //IE6下的定位
                if (!window.XMLHttpRequest) {
                        $("#back_to_top").css("top", st + winh - 166);
                }
        };
		$(window).bind("scroll", $backToTopFun);
        $(function() { $backToTopFun(); });
//选择城市
$(".sq02").click(function(){
$(".sq05").slideDown(50);
});
//离开后自动关闭
$(".header_04").mouseleave(function(){
$(".sq05").slideUp(50);
});
//购物车下拉
$(".header_06").hover(function() {
$(this).children(".header_07").stop().slideDown(50);
},function(){
$(this).children(".header_07").stop().slideUp(50);
});
//导航全部商品下拉
$(".header_nav_01").hover(function() {
$(this).children(".header_nav_nr").stop().slideDown(50);
},function(){
$(this).children(".header_nav_nr").stop().slideUp(50);
});


});
//普通全选效果
function quanxuan_js(xuanx_anniu,qx_id){
var checklist=document.getElementsByName(qx_id);
 var anniu=document.getElementById(xuanx_anniu);
//alert(anniu.value);
   if(anniu.value=='全选')
   {
for(var i=0;i<checklist.length;i++)
{
 checklist[i].checked = 1;
}
   anniu.value='全不选';
 }else{
for(var j=0;j<checklist.length;j++)
{
checklist[j].checked = 0;
}
  anniu.value='全选';
 }
}
//找回密码方式
function changepingtai(pp){
    var pp = pp;
	if(pp==1){
       $("#mobilediv").show();
       $("#emaildiv").hide();
		$("#mobile").unFormValidator(false);
		$("#email").unFormValidator(true);
		$("#mobilecode").unFormValidator(false);
		$("#verify").unFormValidator(true);
	}else if(pp==2){
       $("#emaildiv").show();
       $("#mobilediv").hide();
		$("#mobile").unFormValidator(true);
		$("#email").unFormValidator(false);
		$("#mobilecode").unFormValidator(true);
		$("#verify").unFormValidator(false);
	}
	return true;
}
//幻灯片调用
$(function() {
	jQuery.huandeng_focus = function(slid) {
		var sWidth = $(slid).width(); //获取焦点图的宽度（显示面积）
		var len = $(slid).find("ul li").length; //获取焦点图个数
		var index = 0;
		var picTimer;
		//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
		var btn = "<div class='btnBg'></div><div class='btn'>";
		for(var i=0; i < len; i++) {
			var ii = i+1;
			btn += "<span>"+ii+"</span>";
		}
		btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
		$(slid).append(btn);
		$(slid).find("div.btnBg").css("opacity",0.5);
	
		//为小按钮添加鼠标滑入事件，以显示相应的内容
		$(slid+" div.btn span").mouseenter(function() {

//		$(slid+" div.btn span").css("opacity",0.4).mouseenter(function() {
			index = $(slid+" .btn span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseenter");
	
		//上一页、下一页按钮透明度处理
		$(slid+" .preNext").css("opacity",0.2).hover(function() {
			$(this).stop(true,false).animate({"opacity":"0.5"},300);
		},function() {
			$(this).stop(true,false).animate({"opacity":"0.2"},300);
		});
	
		//上一页按钮
		$(slid+" .pre").click(function() {
			index -= 1;
			if(index == -1) {index = len - 1;}
			showPics(index);
		});
	
		//下一页按钮
		$(slid+" .next").click(function() {
			index += 1;
			if(index == len) {index = 0;}
			showPics(index);
		});
	
		//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
		$(slid+" ul").css("width",sWidth * (len));
		
		//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
		$(slid).hover(function() {
			clearInterval(picTimer);
		},function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if(index == len) {index = 0;}
			},4000); //此4000代表自动播放的间隔，单位：毫秒
		}).trigger("mouseleave");
		//显示图片函数，根据接收的index值显示相应的内容
		function showPics(index) { //普通切换
			var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
			$(slid+" ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
			$(slid+" .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
			$(slid+" .btn span").stop(true,false).eq(index).stop(true,false); //为当前的按钮切换到选中的效果
//			$(slid+" .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果

		}
	
	};
	
});
//切换选项卡
function tab_hanshu(bqxx,nrxx,ssxx_id,idgsxx)
{
	for (zs_id=0;zs_id<idgsxx;zs_id++)
{
	document.getElementById(bqxx+zs_id).className = "moren";
	document.getElementById(nrxx+zs_id).style.display = "none";
}
	document.getElementById(bqxx+ssxx_id).className = "this";
	document.getElementById(nrxx+ssxx_id).style.display = "block";
}