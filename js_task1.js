const userInput = document.querySelector('#fname'); // Getting the user input element
        const btn = document.querySelector('#btn');//making the button the target

        btn.addEventListener('click', reverse);//trigger function reverse on clicking

        function reverse() {
            const inputText = userInput.value; // Get the value entered by the user as a string.use.value to find value of parameter entered
            let num = parseInt(inputText); // Convert the string to a number

            let rev = 0;
            let rem;

            while (num > 0) {
                rem = num % 10;
                rev = rev * 10 + rem;
                num = Math.floor(num / 10);
            }

            document.getElementById("lname").value = rev;//make the value fore reversed number textbox as reversed number
        }