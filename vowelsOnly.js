
function vowelsOnly(str) {
    let vowelsExpr = /[aeiou]/ig;
    let vowelsOutput = str.match(vowelsExpr); // string match returns array
    console.log(vowelsOutput.toString().replace(/,/g, "")); // convert array back to string
    
    
    let newStr = '';
    str.split("").forEach(element => {
        if (element.match(vowelsExpr)) {
            newStr += element;
        }
    });
    console.log(newStr);

    
    return vowelsOutput;
}


console.log(vowelsOnly("hello world"))

// let st = [1, 2, 3, 4, 5];
// for (let x of st) {
//     console.log(x)
// }
// let rs = st.map(x => x * 5);
// console.log(rs);
// let y = '';
// st.forEach((x) => { y += x * 5 + " "; console.log(y) });