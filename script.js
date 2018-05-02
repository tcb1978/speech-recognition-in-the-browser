window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

//create a paragraph
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    // transcribe the array and map the array of getting the results and mapping the results to get each word
    // in the transcription, then join into one string
    const transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    // add to p tag and check if result is final
    p.textContent = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
})
// start voice transcription over after the end of each sentence
recognition.addEventListener('end', recognition.start);

recognition.start();