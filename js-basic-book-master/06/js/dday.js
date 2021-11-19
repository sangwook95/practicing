var now = new Date();
var firstday = new Date("2021-09-08");

var toNow = now.getTime();
var toFirst = firstday.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

document.querySelector("#accent").innerText = passedDay + "일";

/* 200일째 방법을  더 간편하게, 날짜(~일후)를 매개변수를 두는 함수 만들어 사용*/
function calcDate(days) {
    var future = toFirst + days * (1000 * 60 * 60 * 24)/*일*/;
    var someday = new Date(future);
    /*여기서부터는 someday의 월 일 년도를 변수로 저장*/
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();

    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";
}
calcDate(100);
calcDate(365);
calcDate(500);



/* 200일째 */
var future = toFirst + 200 * (1000 * 60 * 60 * 24);
var someday = new Date(future);

var year = someday.getFullYear();
var month = someday.getMonth() + 1;
var date = someday.getDate();

document.querySelector("#date200").innerText = year + "년" + month + "월" + date + "일";