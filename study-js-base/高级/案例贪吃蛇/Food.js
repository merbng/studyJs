(function() {
	// 用来保存每个小方块食物
	var elements = [];

	function Food(x, y, width, height, color) {
		//横纵左边
		this.x = x || 0;
		this.y = y || 0;
		// 宽和高
		this.width = width || 20;
		this.height = height || 20;
		// 背景颜色
		this.color = color || "green";
	}
	//在页面上显示这个食物
	Food.prototype.init = function(map) {
		// 先删除这个小食物
		remove();
		//创建div
		var div = document.createElement('div');
		//把div加到map中
		map.append(div);
		//设置div的样式
		div.style.width = this.width + "px";
		div.style.height = this.height + "px";
		div.style.backgroundColor = this.color;
		//脱离文档流
		div.style.position = "absolute";
		// 随机横纵坐标
		this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
		this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
		div.style.left = this.x + "px";
		div.style.top = this.y + "px";
		//把div加到数组elements中
		elements.push(div);
	}
	//移除食物
	function remove() {
		for (i = 0; i < elements.length; i++) {
			var ele = elements[i];
			//找到这个子元素的父级元素。然后删除这个子元素
			ele.parentNode.removeChild(ele);
			elements.splice(i, i);
		}
	};
})
