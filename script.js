const adviceNumberElement = document.querySelector('.advice-number');
const adviceTextElement = document.querySelector('.advice-text');
const adviceGenerateButton = document.querySelector('.advice-button-container');
const url = 'https://api.adviceslip.com/advice';

let adviceText = '';
let adviceNumber = null;

adviceGenerateButton.addEventListener('click', () => {
    generateAdvice();
});

const setAdvice = (adviceText, adviceNumber) => {
    adviceNumberElement.innerText = String(adviceNumber).length === 2 ? `0${adviceNumber}` : adviceNumber;
    adviceTextElement.innerText = `"${adviceText}"`;
}

const generateAdvice = async () => {
    try {
        await fetch(url).then(res => {
            return res.json();
        }).then((data) => {
            setAdvice(data.slip.advice, data.slip.id);
        });
    }
    catch(err) {
        console.log(err);
    }
}
