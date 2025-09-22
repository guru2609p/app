
const list=[];
const correct=['Point charges','Electric field','False','Infinite','0'];
function add(n){
    const element=document.getElementById(`${n}`);
    list.push(element);
};


let m=0;

function score(){
    n=correct.length
    for(let i=0; i<list.length;i++){
        if (list[i].value===correct[i]){
            m++;
        }
    }
    document.querySelector('#score').innerHTML=`${m}/${n}`;
};




document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('#one').onchange=add('one');
    document.querySelector('#two').onchange=add('two');
    document.querySelector('#three').onchange=add('three');
    document.querySelector('#four').onchange=add('four');
    document.querySelector('#five').onchange=add('five');
    document.querySelector('#click').onclick=score;
});