
function shoLongSho (string1, string2) {
    let string1Length = string1.length;
    let string2Length = string2.length; 

    if (string1Length > string2Length) {
        return string2 + string1 + string2
    } else {
        return string1 + string2 + string1
    }   
}

console.log(shoLongSho ('', 'xyz'));