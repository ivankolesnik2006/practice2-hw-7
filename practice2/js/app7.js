let sumOfEvenNumbers = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumOfEvenNumbers += i;
    }
}

console.log(`Сума лише парних чисел від 30 до 80: ${sumOfEvenNumbers}`);

