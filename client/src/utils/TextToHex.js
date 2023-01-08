function stringToHex(string) {
    let hex = '';
    for (let i=0; i < string.length; i++) {
        hex += string.charCodeAt(i).toString(16);
    }
    return hex;
}


// const string = 'hello';
// const hex = stringToHex(string);
// console.log(hex);

// outputs: "68656c6f"