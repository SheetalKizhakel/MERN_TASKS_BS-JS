const userInput = document.querySelector('#fname'); 
        const btn = document.querySelector('#btn');

        btn.addEventListener('click', reverse);

        function reverse() {
            const inputText = userInput.value; 
            let num = parseInt(inputText); 

            let rev = 0;
            let rem;

            while (num > 0) {
                rem = num % 10;
                rev = rev * 10 + rem;
                num = Math.floor(num / 10);
            }

            document.getElementById("lname").value = rev;
        }
