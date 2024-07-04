

/** 글자 수 세기 */

function checkCount(){
  const input1 = document.getElementById("input1");
  const count1 = document.getElementById("count1");
  const count2 = document.getElementById("count2");

  count1.innerText = input1.value.length;    
}


/** 상품 갯수 선택 및 금액 확인 */

const num = document.getElementById("number");
const price = document.getElementById("price");
let n1 = 1;
let p1 = 1000;

num.innerText = n1;

function plus(){
  n1++;
  num.innerText = n1;
  price.innerHTML = "<h4> 내실 금액 : " + p1 * n1 + "원 <h4>";
  console.log(`p클릭후: ${v1},${p1},${n1}`);
}

function minus(){
  n1--;
  if(n1 < 0){
    n1 = 0;
    return;
  }
  num.innerText = n1;
  
  console.log(`m클릭후: ${v1}`);
}


price.innerHTML = "<h4> 내실 금액 : " + v1 + "원 <h4>";

