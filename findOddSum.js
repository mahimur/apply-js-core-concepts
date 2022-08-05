function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < myNumbers.length; i++) {
        const index = i;
        const element = myNumbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

function getOddNumbersOfAnArry(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 35, 91];
const oddNumbers = getOddNumbersOfAnArry(myNumbers);
console.log(oddNumbers);
const sumOfOddNumbers = getSumOfAnArray(oddNumbers);
console.log(sumOfOddNumbers);