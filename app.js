const textEl = document.querySelector(".rubber-band");
const text = textEl.textContent;
const letters = text.split('');


let html = "";

const makespan = letter => `<span class="rubber-letter">${letter}</span>`;

letters.forEach(letter => (html += makespan(letter)));

textEl.innerHTML = html;
