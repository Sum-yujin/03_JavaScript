/* 요소 불러오기 */
const btn = document.querySelector("#btn");
const numBox = document.querySelector("#num-box");

btn.addEventListener("click", () =>{

  const div = document.createElement("div");
  div.className = "num";
  let count = 1;

   for(let i = 1; i<46; i++){
  
  }
  numBox.prepend(div);
});
