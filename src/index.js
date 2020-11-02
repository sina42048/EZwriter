import "./index.css";

class EZwriter {
  selectedElement;
  words;
  currentWord;
  currentTxt = "";
  currentIndex = 0;
  timeTowaitUntilNextWord = 3000;
  isRemoving = false;
  timer;

  constructor(obj) {
    this.selectedElement = document.getElementById(obj.selectedElement);
    this.words = this.selectedElement.getAttribute("data-words").split(",");
    this.timeTowaitUntilNextWord = parseInt(obj.timeTowaitUntilNextWord, 10);
    this.write();
  }

  write = () => {
    let typeSpeed = this.isRemoving ? 150 : 300;

    if (false === this.isRemoving) {
      this.currentTxt = this.words[this.currentIndex].substr(
        0,
        this.currentTxt.length + 1
      );
    } else {
      this.currentTxt = this.words[this.currentIndex].substr(
        0,
        this.currentTxt.length - 1
      );
    }

    this.selectedElement.innerHTML = `
      <span class="EZwriter_txt">
        ${this.currentTxt}
      </span>
    `;

    if (
      this.currentTxt === this.words[this.currentIndex] &&
      false === this.isRemoving
    ) {
      this.isRemoving = true;
      typeSpeed = this.timeTowaitUntilNextWord;
    }

    if (this.currentTxt == "" && true === this.isRemoving) {
      this.isRemoving = false;
      typeSpeed = 300;
      if (this.currentIndex < this.words.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }

    if (this.timer !== null) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(this.write, typeSpeed);
  };
}

export default EZwriter;
