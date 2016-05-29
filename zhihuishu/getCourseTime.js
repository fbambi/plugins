/*
 ****************************************
 * 
 * 智慧树课时统计插件 V1.1 @Javascript
 *
 * 课程视频页面运行即可
 * 输出形式: 课程名称:《XXX》
 *            课程时长：X小时Y分钟
 *			  已经观看：X小时Y分钟,进度XY%
 *
 * 测试页面: http://online.zhihuishu.com/CreateCourse/learning/videoList?courseId=2003341&rid=3032
 * 实例输出: 课程名称《 食品安全与日常饮食 》
 * 		 	 课程时间：6小时21分钟
 * 		 	 已经观看：2小时5分钟,进度32%
 *
 * 如有问题联系开发者 ↓↓↓↓
 *
 * 	||		Copyright ©2016 LDZ
 * 	||		E-mail: ldzwow@foxmail.com
 * 	||		Github: https://github.com/fbambi
 * 
 *  								2016.5.26
 */



(function getTime() {
	var spans = document.getElementsByTagName("span"),
		courseName,
		watchedTime = [],
		l = spans.length,
		coursrTime = {},
		timeSpans = [];

	for (var i = 0; i < l; i++) {

		if (spans[i].className == "time fl") {
			timeSpans.push(spans[i].textContent);

			if (spans[i].previousElementSibling.previousElementSibling.className == "time_ico3 fl") {
				watchedTime.push(spans[i].textContent);
			}

		} else if (spans[i].className == "course_name") {
			courseName = spans[i].textContent;
		}

	}

	function turnTime(arr) {

		var l = arr.length,
			minutes = 0,
			seconds = 0,
			hours = 0,
			timeReturn;

		for (var i = 0; i < l; i++) {

			minutes += parseInt(arr[i].slice(3, 5), 10);
			seconds += parseInt(arr[i].slice(5), 10);

			if (seconds >= 60) {

				minutes += Math.floor(seconds / 60);
				seconds = seconds % 60;
			}

			if (minutes >= 60) {

				hours += Math.floor(minutes / 60);
				minutes = minutes % 60;
			}
		}

		timeReturn = {
			hours: hours,
			minutes: minutes
		}

		return timeReturn;
	}

	courseTime = turnTime(timeSpans);
	console.log("课程名称《", courseName, "》");
	console.log("课程时间：" + courseTime.hours + "小时" + courseTime.minutes + "分钟");

	didTime = turnTime(watchedTime);
	console.log("已经观看：" + didTime.hours + "小时" + didTime.minutes + "分钟,进度" +
		Math.floor((didTime.hours * 60 + didTime.minutes) / (courseTime.hours * 60 + courseTime.minutes) * 100) + "%");

})();