			//自动轮播
			function img_btn(id){
				var oPic=document.getElementById(id);
				var ol=oPic.getElementsByClassName("smpic")[0];
				var numBtn=ol.children;
				var oUl=oPic.getElementsByClassName("pic")[0];
				var aImg=oUl.children;
				
				//左右按钮
				var leftBtn=oPic.children[1];
				var rightBtn=oPic.children[2];
				//oUl要走的li宽的个数
				var show_num=0;
				//读取LI的宽
				var Img_w=getStyle(aImg[0],"width");
				var timer='';
				var t=0;
				oUl.style.width=Img_w*aImg.length+'px';
	
				//首次运行，消除浏览器刷新时的Bug
				run();
				//封装自动循环的函数
				function auto(){
					timer=setInterval(run,2000);
				};
				//自动循环开始
				auto();
				//鼠标移到循环区域暂停
				oPic.onmouseover=function(){
					clearInterval(timer);
					leftBtn.style.display="block";
					rightBtn.style.display="block";
				}
				//鼠标移出循环区域继续循环
				oPic.onmouseout=function(){
					auto();
					leftBtn.style.display="none";
					rightBtn.style.display="none";					
				}				
				//run函数
				function run(){
					show_num++;
					if(show_num>=numBtn.length){show_num=0;};
					
					for(var j=0;j<numBtn.length;j++){
						numBtn[j].className='';
					}
					numBtn[show_num].className="ac";
					hxsd_move(oUl,{"left":-show_num*Img_w});

				}
				
			
				//鼠标点击事件的处理
				for (var i=0;i<numBtn.length;i++){
					numBtn[i].index=i;
					numBtn[i].onclick=function(){
					
						for(var j=0;j<numBtn.length;j++){
							numBtn[j].className='';
						}
						this.className="ac";
						show_num=this.index;
						hxsd_move(oUl,{"left":-show_num*Img_w});
					}
				}
				//左右按钮点击事件处理
				leftBtn.onclick=function(){
					show_num--;
					if(show_num<=0){show_num=0};
					for(var j=0;j<numBtn.length;j++){
						numBtn[j].className='';
					}
					numBtn[show_num].className="ac";
					hxsd_move(oUl,{"left":-show_num*Img_w});
				}
				rightBtn.onclick=function(){
					show_num++;
					if(show_num>=numBtn.length){show_num=numBtn.length-1};
					
					for(var j=0;j<numBtn.length;j++){
						numBtn[j].className='';
					}
					numBtn[show_num].className="ac";
					hxsd_move(oUl,{"left":-show_num*Img_w});
				}

			}
			//放大镜
			function Img_amp(id){
				var oDesc=document.getElementById("desc");
				var oId=document.getElementById(id);
				var oPic=oId.children[0];
				var oXiao=document.getElementById("xiao");
				var oAmp=document.getElementById("amp");
				var oImg=document.getElementById("oimg");
				var oL=oId.children[3];
				
				var aLi=oL.children;
				
				oPic.onmousemove=function(ev){
					oXiao.style.display=amp.style.display='block';
					var oEv=ev||window.event;
					for(var i=0;i<aLi.length;i++){
						if(aLi[i].className=="ac"){
							oImg.src=aLi[i].children[0].src;
						}
						
					}
					
					
					
					var l=oEv.pageX-oPic.offsetLeft-oDesc.offsetLeft-oXiao.offsetWidth/2;
					var t=oEv.pageY-oPic.offsetTop-oDesc.offsetTop-oXiao.offsetHeight/2;
					
					var rateX=oAmp.offsetWidth/oXiao.offsetWidth;
					var rateY=oAmp.offsetHeight/oXiao.offsetHeight;;
					if(l<=0) l=0;
					if(t<=0) t=0;
					if(l>=oPic.offsetWidth-oXiao.offsetWidth) l=oPic.offsetWidth-oXiao.offsetWidth;
					if(t>=oPic.offsetHeight-oXiao.offsetHeight) t=oPic.offsetHeight-oXiao.offsetHeight;
					
					oXiao.style.left=l+'px';
					oXiao.style.top=t+'px';
					
					oImg.style.width=oPic.offsetWidth*rateX+'px';
					oImg.style.height=oPic.offsetHeight*rateY+'px';
					oImg.style.left=-l*rateX+'px';
					oImg.style.top=-t*rateY+'px';
					
				}
				oPic.onmouseout=function(){
					oXiao.style.display=amp.style.display='none';
				}	
				
			}
			//切换样式
			function yangshi(id){
				var oInfo3=document.getElementById(id);
				var aInfo3=oInfo3.children;
				var aSpan=oInfo3.getElementsByTagName('span');
				for (var i=1;i<3;i++){
					aInfo3[i].index=i;
					aInfo3[i].onclick=function(){
						
						
						if(this.style.border=="3px solid red"){
							this.style.border="3px solid #fff";
							aSpan[this.index].style.display="none";
						}else{
							this.style.border="3px solid red";
							aSpan[this.index].style.display="block";
						}

					}
	
				}
			}
			//白条切换样式
			function baitiao(id){
				var oInfo32=document.getElementById(id);
				var aInfo32=oInfo32.children;
				var aSpan=oInfo32.getElementsByTagName('span');
				aInfo32[0].style.border="3px solid #fff";
				for (var i=1;i<aSpan.length;i++){
					aInfo32[i].index=i;
					aInfo32[i].onclick=function(){
						
						
						if(this.style.border=="3px solid red"){
							this.style.border="3px solid #fff";
							aSpan[this.index].style.display="none";
						}else{
							for(var j=0;j<aSpan.length;j++){
								aInfo32[j].style.border="3px solid #fff";
								aSpan[j].style.display="none";
							}
							this.style.border="3px solid red";
							aSpan[this.index].style.display="block";
						}

					}
	
				}
			}
			//购物车
			function buycar(id){
				var oBuybox=document.getElementById("buybox");
				var aBuybox=oBuybox.children;
				var oValue=1;
				aBuybox[1].onclick=function(){
					oValue++;
					aBuybox[0].value=oValue;

				}
				aBuybox[2].onclick=function(){
					oValue--;
					if(oValue<=1){
						oValue=1;
					}
					aBuybox[0].value=oValue;

				}
	
			}
			//选项卡
			function itemtab(id){
				var oMain2=document.getElementById(id);
				var aMain2=oMain2.children;
				var atitle=aMain2[0].children;
				var acont=aMain2[1].children;
				
				for (var i=0;i<atitle.length;i++){
					atitle[i].index=i;
					atitle[i].onclick=function(){
						
						for(var j=0;j<atitle.length;j++){
							acont[j].style.display="none";
							atitle[j].className="";
						}
						this.className="active";
						acont[this.index].style.display="block";

					}
	
				}
			}