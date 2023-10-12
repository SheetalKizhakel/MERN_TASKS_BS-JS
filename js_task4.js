document.addEventListener('DOMContentLoaded', function() {
const btn1 = document.querySelector('#btn1'); // Getting the "Show Date" button
const btn2 = document.querySelector('#btn2');
btn1.addEventListener('click', showd);//trigger function reverse on clicking
btn2.addEventListener('click',showt);
function showd()
{
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
    document.getElementById("result1").textContent = currentDate;//make the value fore reversed number textbox as reversed number
}
function showt()
{
    
    const date = new Date();
    document.getElementById("result2").textContent = date;//make the value fore reversed number textbox as reversed number
}
});