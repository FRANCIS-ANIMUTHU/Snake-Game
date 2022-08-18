
let score = 0;
let button = document.getElementById('btn');
button.addEventListener('click', player1);
// player1
function player1() {
    let value = randomnum();
    var score = add_score(value);
    var score = snakes(score);
    var score = ladders(score)
    if (value == 6) {
        dais_6()
    }
}
// randomnumber 1 to 6
function randomnum() {
    random = Math.floor(Math.random() * 6) + 1;
    console.log('random number=', random);
    return random;
}
// add_score 1 to 100
function add_score(value) {
    score += value;
    console.log('score', score);
    if (score >= 100) {
        console.log('You Won');
        button.setAttribute('disabled', 'disabled');
    }
}
// snakes_bite
function snakes() {
    head = [97, 95, 88, 62, 36, 32];
    tail = [78, 56, 24, 18, 6, 10];
    length = head.length;
    for (i = 0; i < length; i++) {
        if (score == head[i]) {
            console.log('snake bite');
            score = tail[i];
        }
    }
}
// ladder_helps
function ladders() {
    tail = [80, 71, 50, 28, 21, 8, 4, 1];
    head = [99, 92, 67, 76, 42, 30, 14, 38];
    length1 = tail.length;
    for (i = 0; i < length1; i++) {
        if (score == tail[i]) {
            console.log('ladder help');
            score = head[i];
        }
    }
}
function dais_6() {
    let value = randomnum();
    var score = add_score(value);
    var score = snakes(score);
    var score = ladders(score)
}






//player2
/*let score1 = 0;
let button1 = document.getElementById('btn1');
button.addEventListener('click', player2);

function player2() {
 value1=randomnum1();
 score1=add_score(value1);
 score1= snakes1(score1);
 score1=ladders(score1)
    if (value1 == 6) {
        dais_6_1()
    }

}
//random number
function randomnum1() {
    var random1 = Math.floor(Math.random() * 6) + 1;
    console.log('random number=', random1);
    return random1;
}
//add score 1-100
function add_score1(value1) {
    score1 += value1;
    console.log('score=', score1);
    if (score1 >= 100) {
        console.log('you won');
        button1.setAttribute('disabled', 'disabled');

    }
}
    //snake bite
    function snakes1(score1) {
        head = [97, 95, 88, 62, 36, 32];
        tail = [78, 56, 24, 18, 6, 10];
        length = head.length;
        for (i = 0; i < length; i++) {
            if (score1 == head[i]) {
                console.log('snake bite');
                score1 = tail[i];
            }
        }
    }

//ladders helps
function ladders1(score1) {
    tail = [80, 71, 50, 28, 21, 8, 4, 1];
    head = [99, 92, 67, 76, 42, 30, 14, 38];
    length1 = tail.length;
    for (i = 0; i < length1; i++) {
        if (score1 == tail[i]) {
            console.log('ladders help');
            score1 = head[i];
        }
    }
}
    //dais 6
    function dais_6_1() {
        var value1 = randomnum1();
        var score1 = add_score1(value1);
        var score1 = snakes1(score1);
        var score1 = ladders1(score1);*/








