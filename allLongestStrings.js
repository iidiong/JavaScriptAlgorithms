function allLongestStrings(str) {
    let strArray = [];


    for (let i = 0; i < str.length; i++) {
        let strLength = str[0].length;
        str[i].length >= strLength ? strArray.push(str[i]) : false;
    }
    return strArray;
}


arrS = ["aba", "aa", "bb", "vcd", "abc"]
console.log(allLongestStrings(arrS));

arrS1 = ["j", "aba", "aa", "bb", "vcd", "abc"]
console.log(arrS1.splice(1,2))