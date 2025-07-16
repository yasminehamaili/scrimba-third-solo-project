const lengthEl= document.querySelector(".length-el");
const volumeEl= document.querySelector(".volume-el");
const massEl= document.querySelector(".mass-el");
const convertBtn= document.querySelector(".convert-btn");
let input= document.querySelector(".input-value");

convertBtn.addEventListener("click", function(){
    let x= input.value;
    let yF= x * 3.281;
    let yM= x / 3.281;
    let yG= x * 0.264;
    let yL= x / 0.264;
    let yP= x * 2.204;
    let yK= x / 2.204;
    lengthEl.innerHTML=`${x} meters = ${yF.toFixed(3)} feet | ${x} feet = ${yM.toFixed(3)} meters`;
    volumeEl.innerHTML=`${x} liters = ${yG.toFixed(3)} gallons | ${x} gallones = ${yL.toFixed(3)} liters`;
    massEl.innerHTML=`${x} kilos = ${yP.toFixed(3)} pounds | ${x} pounds = ${yK.toFixed(3)} kilos`
})