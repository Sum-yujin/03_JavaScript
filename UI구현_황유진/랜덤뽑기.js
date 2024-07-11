
const start = document.querySelector("#startRandom");

start.addEventListener("click", ()=>{

  const input = document.querySelectorAll("#input-box");

  const random = Math.floor(Math.random() * (input.length)) -1;
  alert=(`결과 : ${input[random].value}`);
  
  
})