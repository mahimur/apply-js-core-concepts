// 1. variable
var myName = 'khan';

// math operation: +, -, *, /
// shorthand +=, -=, *=, /=
// ++, --

// 2. Array
var friends = ['rahim', 'karim', 'koddus', 'abul', 'babul', 'robi'];
var thirdFriend = friends[2];
console.log(thirdFriend);
friends[3] = 'dambool';
console.log(friends);

// 3. Conditionals
// <, >, <=, >=, ==, ===, !=, !== 
if (friends.length < 2) {
    console.log('fokir tr kono bondhu nai');
} else {
    console.log('You have lots of friends');
}

// 4. loop
var number = 0;
while (number <= 6) {
    console.log(number);
    number++;
}
for (var i = 0; i <= 10; i++) {

}

// 5. function
function isMoonUp(time) {
    if (time > 7) {
        return true;
    }
}

// 6. Object
var janTosh = {
    height: 60,
    romanticism: 'heavvy',
    bapErTaka: 'borolox'
}