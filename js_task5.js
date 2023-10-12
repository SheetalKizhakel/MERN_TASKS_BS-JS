const userInput1 = document.querySelector('#name');
const userInput2 = document.querySelector('#email');
const userInput3 = document.querySelector('#website');
const userInput4 = document.querySelector('#validationCustomDescription');
const btn1 = document.querySelector('#btn');

btn1.addEventListener('click', changecolor);

function changecolor() {
    if (userInput1.value.trim() === '') {
        userInput1.classList.add('error');
        document.getElementById("span1").innerHTML= "This field is required";
      
        
    } else {
        userInput1.classList.remove('error');
        document.getElementById("span1").innerHTML = "";
    }

    if (userInput2.value.trim() === '') {
        userInput2.classList.add('error');
        document.getElementById("span2").innerHTML = "A valid email address is required";
       
    } else {
        userInput2.classList.remove('error');
        document.getElementById("span2").innerHTML = "";
    }

    if (userInput3.value.trim() === '') {
        userInput3.classList.add('error');
        document.getElementById("span3").innerHTML = "A valid URL is required";
        
    } else {
        userInput3.classList.remove('error');
        document.getElementById("span3").innerHTML = "";
    }

    if (userInput4.value.trim() === '') {
        userInput4.classList.add('error');
        document.getElementById("span4").innerHTML = "This field is required";
       
    } else {
        userInput4.classList.remove('error');
        document.getElementById("span4").innerHTML = "";
    }
}

