function sumEvenDivisors(number) {
    let sum = 0;

    console.log(`Дільники числа ${number}: `);

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);

            if (i % 2 === 0) {
                sum += i;
            }
        }
    }

    console.log(`Сума парних дільників: ${sum}`);
}

sumEvenDivisors(18);
