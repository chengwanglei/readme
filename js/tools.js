

//抓取css属性
function getStyle(obj,name){
	var value=obj.currentStyle ? obj.currentStyle[name]:getComputedStyle(obj ,false)[name];
	if(name=="opacity"){
		value=Math.round(Math.floor(value*100));
	}
	else{
		value=parseInt(value);
	}
	return value;
}
//运动框架
function hxsd_move(obj,moveJson,stop_time,callback){
	clearInterval(obj.timer);
	//创建一个json数组管理默认数字
	var speed={
		"veryslow":5000,
		"slow":2000,
		"normal":1000,
		"fast":700,
		"veryfast":300,
	}
	
	if(stop_time){//如果有输入的值
		if(isNaN(stop_time)){//当输入的不是数字时
			stop_time=speed[stop_time];//将Json中数据进行调用
		}
	}
	else{
		stop_time=speed.normal;//没有输入的值时默认速度
	}
	//找到起始位置及要移动的距离
	var start={};//创建起始Json
	var dis={};//创建移动的json
	//遍历json，及对起始及过程赋值
	for(var key in moveJson){
		start[key]=getStyle(obj,key);
		dis[key]=moveJson[key]-start[key];
	}

	var cunton=parseInt(stop_time/30);//时间分份数
	var n=0;//步进计数
	
	obj.timer=setInterval(function(){
		n++;//步数每次加一 
		var a=1-n/cunton;
		//遍历Json
		for(var key in moveJson){
			//定义每走一步所移动的距离
			var stop_dis=start[key]+dis[key]*(1-a*a*a);
			//判断如果要改变opacity属性时要进行变化
			if(key=="opacity"){
				obj.style.opacity=stop_dis/100;
				obj.style.filter="alpha(opacity:"+stop_dis+")";
			}
			else{
				//style[]用来写元素的属性是变量的样式
				obj.style[key]=stop_dis+'px';
			}
		}
		//运动结束停止
		if(n==cunton){
			clearInterval(obj.timer);
			callback && callback();//如果有回调函数，执行回调函数
			
		}

	},30)

}










//首页oListnav效果
function oListnav(){
	
	var oListnav=document.getElementById("listnav");
	var aListnav=oListnav.children;
	var overLays=document.getElementById("overlays");
	var aoverLays=overLays.children;
	var show_timer=null;
	var hlod_timer=null;
	var self_timer=null;
	
					
	//事件处理
	for(var i=0;i<aListnav.length;i++){
		//对li及对应的right进行编号
		aListnav[i].index=i;
		aoverLays[i].index=i;
		//绑定鼠标移入li的事件
		aListnav[i].onmouseover=function(){
			clearTimeout(hlod_timer);//清除鼠标移出li的延时影响
			clearTimeout(self_timer);//清除鼠标移出right的延时影响
			var self=this; //留住This
			//增加移入li延时，防止误触发
			show_timer=setTimeout(function(){
				for(j=0;j<aListnav.length;j++){
					aListnav[j].className="";
					aoverLays[j].style.display="none";	//显示前对right进行初始化
				}
				aListnav[self.index].className="hover";
				overLays.style.display="block";
				aoverLays[self.index].style.display="block";//对当前所在的li所对应的right进行显示
				
			},200)
			
		
		};
		//绑定鼠标移出li的事件
		aListnav[i].onmouseout=function(){
			clearTimeout(show_timer);//清除鼠标移入li的影响
			//增加鼠标移出li的延时，防止鼠标上下移动时right的抖动
			hlod_timer=setTimeout(function(){
				for(j=0;j<aListnav.length;j++){
					aListnav[j].className="";
					overLays.style.display="none";
					aoverLays[j].style.display="none";//对right进行初始化
				}
			},200)		
		};
		//绑定鼠标移到right的事件
		aoverLays[i].onmousemove=function(){
			
			clearTimeout(self_timer);//清除鼠标移出right的延时影响
			clearTimeout(hlod_timer);//终止鼠标移出li时关闭right的动作
			aListnav[this.index].className="hover";
			overLays.style.display="block";
			aoverLays[this.index].style.display="block";//保持在当前的right
			
		};
		//绑定鼠标移出right的事件
		aoverLays[i].onmouseout=function(){
	
			var self=this;//留住This
			self_timer=setTimeout(function(){//消除鼠标在right和li之间移动的抖动
				aListnav[self.index].className="";
				overLays.style.display="none";
				aoverLays[self.index].style.display="none";//移出right时关闭自己的区域
			},50)
		};
	};
}				
				
				
				