function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    return false;
}

const isMyLeapYear = isLeapYear(1933);
console.log('My Year:', isMyLeapYear);
const isHerLeapYear = isLeapYear(1920);
console.log('Her Year:', isHerLeapYear);