
class Key {
    constructor(key){
        this.key = key;
        this.keyCode = Number(key.dataset);
        this.keyStroke = key.querySelector('kbd').textContent;

        document.addEventListener('keydown', (event)=> {
            this.playSound(event);
        });
    
        this.key.addEventListener('transitionend', (event) => this.removeTransition(event));
        
    }


    removeTransition(e) {
        // e.stopImmediatePropagation();
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }
    
    playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        // e.stopImmediatePropagation();
        // console.log(audio, "audio");
        // console.log(key, "key");
        if (!audio) return;
    
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }
    
    
}

const keys = document.querySelector('.keys');

const key = document.querySelectorAll('.key');

key.forEach(item => {
    new Key(item);
})
