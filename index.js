let time=document.querySelector(".time");
const play=document.querySelector(".play");
const reset=document.querySelector(".reset");
let sec=0;
let min=0;
let hr=0;
let f=0;
let t=0;

play.addEventListener('click',function(){
        if(f===1){
                t=window.setInterval(watch,1000);
                play.innerHTML='<img src="./pause.png" alt="">';
                f=0;
        }else{
                window.clearInterval(t);
                play.innerHTML='<img src="./play.png" alt="">';
                f=1; 
        }
})

reset.addEventListener('click',function(){
        window.clearInterval(t);
        play.innerHTML='<img src="./play.png" alt="">';
        f=1;
        sec=0;
        min=0;
        hr=0;
        time.innerHTML="00:00:00";
})

let sec2=0;
let min2=0;
let hr2=0;

function watch(){
        sec++;
        if(sec===60){
                min+=1;
                sec=0;
                if(min===60){
                        hr+=1;
                        min=0;  
                }
        }
        if(sec<10){
                sec2="0"+sec;
        }else{
                sec2=sec
        }
        if(min<10){
                min2="0"+min;
        }
        else{
                min2=min
        }
        if(hr<10){
                hr2="0"+hr;
        }else{
                hr2=hr
        }
        time.innerText=hr2+":"+min2+":"+sec2;
}