function milesToKilometer(miles) {
    const kilometer = miles * 1.621371;
    return kilometer;
}
const myMiles = 2;
const myKm = milesToKilometer(myMiles);
console.log(myKm);