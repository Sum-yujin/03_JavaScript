// User가 낼 이미지 파일명을 저장할 배열
const user = ["가위L.png","보L.png","바위L.png"];

//  com이 낼 이미지 파일명을 저장할 배열
const com = ["가위R.png","보R.png","바위R.png"];

// 이미지가 표시될 공간
const imgUser = document.getElementById("#img-box");
// 버튼 불러오기
const btn = document.querySelectorAll("#hand");
const start = document.querySelectorAll("#start");

start.addEventListener("click",function(){

  let num = prompt("진행할 판 수를 입력하세요");
})