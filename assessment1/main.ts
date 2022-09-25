// Use type and mentioned in the name of the variable
// Assign an appropriate value
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

const aNumber: number = 5;
const aString: string = '';
//const aBigInt: BigInt = 5567890987654345678909876n;
const anArray: string[] = ['a', 'b', 'c'];
const anUnknown: unknown = null;
const anObject: object = {};
const aTuple: [number, boolean] = [5, false];
const anEnum: Direction = Direction.Up;

// Implement this function any type accordingly
function isEven(number: number): number {
    return number = 5;
}

// Type the following  function and variable
type Person = {
    name: string
}

type Developer = {
    role: string
}

const jane: Person = {
    name: 'Jane'
}

const joe: Developer = {
    role: 'Devops'
}

const people: (Person | Developer)[] =  [
    jane, joe
]

//Question
function printPeople(people: (Person | Developer)[]): void {
    people.forEach(person => {
        console.log(person?.name || person?.role);
    })
    // Print the name of person or the role in this function
}

printPeople(people);

// Type the encrpyt function correctly
const encryptText = (plainText: string, shift: number) => {
    let cipherArr: string[] = []
    let cipherLetter

    plainText.split("").map(letter => {
      let code = letter.charCodeAt(0)
      if(letter === " ") {
        return cipherArr.push(letter)
      }
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65)
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97)
      }
      return cipherArr.push(cipherLetter)
    })
    return cipherArr.join("")
}

console.log("Encrypted text" + encryptText("Hello", 4));

// Solve using a literal union type
type Vegetable = "Cucumber" | "Eggplant" | "Cabbage"; // :Vegetable:
let vegetable : Vegetable;
vegetable = "Cucumber";
vegetable = "Eggplant";
vegetable = "Cabbage";

console.log(vegetable);

// Solve the following exercise with an intersection type
//Question ???
type Complainer = {
    complains: () => void
}

type Beerdrinker = {
    drinkBeer: () => void
}

type ChocolateLover = {
    eatChocolate: () => void
}

type Belgian = Complainer & Beerdrinker & ChocolateLover;

function doBelgianThings(belgian: Belgian): void
{
    belgian.complains();
    belgian.drinkBeer();
    belgian.eatChocolate();
}

//doBelgianThings();

module.exports = {
    isEven,
    print,
    encryptText
};