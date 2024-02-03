function countEvenDivisors(number) {
    let count = 0;

    console.log(`Divisor of ${number}: `);

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);

            if (i % 2 === 0) {
                count++;
            }
        }
    }

    console.log(`The number of even divisors: ${count}`);
}
countEvenDivisors(18);
