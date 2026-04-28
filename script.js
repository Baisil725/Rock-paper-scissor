const ctop = document.getElementById('top');
const utop = document.getElementById('utop');
const input = document.getElementById('buttons');
const ch = document.getElementById('choice');
const cho = document.getElementById('choice2');
const pf = document.getElementById('play-field');
let cPoint = 0;
let uPoint = 0;
let rps = '';
let urps ='';

input.addEventListener('click', function(event){
    if(event.target.tagName == 'BUTTON'){
        const choice = Math.floor(Math.random()*3);
        if(choice === 0){
            rps = 'rock';
            ch.textContent = 'ROCK';
        }

        else if(choice === 1){
            rps = 'paper';
            ch.textContent = 'PAPER';
        }

        else{
            rps = 'scissor';
            ch.textContent = 'SCISSOR';
        }

        const decision = event.target.id.toLowerCase();

        switch(decision){
            case 'rock':
                urps = 'rock';
                cho.textContent = 'ROCK';
                break;
            case 'paper':
                urps = 'paper';
                cho.textContent = 'PAPER';
                break;
            case 'scissor':
                urps = 'scissor';
                cho.textContent = 'SCISSOR';
                break;
        }

            if(rps === urps){
                cPoint ++;
                uPoint ++;
            }
            else if((rps === 'rock' && urps === 'paper') || (rps === 'paper' && urps === 'scissor') || (rps === 'scissor' && urps === 'rock')){
                    uPoint ++;
            }
            else{
                cPoint ++;
            }

        /*if(cPoint === 10){
            pf.textContent = 'Computer Wins';
        }
        else if(uPoint === 10){
            pf.textContent = 'You Win';
        }*/

        if (cPoint === 10 || uPoint === 10) {
            const message = cPoint === 10 ? 'COMPUTER WINS!' : 'YOU WIN!';
            
            pf.setAttribute('data-winner', message);
            
            pf.classList.add('winner-announcement');
            
            input.style.pointerEvents = 'none';
        }

        
        ctop.textContent = 'Computer : '+cPoint;
        utop.textContent = 'You : '+uPoint;
    }
})