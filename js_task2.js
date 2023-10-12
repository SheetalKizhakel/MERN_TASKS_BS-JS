const userInput = document.querySelector('#fname'); 
        const btn = document.querySelector('#btn');

        btn.addEventListener('click', sortword);

        function sortword() {
            const inputText = userInput.value; 
            const sortedtext=inputText.split("").sort().join("");
            document.getElementById("lname").value = sortedtext;
        }
