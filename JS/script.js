var counter=1;

function listadder(name,button){
    if (counter>5){
        alert("Maximum Players have been selected.");
    }
    else{
        const list = document.getElementById('lister');
        const li = document.createElement('li');
        const namer = document.getElementById(name);
        const namevalue = namer.innerText;
        li.innerText=namevalue;
        li.style.fontSize="15px";
        list.append(li);
        counter++;
        const button1 = document.getElementById(button);
        button1.disabled=true;
    }
}

document.getElementById('button').addEventListener('click',function(){
    listadder("name","button");
    
})
document.getElementById('button2').addEventListener('click',function(){
  listadder("name2","button2");
})
document.getElementById('button3').addEventListener('click',function(){
    listadder("name3","button3");
    
})
document.getElementById('button4').addEventListener('click',function(){
    
    listadder("name4","button4");
    
})
document.getElementById('button5').addEventListener('click',function(){
   
    listadder("name5","button5");
    
})
document.getElementById('button6').addEventListener('click',function(){
    
    listadder("name6","button6");
    
})
document.getElementById('button7').addEventListener('click',function(){
    
    listadder("name7","button7");
    
})
document.getElementById('button8').addEventListener('click',function(){
    listadder("name8","button8");
    
})
document.getElementById('button9').addEventListener('click',function(){
   
    listadder("name9","button9");
    
})
// For calculating player amount

document.getElementById('expense_button').addEventListener('click',function(){
    const input = document.getElementById('inputfield');
    const invalue = input.value;
    const invalueint = parseInt(invalue)*5;
    const valstring = document.getElementById('amount');
    valstring.innerText=invalueint;

    
})

document.getElementById('total_button').addEventListener('click',function(){

const input1 = document.getElementById('manager_input');
const input1val = input1.value;
const input1valint = parseInt(input1val);

const input2 = document.getElementById('coach_input');
const input2val = input2.value;
const input2valint = parseInt(input2val);

const player = document.getElementById('inputfield');
const playervalue = parseInt(player.value)*5;
const calculator = input1valint+input2valint+playervalue;

const subtotal = document.getElementById('subtotal');

subtotal.innerText=calculator;
input1.value='';
input2.value='';


})