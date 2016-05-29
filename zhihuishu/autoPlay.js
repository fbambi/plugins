/*
 ************************************************
 * 
 * 智慧树播放插件 V1.0 @Javascript
 *
 * 课程视频页面运行即可
 *
 * 功能: 1.自动播放下集视频
 *		 2.自动处理视频弹题
 *		 3.自动处理升级提示
 *
 * 输出形式: 本节课程进度XY% (步长5s)
 *
 * 实例输出: 本节课程进度47%
 *
 * 如有问题联系开发者 ↓↓↓↓
 *
 * 	||		Copyright ©2016 LDZ
 * 	||		E-mail: ldzwow@foxmail.com
 * 	||		Github: https://github.com/fbambi
 * 
 *  								2016.5.28
 */



(function autoPlay() {

	var i, nextCourse, box, divs,
		divs = document.getElementsByTagName("div"),
		l = divs.length;

	for (i = 0; i < l; i++) {
		if (divs[i].className == "progressbar_box_tip") {
			break;
		}
	}

	//时间检查
	function checkTime() {

		box = divs[i].getElementsByTagName("span")[0].textContent;

		if (box.match(/\d{2,3}/) !== null) {


			// 时间到
			if (box.match(/\d{2,3}/)[0] == "100") {
				question();
				levelUp();
				isCourse(divs[i].parentNode);

				// 时间未到
			} else {
				console.log("本节课程进度" + box.match(/\d{2,3}/)[0] + "%");
				console.log(Date());
				question();
				levelUp();

				setTimeout(function() {
					checkTime();
				}, 5000);
			}


		} else {
			setTimeout(function() {
				checkTime();
			}, 1000);
		}
	}


	// 节点判定
	function isCourse(thisCourse) {
		nextCourse = thisCourse.nextElementSibling;
		console.log(nextCourse.className);

		// 是课程视频
		if (nextCourse.className == "clearfix video lesson") {

			nextCourse.click();
			console.log("跳转下一集");

			setTimeout(function() {
				autoPlay();
			}, 40000);

			// 不是课程视频
		} else {
			console.log("not lesson");
			isCourse(nextCourse);

		}
	}



	// 弹出式问题处理
	function question() {
		var divss, length;

		if (document.getElementById("tmDialog_iframe")) {
			as = document.getElementsByTagName("a");
			length = as.length;

			for (var i = 0; i < length; i++) {
				if (as[i].className == "popbtn_cancel") {
					as[i].click();
					break;
				}
			}
		}
	}


	// 升级问题处理
	function levelUp() {
		var as, length;

		if (document.getElementById("popbox_title")) {
			console.log("found");
			as = document.getElementsByTagName("a");
			length = as.length;
			for (var i = 0; i < length; i++) {
				if (as[i].className == "popboxes_close tmui_txt_hidd") {
					console.log("found");
					as[i].click();
					console.log("click");
					break;
				}
			}
		}
	}



	console.log("载入成功...");
	checkTime();

})();