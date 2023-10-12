document.addEventListener('DOMContentLoaded', function() {
const btn1 = document.querySelector('#btn1'); 
const btn2 = document.querySelector('#btn2');
btn1.addEventListener('click', showd);
btn2.addEventListener('click',showt);
function showd()
{
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
    document.getElementById("result1").textContent = currentDate;
}
function showt()
{
    
    const date = new Date();
    document.getElementById("result2").textContent = date;
}
});
