/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date,date2){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	
	var Today=new Date();
    var year = Today.getFullYear(); 
	var month = Today.getMonth()+1;  
	var day =  Today.getDate(); 
    date1=new Date(year, month - 1, day) ;
	
	date2 = date2.split("/");
	year = date2[0]; 
	month = date2[1]; 
	day =  date2[2]; 
    date2=new Date(year, month - 1 , day) ;
    days = days_between(date1,date2);
	
	
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}
function timeElapsetimeElapse(date){
	var stime = date;
	var etime = new Date();
	var usedTime = etime - stime;  //两个时间戳相差的毫秒数
	var result = usedTime;
	/*var days=Math.floor(usedTime/(24*3600*1000));
	//计算出小时数
	var leave1=usedTime%(24*3600*1000);    //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000));
	//计算相差分钟数
	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000));
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" ; */
	$("#clock").html(result);
}
function calculate(date2){ 
    var Today=new Date();
    var year = Today.getFullYear(); 
	var month = Today.getMonth()+1;  
	var day =  Today.getDate(); 
    date1=new Date(year, month - 1, day) ;
	
	date2 = date2.split("/");
	year = date2[0]; 
	month = date2[1]; 
	day =  date2[2]; 
    date2=new Date(year, month - 1 , day) ;
    var diff = days_between(date1,date2);
	$("#clock").html(diff);
}
function days_between(date1, date2) {
    var ONE_DAY = 1000 * 60 * 60 * 24;

    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
  
    var difference_ms = Math.abs(date1_ms - date2_ms);
 
    return Math.round(difference_ms/ONE_DAY+1);
}