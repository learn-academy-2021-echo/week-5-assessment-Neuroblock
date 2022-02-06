// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("secretCodedWord", () => {
    it("returns a coded string", () => {
        expect(secretCodeWord1()).toEqual("L4ck4d41s1c4l")
        expect(secretCodeWord2()).toEqual("G0bbl3dyg00k")
        expect(secretCodeWord3()).toEqual("3cc3ntr1c")
    })
})


// b) Create the function that makes the test pass.

//    PSEUDO    //

// Create a function that passes a string and splits it into an array
// Map through the array to identify a vowel.
// Convert the vowel in to its corresponding nimber given above
// join the array into a string

const codedMessage = (string) => {
    let stringArray = string.split("")
    let code = stringArray.map((value, index, array) => {
        if(value.toLowerCase() === 'a'){
            return 4
        }
        else if(value.toLowerCase() === 'e'){
            return 3
        }
        else if(value.toLowerCase() ==='i'){
            return 1
        }
        else if(value.toLowerCase() === 'o'){
            return 0
        }
        else{
            return value
        }
    })

    return code.join("")
}
        


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("filterWords", () => {
     it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        expect(filterWords(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(filterWords(arrayOfWords2, letterE)).toEqual(["Mango", "Cherry", "Apricot", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.


//    PSEUDO    ??

// -Input an array and a single letter, the output is an array of the words containing the single letter
// -Perform a .filter() to filter out the elements containing the string letter input
// -Use .includes() to check for the string letter in the .filter function.

const filterWords = (arrayOfWords, letter) => {
    newArray = arrayOfWords.filter(value => {

        return  value.includes(letter) || value.includes(letter.toUpperCase())
    })
    return newArray
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

// b) Create the function that makes the test pass.


//     PSEUDO   //
// Input an array in a function that checks for a value that is repeated 2 or 3 times.
// Output a boollean value of true or false.
// Perform a .reducer to check and track number of times a value is repeated
// Use Object.values to convert the object values from reduce to an array
// Check if the output array contains a 2 && 3. if statements

const fullHouse = (hand) => {
    let tracker = hand.reduce((uniqueValues,currentValue)=>{
        if(uniqueValues[currentValue]){
            uniqueValues[currentValue] = uniqueValues[currentValue] + 1
        }
        else{
            uniqueValues[currentValue] = 1
        }
        return uniqueValues
    },{})
    if(Object.values(tracker).includes(2) && Object.values(tracker).includes(3)){
        return true
    }
    else{
        return false
    }
}
