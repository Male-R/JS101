
function multisum (number) {
    let result = 0;
    for (let c = 0; c <= number; c+=1) {
        if (c % 3 === 0 || c % 5 === 0) {
            result = result + c;
        }
    }

    return result
}


