function getDate(dt) {
	// 获取年
	var year = dt.getFullYear();
	// 获取月
	var month = dt.getMonth();
	month = month < 10 ? "0" + month : month;
	// 获取日
	var day = dt.getDate();
	// 获取时
	var hour = dt.getHours();
	hour = hour < 10 ? "0" + hour : hour;
	// 获取分
	var minuts = dt.getMinutes();
	// 获取秒
	var seconds = dt.getSeconds();
	return year + "年" + month + "月" + day + "日 " + hour + "：" + minuts + ":" + seconds;
}

function my$(id) {
	return document.getElementById(id);
}

// 设置任意的标签中间的任意的文本内容
function setInnerText(element, text) {
	if (typeof element.textContent == "undefined") { //不支持
		element.innerText = text;
	} else {
		element.textContent = text;
	}
}
// 获取任意标签中间的文本内容
function getInnerText(element) {
	if (typeof element.textContent == "undefined") { //不支持
		return element.innerText;
	} else {
		return element.textContent;
	}
}

// 为任意元素,绑定任意的事件
function addEventListener(element, type, fn) {
	// 判断浏览器是否支持这个方法
	if (element.addEventListener) {
		element.addEventListener(type, fn, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + type, fn);
	} else {
		element["on" + type] = fn;
	}
}
// 为任意元素，解绑事件的兼容
function removeEventListener(element, type, fn) {
	if (element.removeEventListener) {
		element.removeEventListener(type, fn, false);
	} else if (element.dattachEvent) {
		element.dattachEvent("on" + type, fn);
	} else {
		element["on" + type] = null;
	}
};
// 任意一个元素移动到指定的目标位置
/* element:元素
 attr：属性名
 target：目标距离*/
function animate(element, attr, target) {
	clearInterval(element.timeId);
	element.timeId = setInterval(function() {
		// 获取div的当前位置
		var current = parseInt(getStyle(element, attr)); //数字类型 没有px
		// 每次移动多少像素
		var step = 10;
		step = current < target ? step : -step;
		// 每次移动后的距离
		current += step;
		// 判断当前移动后的位置是否到达目标位置
		if (Math.abs(target - current) > Math.abs(step)) {
			element.style[attr] = current + "px";
		} else {
			clearInterval(element.timeId);
			element.style[attr] = target + "px";
		}
	}, 10);
}
// 获取滚动的距离
function getScroll() {
	return {
		top1: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
		left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
	}
}
// 获取任意一个元素的任意一个属性值
function getStyle(element, attr) {
	// 判断浏览器是否支持
	return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}
