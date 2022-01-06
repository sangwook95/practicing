let target = document.querySelector("#dynamic");

//커서 깜빡임 효과 
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);

//쪼개진 문자 배열 생성
function randomString() {
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//문자열 1개씩 추가 함수 (main 함수)
function dynamic(randomArr) {

    if(randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function() {
        dynamic(randomArr);
    },100);
    }
    else {
        setTimeout(resetTyping, 3000)
    }
}

dynamic(randomString());

//타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}



