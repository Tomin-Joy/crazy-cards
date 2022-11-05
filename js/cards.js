const subtitles = document.getElementsByClassName("cards-subtitle");
var texts=["ithu mathiyo???","ithu pore???","ithu mathi(❁´◡`❁)"]
for (let i = 0; i < subtitles.length; i++) {
    const subtitle = subtitles[i];
    const createWord = (text, index) => {
        const word = document.createElement("span");
        
        word.innerHTML = `${text} `;
        
        word.classList.add("cards-subtitle-word");
        
        word.style.transitionDelay = `${index * 40}ms`;
        
        return word;
      }
      const addWord = (text, index) => subtitle.appendChild(createWord(text, index));
      
      const createSubtitle = text => text.split(" ").map(addWord);
      
      createSubtitle(texts[i%3]);
}
const cards=[...document.getElementsByClassName('cards')];
console.log(cards);
document.addEventListener('mousemove', move);
function move(e){
    cards.forEach(layer =>{
        const speed = layer.getAttribute('data-speed')*2;

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}