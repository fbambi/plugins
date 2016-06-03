(function getcls() {
  //var dorName = prompt("请输入剧名", "");

  var dorName = "家族的形式";
  var titlll = document.getElementsByTagName("a");
  var aimtr;
  var alink;
  var content = "";
  var reg = /^[\d]+.[\d]+$/;
  for (var i = 0; i < titlll.length; i++) {
    if (titlll[i].textContent == dorName) {
      alink = titlll[i];
      aimtr = titlll[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    }
  }

  var arrlll = aimtr.getElementsByTagName("td");
  var cls = [];
  var k = 0;
  for (var i = 0; i < arrlll.length; i++) {
    if (reg.test(arrlll[i].textContent)) {
      cls[k] = arrlll[i];

      k = k + 1;

    }
  }



  content = content + "   剧名：" + arrlll[3].textContent.match(/[\u4E00-\u9FA5]+/) + "...\r\n" +
    "   电视台：" + arrlll[4].textContent + "...\r\n" +
    "   播放时间：每周" + arrlll[5].textContent + "...\r\n" +
    "   ===================" + "...\r\n" +
    "   收视率：" + "...\r\n";

  for (var i = 0; i < 9; i++) {
    content += "    第" + (i + 1) + "周" + "     " + cls[i].textContent + "%" + "...\r\n";
  }
  content += "    第10周" + "    " + cls[9].textContent + "%" + "...\r\n";
  content += "    平均" + "    " + cls[10].textContent + "%" + "...\r\n";

  function downloadFile(aLink, fileName, content) {
    aLink.download = fileName;
    aLink.href = "data:text/plain," + content;
  }

  downloadFile(alink, dorName, content);
  alert(content);
})();