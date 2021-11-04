const array = [1, 2, 3, 4, 5, 6];

function sum(array) {
    let result = 0;
    for (let i of array) {
        result += array[i];
    }
    return result;
}
console.log(sum(array));