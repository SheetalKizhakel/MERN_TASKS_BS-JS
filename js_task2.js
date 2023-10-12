const userInput = document.querySelector('#fname'); // Getting the user input element
        const btn = document.querySelector('#btn');//making the button the target

        btn.addEventListener('click', sortword);//trigger function reverse on clicking

        function sortword() {
            const inputText = userInput.value; // Get the value entered by the user as a string.use.value to find value of parameter entered
            const sortedtext=inputText.split("").sort().join("");
            document.getElementById("lname").value = sortedtext;//make the value fore reversed number textbox as reversed number
        }