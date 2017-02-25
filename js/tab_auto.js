			
			//自动轮播
			function img_auto(id){
				var oPic=document.getElementById(id);
				var ol=oPic.getElementsByClassName("ol")[0];
				var numBtn=ol.children;
				var oUl=oPic.getElementsByClassName("list_banner")[0];
				var aImg=oUl.children;
				//左右按钮
				var leftBtn=oPic.children[0];
				var rightBtn=oPic.children[1];
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
			//选项卡
			function tab(id,obj){
				var aTab=document.getElementsByClassName(id);
				var aflright=document.getElementsByClassName(obj);
				
				for(var k=0;k<aTab.length;k++){
					
					(function (t){
						var aflwright=aflright[t].children;
						var oTab=aTab[t];
						var aLi=oTab.getElementsByTagName("a");
						var aSpan=oTab.getElementsByTagName("span");
						
						aSpan[0].style.display="none"
						for(var i=0;i<aLi.length;i++){
							aLi[i].index=i;
							aLi[0].className="floow-nav";
							aLi[i].onmouseover=function(){
								for(var j=0;j<aLi.length;j++){
									
									aLi[j].className='';

									aflwright[j+1].style.display="none";
									if(j!=aLi.length-1){
										aSpan[j].style.display="block";
									}
								}
								aflwright[this.index+1].style.display="block";
								this.className="floow-nav";
								if(this.index==0){
									aSpan[this.index].style.display="none";
								}
								else if(this.index==aLi.length-1){
									aSpan[this.index-1].style.display="none";
								}else{
									aSpan[this.index].style.display="none";
									aSpan[this.index-1].style.display="none";
								}
							}
		
						}
			
					})(k);
					
					
				}
				
				
			}
			//侧边
			function fix(id){
				var oCblf=document.getElementById(id);
				var aLi=oCblf.children;
				var aFloow=document.getElementsByClassName("floow");
				var arr=['服装','美妆','手机','家电','数码'];
				window.onscroll=function(){
					var t=document.documentElement.scrollTop||document.body.scrollTop;
					console.log(t)
					if(t<=document.documentElement.clientHeight||t>=aFloow[4].offsetTop+600){
						oCblf.style.display="none";
					}
					else{
						oCblf.style.display="block";
						oCblf.style.top=t+'px';
						
						if(t<=aFloow[0].offsetTop){
							for(var i=0;i<aLi.length;i++){
								aLi[i].children[0].innerHTML=(i+1)+'F';
								aLi[i].children[0].className=""
							}

						}
						for(var j=0;j<aLi.length-1;j++){
							if(t>=aFloow[j].offsetTop-280 &&t <aFloow[j+1].offsetTop+200){
								for(var i=0;i<aLi.length;i++){
									aLi[i].children[0].innerHTML=(i+1)+'F';
									aLi[i].children[0].className=""
								}
								aLi[j].children[0].innerHTML=arr[j];
								aLi[j].children[0].className="ac"
							}
						
						}
						if(t>=aFloow[4].offsetTop-280){
							for(var i=0;i<aLi.length;i++){
								aLi[i].children[0].innerHTML=(i+1)+'F';
								aLi[i].children[0].className=""
							}
							aLi[4].children[0].innerHTML=arr[4];
							aLi[4].children[0].className="ac";
						}
						
					}
					
				}
				
				
				
				
			}
				
	


