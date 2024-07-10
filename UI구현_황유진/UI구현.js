/* input들 가져오기 */
const w = document.querySelector("#width");
const h = document.querySelector("#height");
const fs = document.querySelector("#fontSize");
const fc = document.querySelector("#color");
const bg = document.querySelector("#background-color");
const it = document.querySelector("#inputText");


/* 결과값 출력 */
const btn = document.querySelector("#change");
const result = document.querySelector("#result");
const tb = document.querySelector(".text-box");

btn.addEventListener("click",function(){
  
  /* 버튼들 가져오기 */
  const fontWeight = document.querySelector("[name = font]:checked");
  const row = document.querySelector("[name = row]:checked");
  const col = document.querySelector("[name = col]:checked");
  
  let fw;
  if(fontWeight === null) fw = `normal`;
  else                    fw = fontWeight.value;
  console.log(fw, fontWeight);
  let r;
  if(row === null) r = `start`;
  else             r = row.value;
  let c;
  if(col === null) c = `start`;
  else             c = col.value;
 
  result.style.backgroundColor = bg.value;
  result.style.width = `${w.value}px`;
  result.style.height = `${h.value}px`;
  result.style.fontSize = `${fs.value}px`;
  result.style.color = fc.value;
  tb.innerText = it.value; 
  result.style.border = `3px solid black`;
  result.style.alignItems = c;
  result.style.justifyContent = r;
  result.style.fontWeight = fw;
})

