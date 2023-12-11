function utf16Value (string) {
    let value = 0;
    
    for (let i = 0; i < string.length; i+=1) {
        value += string.charCodeAt(i);
    }
    return value;
}

