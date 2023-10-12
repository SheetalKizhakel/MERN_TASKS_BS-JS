var moveInterval;
img = document.getElementById('myimg');
img.style.position = 'relative';
img.style.left = '0px';


function moveRight() {
    var currentLeft = parseInt(img.style.left) || 0;
     
    img.style.left = (currentLeft + 10) + 'px';

}

function startMoving() {
  
   if (!moveInterval) {
        moveInterval = setInterval(moveRight, 100); 
    }
    }

function stopMoving() {
    if (moveInterval) {
        clearInterval(moveInterval);
        moveInterval = null;
    }
}



document.getElementById('startButton').addEventListener('click', startMoving);
document.getElementById('stopButton').addEventListener('click', stopMoving);
