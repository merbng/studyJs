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