var moveInterval;
img = document.getElementById('myimg');//retrieve image by id
img.style.position = 'relative';
img.style.left = '0px';//sets the initial position of image on screen


function moveRight() {
    var currentLeft = parseInt(img.style.left) || 0;// This line retrieves the current value of the left CSS property of the img element and assigns it to the currentLeft variable.
    //parseInt(...) is used to parse the value as an integer. If the parsing fails (for example, if img.style.left is not set or is not a valid number), it defaults to 0 using the || (logical OR) operator
    img.style.left = (currentLeft + 10) + 'px';
    //update value of left property as 10+currentLeft value
}

function startMoving() {//his conditional statement checks if the moveInterval variable is not already set or is falsy (in this case, null or undefined).
    //The purpose of this check is to ensure that you don't start multiple intervals simultaneously. If moveInterval is already set (meaning there's an existing interval running), this condition won't be satisfied, and the function won't start another interval.
   if (!moveInterval) {
        moveInterval = setInterval(moveRight, 100); // Adjust the interval as needed
    }
    /*moveInterval = setInterval(moveRight, 100);: If the condition is met (i.e., moveInterval is not set or falsy), this line of code creates an interval using the setInterval function.

moveRight is the function to be executed at each interval.

100 is the interval duration in milliseconds. In this case, it's set to 100 milliseconds (1/10th of a second), which means moveRight will be called approximately every 0.1 seconds.

setInterval returns an interval ID, which is stored in the moveInterval variable. This ID can be used to later clear the interval when you want to stop the continuous movement.
   */}
//So, when you call startMoving, it sets up an interval to repeatedly call moveRight every 100 milliseconds, effectively making the image move to the right continuously until you stop it. Remember to adjust the interval duration (100 in this case) to control the speed of the continuous movement according to your preferences.

function stopMoving() {
    if (moveInterval) {
        clearInterval(moveInterval);
        moveInterval = null;
    }
}



document.getElementById('startButton').addEventListener('click', startMoving);
document.getElementById('stopButton').addEventListener('click', stopMoving);
