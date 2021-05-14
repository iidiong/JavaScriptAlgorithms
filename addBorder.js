function addBorder(text) {
    let textLength = text[0].length + 2;
    let border = "";
    let word = [];
    for (let i = 0; i < textLength; i++) {
        border += "*";
    }
    for (let i = 0; i < text.length; i++) {
        word[i] = (`*${text[i]}*`);
    }
    word.unshift(border)
    word.push(border)
    return word;
    // return `${border}\n${word[0]}\n${word[1]}\n${border}`;
}

function addBorder1(text) {
    const wall = "*".repeat(text[0].length + 2)
    let picture = [];
    for (let j = 0; j < text.length; j++) {
        picture[j] = "*".concat(text[j], "*");
    }
    picture.unshift(wall); // add top border
    picture.push(wall); // add buttom border

    return picture;
}

console.log(addBorder(["abcd0000", "abce"]));
console.log(addBorder1(["abcd0000", "abce"]));