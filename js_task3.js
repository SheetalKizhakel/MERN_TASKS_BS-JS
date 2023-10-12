const userInput1 = document.querySelector('#num1'); // Getting the user input element
const userInput2 = document.querySelector('#num2');
        const btn1 = document.querySelector('#btn1');//making the button the target
        const btn2 = document.querySelector('#btn2');

        btn1.addEventListener('click', multiply);//trigger function reverse on clicking
        btn2.addEventListener('click',divide);

        function multiply() {
            const inputText1 = userInput1.value; // Get the value entered by the user as a string.use.value to find value of parameter entered
            let num1 = parseInt(inputText1); // Convert the string to a number
            const inputText2 = userInput2.value; // Get the value entered by the user as a string.use.value to find value of parameter entered
            let num2 = parseInt(inputText2); 
            let res=num1*num2;

            document.getElementById("result").innerHTML = res;//make the value fore reversed number textbox as reversed number
        }
        function divide() {
            const inputText1 = userInput1.value; // Get the value entered by the user as a string.use.value to find value of parameter entered
            let num1 = parseInt(inputText1); // Convert the string to a number
            const inputText2 = userInput2.value; // Get the value entered by the user as a string.use.value to find value of parameter entered
            let num2 = parseInt(inputText2); 
            let res=num1/num2;

            document.getElementById("result").innerHTML = res;//make the value fore reversed number textbox as reversed number
        }