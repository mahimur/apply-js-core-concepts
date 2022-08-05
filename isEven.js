// Check Even number
function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }
}
const isMyNumberEven = isEven(123);
console.log(isMyNumberEven);
const isHerNumberEven = isEven(234);
console.log(isHerNumberEven);