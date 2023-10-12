const userInput1 = document.querySelector('#num1'); 
const userInput2 = document.querySelector('#num2');
        const btn1 = document.querySelector('#btn1');
        const btn2 = document.querySelector('#btn2');

        btn1.addEventListener('click', multiply);
        btn2.addEventListener('click',divide);

        function multiply() {
            const inputText1 = userInput1.value; 
            let num1 = parseInt(inputText1);
            const inputText2 = userInput2.value; 
            let num2 = parseInt(inputText2); 
            let res=num1*num2;

            document.getElementById("result").innerHTML = res;
        }
        function divide() {
            const inputText1 = userInput1.value; 
            let num1 = parseInt(inputText1); 
            const inputText2 = userInput2.value; 
            let num2 = parseInt(inputText2); 
            let res=num1/num2;

            document.getElementById("result").innerHTML = res;
        }
