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
	if (typeof element.textContent == "undefined") {//不支持
		element.innerText = text;
	} else {
		element.textContent = text;
	}
}
// 获取任意标签中间的文本内容
function getInnerText(element) {
	if (typeof element.textContent == "undefined") {//不支持
		return element.innerText;
	} else {
		return element.textContent;
	}
}
