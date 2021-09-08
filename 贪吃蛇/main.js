import Game from "./game.js"
const g=new Game('.map','.score')
const startBtn=document.querySelector('.start')
const stopBtn=document.querySelector('.stop')
const restartBtn=document.querySelector('.restart')
startBtn.addEventListener('click',()=>g.start())
stopBtn.addEventListener('click',()=>g.stop())
restartBtn.addEventListener('click',()=>g.restart())