const part = document.querySelector('.part');
const shtangen = document.querySelector('.shtangen');
let coords = shtangen.getBoundingClientRect();

const movePart = (ev) => {
    part.style.left = ev.clientX - part.clientWidth/2 + 'px';
    if((ev.clientX + part.clientWidth/2) > (coords.left + shtangen.clientWidth)){
        
        part.style.left = coords.left + shtangen.clientWidth - part.clientWidth + 'px';
        
    }else if(parseInt(part.style.left) < coords.left){
        part.style.left = coords.left + 4 + 'px';
    }
};

const changePosition = () => {
    part.addEventListener('mousemove', movePart);

    part.addEventListener('mouseup', () => {
        part.removeEventListener('mousemove', movePart);
    })
};

part.addEventListener('mousedown', changePosition);


