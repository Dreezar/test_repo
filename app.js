const arr = [1, 2, 3, 4, 5, 6];

function sum(arr) {
    let sum = 0;
    arr.forEach(i => { sum += i });
    return sum;
};
sum(arr);