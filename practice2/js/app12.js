for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication table for ${i}: `);
    
    for (let j = 1; j <= 10; j++) {
        const result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }

    console.log('\n');
}
