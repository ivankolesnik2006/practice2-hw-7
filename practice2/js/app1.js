let result = '';

for (let i = 10; i <= 20; i++) {
    result += i;

    if (i < 20 ) {
        result += ', ';
    }
}

console.log(result);