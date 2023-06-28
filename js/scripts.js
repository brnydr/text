function wordCounter(text) {
    if (text.trim().length === 0) {
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

function numberOfOccurencesInText(word, text) {
    return 0;
}