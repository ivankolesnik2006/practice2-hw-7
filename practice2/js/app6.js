
let sum = 0;
let count = 0;

for (i = 1; i <=500; i ++) {
    sum += i;
    count++;
}

const avg = sum/count;

console.log (`Cереднє арифметичне всіх цілих чисел від 1 до 500: ${avg}!`)
