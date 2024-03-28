
let startFun;

document.getElementById('start').addEventListener('click',()=>{
    startFun=setInterval(() => {
        const red=Math.floor(Math.random()*256);
        const blue=Math.floor(Math.random()*256);
        const green=Math.floor(Math.random()*256);
        document.body.style.background=`rgb(${red}, ${blue}, ${green}`;
    },1500);
});

document.getElementById('stop').addEventListener('click',()=> {
    if (startFun) {
        clearInterval(startFun);
        startFun = undefined; // Reset startFun to undefined after clearing interval
    }
})