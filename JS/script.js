var counter=1;
document.getElementById('button').addEventListener('click',function(){
    if (counter>5){
        alert("Maximum Players have been selected.");
    }
    else{
        const list = document.getElementById('lister');
        const li = document.createElement('li');
        const name = document.getElementById('name');
        const namevalue = name.innerText;
        li.innerText=namevalue;
        li.style.fontSize="15px";
        list.append(li);
        counter++;
    }
    
})
document.getElementById('button2').addEventListener('click',function(){
    if (counter>5){
        alert("Maximum Players have been selected.");
    }
    else{
        const list = document.getElementById('lister');
        const li = document.createElement('li');
        const name = document.getElementById('name2');
        const namevalue = name.innerText;
        li.innerText=namevalue;
        li.style.fontSize="15px";
        list.append(li);
        counter++;
    }
    
})
document.getElementById('button3').addEventListener('click',function(){
    if (counter>5){
        alert("Maximum Players have been selected.");
    }
    else{
        const list = document.getElementById('lister');
        const li = document.createElement('li');
        const name = document.getElementById('name3');
        const namevalue = name.innerText;
        li.innerText=namevalue;
        li.style.fontSize="15px";
        list.append(li);
        counter++;
    }
    
})
document.getElementById('button4').addEventListener('click',function(){
    if (counter>5){
        alert("Maximum Players have been selected.");
    }
    else{
        const list = document.getElementById('lister');
        const li = document.createElement('li');
        const name = document.getElementById('name4');
        const namevalue = name.innerText;
        li.innerText=namevalue;
        li.style.fontSize="15px";
        list.append(li);
        counter++;
    }
    
})
document.getElementById('button5').addEventListener('click',function(){
    if (counter>5){
        alert("Maximum Players have been selected.");
    }
    else{
        const list = document.getElementById('lister');
        const li = document.createElement('li');
        const name = document.getElementById('name5');
        const namevalue = name.innerText;
        li.innerText=namevalue;
        li.style.fontSize="15px";
        list.append(li);
        counter++;
    }
    
})
document.getElementById('button6').addEventListener('click',function(){
    if (counter>5){
        alert("Maximum Players have been selected.");
    }
    else{
        const list = document.getElementById('lister');
        const li = document.createElement('li');
        const name = document.getElementById('name6');
        const namevalue = name.innerText;
        li.innerText=namevalue;
        li.style.fontSize="15px";
        list.append(li);
        counter++;
    }
    
})
document.getElementById('button7').addEventListener('click',function(){
    if (counter>5){
        alert("Maximum Players have been selected.");
    }
    else{
        const list = document.getElementById('lister');
        const li = document.createElement('li');
        const name = document.getElementById('name7');
        const namevalue = name.innerText;
        li.innerText=namevalue;
        li.style.fontSize="15px";
        list.append(li);
        counter++;
    }
    
})
document.getElementById('button8').addEventListener('click',function(){
    if (counter>5){
        alert("Maximum Players have been selected.");
    }
    else{
        const list = document.getElementById('lister');
        const li = document.createElement('li');
        const name = document.getElementById('name8');
        const namevalue = name.innerText;
        li.innerText=namevalue;
        li.style.fontSize="15px";
        list.append(li);
        counter++;
    }
    
})
document.getElementById('button9').addEventListener('click',function(){
    if (counter>5){
        alert("Maximum Players have been selected.");
    }
    else{
        const list = document.getElementById('lister');
        const li = document.createElement('li');
        const name = document.getElementById('name9');
        const namevalue = name.innerText;
        li.innerText=namevalue;
        li.style.fontSize="15px";
        list.append(li);
        counter++;
    }
    
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


})