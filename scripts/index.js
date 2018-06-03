
// overly on card

var count = 0;
var score = 0;

var header = document.querySelector('.header');
var myScore = document.createElement('h4');


console.log(count);

var  candidates = [];

function on(target,id) {
    
    count++;
    // if(count >= 2) {
    //     count = 0;
    //     off();
    // }

    candidates.push(id);
    
    console.log(target.className); 
    if (count === 1) {
        target.className = 'overlay-u'; 
    }
    console.log(count);
    
    if(count>1) {
        match(target);
        candidates.length = 0;
        count = 0;
    }
}


function match(target) {

    console.log(candidates[0]);
    console.log(candidates[1]);

    var compare = [];

    console.log(candidates);

    compare[0] = document.getElementById(candidates[0]).getAttribute('value');
    compare[1] = document.getElementById(candidates[1]).getAttribute('value');

    console.log('final ' + compare[0]);
    console.log('fianl ' + compare[1]);
    console.log('out'); 
    
    

    if (compare[0] === compare[1]) {

        console.log('matched');
        
        // Update Score
        score += 10;
        myScore.innerHTML = `</h4>Score = </h4> + ${score}`;
        header.appendChild(myScore);

        if(score === 80) {
            finish();
        }

        console.log(target.className);
        target.className = 'overlay-u';
        let act = document.querySelectorAll('.overlay-u');
        for( let i=0; i< act.length; i++) {
            act[i].className = 'overlay';
        }
        console.log(target.className);
        return;
    }
    
    off();
}


function off() {
    let active = document.querySelectorAll('.overlay-u');
    for( let i = 0; i < active.length; i++) {
        active[i].className = 'overlay-a';
    }
}


function finish() {
    alert('You Won!');
}