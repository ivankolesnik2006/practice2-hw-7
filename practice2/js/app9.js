
function printDivisors(number) {
    console.log(`Divisors of number ${number}: `);

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}

printDivisors(18);


