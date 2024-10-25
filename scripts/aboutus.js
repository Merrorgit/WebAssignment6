//Background
const button = document.querySelector('.change');
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

button.addEventListener('click', () =>{
    const newColor = '#' + hex[Math.floor(Math.random() * hex.length)] + hex[Math.floor(Math.random() * hex.length)]
    + hex[Math.floor(Math.random() * hex.length)] + hex[Math.floor(Math.random() * hex.length)] + hex[Math.floor(Math.random() * hex.length)]
    + hex[Math.floor(Math.random() * hex.length)];

    document.body.style.backgroundColor = newColor;
})


//Sound
const sound_btn = document.querySelector('.sound__btn')
sound_btn.addEventListener('click', () => {
    const sound = document.querySelector('.notification');
    sound.play();
});