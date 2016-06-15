/*
 ************************************************
 *
 *      南京航空航天大学
 *      2017届本科毕业生职业定位调查问卷(http://yunsi.nuaa.edu.cn/bkwj3/Index.asp)
 *      自动填写插件V1.0 @Javascript
 *
 * 使用方法:问卷页面F12运行，根据提示填写主观信息即可
 *
 * 功能: 1.客观选项自动处理
 *		2.主观选项统一填写
 *      3.自动匹配学院
 *
 *
 * 如有问题联系开发者 ↓↓↓↓
 *
 * 	||		Copyright ©2016 LDZ
 * 	||		E-mail: ldzwow@foxmail.com
 * 	||		Github: https://github.com/fbambi
 *
 *  								2016.6.15
 */



(function() {
    var radio = document.querySelectorAll("input[msg]"),
        number, whichcollege, sex, major, salary, conf,
        l = radio.length;

    number = prompt("你的学号是:", "0213106").trim();
    sex = prompt("你的性别是（男->1，女->0）", "1").trim();
    major = prompt("你的专业是", "飞行器动力工程").trim();
    salary = prompt("你的期望月薪是", "3000").trim();
    email = prompt("你的邮箱是", "@nuaa.edu.cn").trim();

    function isNumber(number) {
        number = (number.length === 9) ? number : null;
        if (!number) {
            isNumber(prompt("请输入正确的学号", "0213106").trim());
        } else {
            document.querySelector("input[name=Options_0]").value = number;
            whichcollege = parseInt(number.slice(0, 2));
            return;
        }
    }

    function isNum(clg) {
        clg = (clg > 12) ? clg - 2 : clg;
        document.querySelector("select[name=Options_2]").querySelectorAll("option[value]")[clg].selected = true;
    }

    function isSex(sex) {
        sex = (sex.match(/^1$/) ^ sex.match(/^0$/)) ? sex : null;
        if (!sex) {
            isSex(prompt("请重新输入性别（男->1，女->0）", "1").trim());
        } else {
            document.querySelectorAll("input[name=Options_1]")[Math.abs(1 - sex)].selected = true;
            return;
        }
    }

    function isMajor(major) {
        major = (!major) ? null : major;
        if (!major) {
            isMajor(prompt("请输入专业").trim());
        } else {
            document.querySelector("input[name=Options_3]").value = major;
            return;
        }
    }

    function isEmail(email) {
        email = (email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+.[a-zA-Z0-9_-]+$|^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+.[a-zA-Z0-9_-]+.[a-zA-Z0-9_-]+$/)) ? email : (confirm("您输入的邮箱为" + email + "，格式不正确，要继续吗？") ? email : null);
        if (!email) {
            isEmail(prompt("请再次输入邮箱", "@nuaa.edu.cn"));
        } else {
            radio[radio.length - 1].value = email;
        }
    }

    isNumber(number);
    isNum(whichcollege);
    isSex(sex);
    isMajor(major);
    isEmail(email);

    document.querySelector("textarea[name=Options_46]").value = "没有什么建议";
    document.querySelector("textarea[name=Options_47]").value = "没有什么建议";
    document.querySelector("input[name=Options_18]").value = salary;
    document.querySelector("input[name=Options_32]").click();

    for (var i = 0; i < l; i++) {
        if (radio[i].previousElementSibling.previousElementSibling.className === radio[i].className) {
            radio[i].previousElementSibling.previousElementSibling.click();
        } else {
            radio[i].click();
        }
    }

    conf = (confirm("你不想检查，现在就提交吗？")) ? document.getElementById("Submit").querySelector("input[type=submit]").click() : null;

})();
