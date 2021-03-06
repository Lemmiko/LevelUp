const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const nameComment = document.getElementById('name');
const comment = document.getElementById('comment');

let names = ['Валентин П.', 'Геннадий В.', 'Анатолий И.'];
let comments = ['Неподвижное крыло отличает самолёт от махолёта (орнитоптера) и вертолёта, а наличие двигателя — от планёра и мускулолётa','От дирижабля и аэростата самолёт отличается тем, что использует аэродинамический, а не аэростатический способ создания подъёмной силы','В современной авиации существуют самолёты с подвижной изменяемой геометрией крыла (например, Су-24 или МиГ-23)']
let pictures = ['img/img-comment1.jpg', 'img/img-comment2.jpg', 'img/img-comment3.jpg']


img.src = pictures[0];
let position = 0;
nameComment.innerHTML = names[0];
comment.innerHTML = comments [0];

moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        nameComment.innerHTML = names[position];
        comment.innerHTML = comments [position];
        return;
    }
    img.src = pictures[position + 1];
    nameComment.innerHTML = names[position + 1];
    comment.innerHTML = comments [position + 1];
    position++;
}

moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        nameComment.innerHTML = names[position];
        comment.innerHTML = comments [position];
        return;
    }
    img.src = pictures[position - 1];
    nameComment.innerHTML = names[position - 1];
    comment.innerHTML = comments [position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);


var sec         = 1800,
     countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function () {
        
        secpass();
    }, 1000);

function secpass() {
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    if (min < 10) {
        
        min = '0' + min;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
    
    if (sec > 0) {
        
        sec = sec - 1;
        
    } else {
        
        clearInterval(countDown);
        
    }
}
