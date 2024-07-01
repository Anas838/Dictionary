
const wordInput = document.querySelector("#word");
const form = document.querySelector('#form');
const meaningContainer = document.querySelector('#container');


async function  handleDictionary(word="hello") {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        const defination = data[0].meanings[0].definitions[0].definition;
        meaningContainer.innerHTML = ""
        meaningContainer.innerHTML += `<div>
            <span class="capitalize text-white font-semibold text-xs">word</span>
            <h3 class="text-4xl capitalize">${data[0].word}</h3>

            <span class="capitalize text-white font-semibold text-xs my-3 block">Meaning</span>
            <p class="text-lg">${defination}</p>
            <hr/>
             <audio class = "h-8 w-30 mt-5" src="${data[0].phonetics[0].audio}" controls>a</audio>
        </div>`
        
    } catch (error) {
        meaningContainer.innerHTML = ""
        meaningContainer.innerHTML += `<div>
        Defination not found!
    </div>`
    
    }
}


form.addEventListener('submit' , (e) => {
    e.preventDefault();
    handleDictionary(wordInput.value);
    wordInput.value = ''
})

handleDictionary()