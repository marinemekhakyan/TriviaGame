const numbers = [1, 2, 3];

function average (numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++) {
        sum += numbers[i]; //same as sum = sum + numbers[i];

    }
    return sum / numbers.length; //division
}

console.log(average(numbers));