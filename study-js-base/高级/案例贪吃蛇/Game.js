(function() {
	// 该变量的目的就是为了保存游戏Game的实例对象
	var that = null;

	function Game(map) {
		this.food = new Food();
		this.snake = new Snake();
		this.map = map;
		that = this; //保存当前的实例对象到that变量中========此时that就是this
	};
	//初始化游戏，可以设置小蛇和食物显示出来
	Game.prototype.init = function() {
		// 食物初始化
		this.food.init(this.map);
		// 小蛇初始化
		this.snake.init(this.map);
		// 调用自动移动小蛇的方法
		this.runSnake(this.food, this.map);
		// 调用按键的方法
		this.bindKey();
	};
	// 设置小蛇可以自动跑起来
	Game.prototype.runSnake = function() {
		// 自动去移动
		var timeId = setInterval(function() {
			// 移动小蛇
			this.snake.move(food, map);
			// 初始化小蛇
			this.snake.init(map);
			// 横坐标的最大值
			var maxX = map.offsetWidth / this.snake.width;
			// 纵坐标最大值
			var maxY = map.offsetHeight / this.snake.height;
			// 小蛇的头的坐标
			var heardX = this.snake.body[0].x;
			var heardY = this.snake.body[0].y;
			// 横坐标
			if (heardX < 0 || heardX >= maxX) {
				// 撞墙了，停止定时器
				clearInterval(timeId);
				alert("游戏结束");
			}
			// 纵坐标
			if (heardY < 0 || heardY >= maxY) {
				clearInterval(timeId);
				alert("游戏结束");
			}

		}.bind(that), 300);
	};
	Game.prototype.bindKey = function() {
		document.addEventListener("keydown", function(e) {
			switch (e.keyCode) {
				case 37:
					this.snake.direction = "left";
					break;
				case 38:
					this.snake.direction = "top";
					break;
				case 39:
					this.snake.direction = "right";
					break;
				case 40:
					this.snake.direction = "bottom";
					break;
			}
		})
	};
	window.Game = Game;
}())
