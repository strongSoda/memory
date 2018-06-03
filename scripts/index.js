
// overly on card

var count = 1;

console.log(count);

function on(target) {
    
    count++;
    if(count >= 2) {
        count = 0;
        off();
    }
    
    console.log(target.className); 
    target.className = 'overlay-u';
    console.log(target.className);
    
    console.log(count);    
}


function off() {
    let active = document.querySelectorAll('.overlay-u');
    for( let i = 0; i < active.length; i++) {
        active[i].className = 'overlay-a';
    }
}





