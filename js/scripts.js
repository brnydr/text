// Utility Logic

function isEmpty(input) {
    return (input.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
    if (isEmpty(text)) {
        return 0;
    }
    let wordCount = 0;
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (!Number(word)) {
            wordCount++;
        }
    });
    return wordCount;
}

function numberOfOccurrencesInText(word, text) {
   let wordCount = 0;
    let textArray = text.split(" ");
    if (isEmpty(text)) {  
        return 0;
    } else if (isEmpty(word)) {
        return 0;
    } else {
    textArray.forEach(textWord => {
        if (textWord.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    });
    return wordCount;
    }
}

function omitOffensiveWords(text) {
    let textArray = text.split(" ");
    let modifiedText = [];
    textArray.forEach((word) => {
        if (word.toLowerCase().includes("zoinks")) {
            modifiedText.push("*****");
        } else {
            modifiedText.push(word);
        }
    });
    return modifiedText.join(" ");
}

function wordFrequency(text) {
    let textArray = text.split(" ");
    textArray.sort();
    let wordCount = {};
    textArray.forEach((word) => {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    
    );
    return wordCount;
}

// UI Logic

function boldPassage(word, text) {
    if (isEmpty(text) || isEmpty(word)) {
      return null;
    }
    const p = document.createElement("p");
    let textArray = text.split(" ");
    textArray.forEach(function(element, index) {
      if (word === element) {
        const bold = document.createElement("strong");
        bold.append(element);
        p.append(bold);
      } else {
        p.append(element);
      }
      if (index !== (textArray.length - 1)) {
        p.append(" ");
      }
    });
    return p;
  }

  function uniqueWords(text) {

  }

function handleFormSubmission(e) {
    e.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
    let boldedPassage = boldPassage(word, passage);
    if (boldedPassage) {
        document.querySelector("div#bolded-passage").append(boldedPassage);
    } else {
        document.querySelector("div#bolded-passage").innerText = null;
    }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
  