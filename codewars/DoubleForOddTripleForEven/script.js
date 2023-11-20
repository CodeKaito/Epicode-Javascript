function func(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            result.push(array[i]);
        } else if (i% 2 === 0) {
            result.push(array[i]*2);
        } else if (i% 2 !== 0) {
            result.push(array[i]*3);
        }
    }
    return result;
}

func([2, 1, 3, 2]);