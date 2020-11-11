const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.movingOutline circle');
    const video = document.querySelector('.vidContainer video');

    // Sounds
    const sounds = document.querySelectorAll('.soundPicker button');

    // Time Display
    const timeDisplay = document.querySelector('.timeDisplay');

    // Get the length of the cirle outline
    const outlineLength = outline.getTotalLength();
    console.log(outlineLength);

    // Duration - the music will stop after this duration  (default)
    let fakeDuration = 600; 

    // This will animate the circles
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    // Play sound
    play.addEventListener('click', () => {
        song.play();
    });


   



}

app();