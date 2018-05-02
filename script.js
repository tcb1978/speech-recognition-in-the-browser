window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

//create a paragraph
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    console.log(transcript);
})



recognition.start();