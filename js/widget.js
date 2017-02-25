

//蒙版组件
function modal_lady(){
	var oModal=document.createElement('div');
	oModal.id="black_modal";
	oModal.className="modal";
	document.body.appendChild(oModal);	
};

//登录框组件
function crat(){
	
	//调用蒙版
	modal_lady();
	//插入弹框组件
	var oBox=document.createElement('div');
	oBox.id="box";
	oBox.className="popbox";
	
	oBox.innerHTML='<h4 id="title">用户登录</h4>'+
	'<a id="closeBtn" href="javascript:;">x</a>'+
	'<p><label>用户名：<input type="text"></label></p>'+
	'<p><label>密   码：<input type="password" ></label></p>'+
	'<p><button id="logonBtn" type="button">登录</button></p>';
	document.body.appendChild(oBox);
	
	
	
	var oModal=document.getElementById('black_modal');
	var oCloseBtn=document.getElementById('closeBtn');
	var oLogonBtn=document.getElementById('logonBtn');
	var title=document.getElementById('title');
	
	
	popshow(oBox,oModal);
	drag(oBox,title)
	oCloseBtn.onclick=function(){
		document.body.removeChild(oModal);
		document.body.removeChild(oBox);
		
	}
	
	
	
	
}










