let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".reset");
let messageContainer = document.querySelector(".msg-container")
let msg =  document.querySelector(".msg")
let turnO = true;

const winPtrn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

newGame.addEventListener("click",()=>{
    turnO = true;
    enableBtns();
    messageContainer.classList.add("hide");
});

const disableBtns = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBtns = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const showWinner = (winner)=>{
    msg.innerText = `Congratulations the winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBtns();
} 

const checkWinner = () => {
  for (let pattern of winPtrn) {
    let pos1Val = boxes[pattern[0]].innerText; 
    let pos2Val = boxes[pattern[1]].innerText; 
    let pos3Val = boxes[pattern[2]].innerText; 

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val == pos2Val && pos2Val == pos3Val){
            // console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
    }
  }
};
