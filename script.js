let boxes= document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let newButton = document.querySelector(".new-btn")
let msgContainer = document.querySelector(".container-box")
let msg = document.querySelector(".msg")
let turnO= true
let winpattern =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]]
function disableBoxes(){
    for(let box of boxes){
        box.disabled = true
    }
}
function resetGame(){
    turnO = true
    enableBoxes()
    msgContainer.classList.add("hide")
}
function enableBoxes(){
    for(let box of boxes){
        box.disabled = false
        box.innerHTML = ""
    }
}
function showWinner(winner){
    msg.innerHTML = `Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
} 
function checkWinner(){
    for(let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerHTML
        let pos2val = boxes[pattern[1]].innerHTML
        let pos3val = boxes[pattern[2]].innerHTML
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("winner",pos1val)
                showWinner(pos1val)
            }
        }
    }
}
boxes.forEach((box)=>{
    box.addEventListener('click',function(){
       if(turnO){
        box.innerHTML ="O"
        turnO = false
       }
       else{
        box.innerHTML = "X"
        turnO = true
       }
       box.disabled = true
       checkWinner()
    })
})
newButton.addEventListener('click',resetGame)
reset.addEventListener('click',resetGame)
