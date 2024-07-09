
// 준비한 이미지 파일명을 저장할 배열
const images = ["코카투.jpg","태공쓰.jpg","태식이.jpg","태식이네.jpg"
                ,"쿼카1.jpg","쿼카2.jpg","쿼카3.jpg","쿼카4.jpg"];




// /* 문서 전체에 keydown 이벤트 리스너 추가 */
// document.addEventListener("keydown",function(e){
//   // e : 이벤트 객체
//   // e.key : 입력한 key
//   console.log(e.key);
// })

const key = document.querySelectorAll(".container > div");

for(let i = 0 ; i < key.length ; i++){

  document.addEventListener("keydown", function(e){

    for(let i = 0 ; i < key.length ; i++){

      if(e.key.toUpperCase() === key[i].innerText){
        
        key[i].style.backgroundColor = "green";
        key[i].style.backgroundImage = `url("../images/13_입력된키확인/${images[i]}")`;
        key[i].style.color = "rgba(0, 0, 0, 0)";
      }
    }

  })

  document.addEventListener("keyup", function(e){
    for(let i = 0 ; i < key.length ; i++){

      if(e.key.toUpperCase() === key[i].innerText){
        key[i].style.backgroundColor = "white";
        key[i].style.backgroundImage = "none";
        key[i].style.color = "rgba(0, 0, 0, 1)";
      }
    }

  })

}



/** 수업 풀이 */

// const keys = document.querySelectorAll(".container > div");
// // 입력키 :  Q W E R
// // 인덱스 :  0 1 2 3

// /* 문서 전체에 keydown 이벤트 리스너 추가*/
// document.addEventListener("keydown", function(e){
//   // e : 이벤트 객체
//   // e.key : 입력한 key
//   // console.log(e.key);

//   let index; // 인덱스를 저장할 변수

//   // 문자열.toUpperCase() : 문자열을 대문자로 변환
//   // 문자열.toLowerCase() : 문자열을 소문자로 변환

//   switch(e.key.toLowerCase()){
//     case 'q' : index = 0; break;
//     case 'w' : index = 1; break;
//     case 'e' : index = 2; break;
//     case 'r' : index = 3; break;
//     default : return; // 다른 키 입력 시 종료
//   }

//   // keys[index].style.backgroundColor = "pink";

//   // 배경을 이미지로 지정
//   keys[index].style.backgroundImage = `url("../images/13_입력된키확인/${images[index]}")`;

//   // 글자색 투명으로 변경
//   // - rgba(red,green,blue, alpha)
//   // - rgb 값은 0 ~ 255 / alpha(투명도) 0(투명) ~ 1(불투명)

//   keys[index].style.color = "rgba(0, 0, 0, 0)";

//   // if(e.key === 'q'){
//   //   keys[0].style.backgroundColor = "pink";

//   // } else if(e.key === 'w'){
//   //   keys[1].style.backgroundColor = "pink";
//   // }

// });


// document.addEventListener("keyup", function(e){
//   // e : 이벤트 객체
//   // e.key : 입력한 key
//   // console.log(e.key);

//   let index; // 인덱스를 저장할 변수

//   switch(e.key.toLowerCase()){
//     case 'q' : index = 0; break;
//     case 'w' : index = 1; break;
//     case 'e' : index = 2; break;
//     case 'r' : index = 3; break;
//     default : return; // 다른 키 입력 시 종료
//   }

//   // keys[index].style.backgroundColor = "white";

//   // 배경 이미지 제거
//   keys[index].style.backgroundImage = "none";

//   // 글자색 검정
//   keys[index].style.color = "rgba(0, 0, 0, 1)";

// })







/* 이미지가 마우스 따라 다니게 하기 */

const cursorImage = document.querySelector("#cursorImage");

// 문서 전체에 "mousemove"(마우스가 움직였을 때) 감지 추가
document.addEventListener("mousemove", function(e){

  // console.log(e);
  // e.pageX : 가로 방향 마우스 위치(왼쪽에서 떨어진 px)
  // e.pageY : 세로 방향 마우스 위치(위쪽에서 떨어진 px)

  cursorImage.style.left = `${e.pageX - 30}px` ;

  cursorImage.style.top = `${e.pageY + 15}px` ;
})