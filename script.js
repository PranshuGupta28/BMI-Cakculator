const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('.result');

if(height===''||height<0||isNaN(height)){
    result.innerHTML=`Please give a vaild Height ${height}`;
}
if(weight===''||weight<0||isNaN(weight)){
    result.innerHTML=`Please give a vaild weight ${weight}`;
}
else{
    const bmi=(weight/ ((height*height)/10000)).toFixed(2)
    if(bmi<24.6 && bmi>18.6){
        result.innerHTML=`<span> Congratitulations Yor weight is Normal </span>`
    }
    if(bmi<18.6){
        result.innerHTML=`<span> You are Under Weight Please focus on weight gain </span>`
    }
    if(bmi>24.6){
        result.innerHTML=`<span> You are Over Weight Please focus on diet plan </span>`
    }
}
});