function changeHatImages() {
    const xaosatSound = document.getElementById('xaosatSound');
    xaosatSound.play();

    const napElement = document.getElementById('Nap');
    napElement.style.margin = '70px -380px';

    // Array of available hat images
    const hatImages = [
        'img/Bau.png',
        'img/Cua.png',
        'img/Ga.png',
        'img/Nai.png',
        'img/Tom.png',
        'img/Ca.png',
    ];

    
    // Function to get a random index from the array
    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

   

    // Hành động sẽ thực hiện sau 3 giây
const timeoutId = setTimeout( function change(){
    // Get the hat div elements
    const hat1 = document.querySelector('.Hat1 img');
    const hat2 = document.querySelector('.Hat2 img');
    const hat3 = document.querySelector('.Hat3 img');

    // Set random images to each hat div
    hat1.src = hatImages[getRandomIndex(hatImages)];
    hat2.src = hatImages[getRandomIndex(hatImages)];
    hat3.src = hatImages[getRandomIndex(hatImages)];
}, 1000);

const stop = function(id) {
    clearTimeout(id);
};

setTimeout(function() {
    stop(timeoutId);
}, 1001);

}
function restoreMargin() {
    const napElement = document.getElementById('Nap');
    napElement.style.margin = '0';

    const khuiSound = document.getElementById('khuiSound');
    khuiSound.play();
}

function bkm() {
    const bkSound = document.getElementById('bkSound');
    bkSound.play();
}
function bkm_pause() {
    alert("Chơi đi, tết mà tắt nhạc cái gì =))");
}
