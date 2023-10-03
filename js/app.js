const wthiteKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'o', 'p', 'q', 'r'];
const blackKeys = ['s', 'd', 'g', 'h', 'j', 'a', 'b'];
const keys = document.querySelectorAll('.key');
const keysWhite = document.querySelectorAll('.key-white');
const keysBlack = document.querySelectorAll('.key-black');
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})
document.addEventListener('keydown', e => {
    const key = e.key;
    const whiteKeyIndex = wthiteKeys.indexOf(key);
    const blackKeyIndex = blackKeys.indexOf(key);

    if (whiteKeyIndex > -1) playNote(keysWhite[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(keysBlack[blackKeyIndex]);
})

function
playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}