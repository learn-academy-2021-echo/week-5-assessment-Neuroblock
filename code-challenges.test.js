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

// a describe method that lists the name of the function OR naming of the particular test.
describe("secretCodedWord1", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("returns a coded string", () => {

        //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(secretCodeWord1()).toEqual("L4ck4d41s1c4l")
    })
})

describe("secretCodedWord2", () => {
    it("returns a coded string", () => {
        expect(secretCodeWord2()).toEqual("G0bbl3dyg00k")
    })
})

describe("secretCodedWord3", () => {
    it("returns a coded string", () => {
        expect(secretCodeWord3()).toEqual("3cc3ntr1c")
    })
})


// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// a describe method that lists the name of the function OR naming of the particular test.
describe("arrayOfWords1", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array of words and a single letter and returns all the words that contain that particular lettei", () => {

        //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(arrayOfWords1()).toEqual(["Apple", "Banana", "Orange"])
    })
})

describe("arrayOfWords2", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular lettei", () => {
        expect(arrayOfWords2()).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

//found the example in stack overflow but I am still having trouible with the coding process.
//The material presented to us is starting to make sense, but i still have more work to do, my learning this time has slowed down and i am worried of being dead weight when the capstone roles in.

def finder(array, thing_to_find)
array.select { | word | word.include ? thing_to_find }
end



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// a describe method that lists the name of the function OR naming of the particular test.
describe("hand1", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {

        //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(hand1()).toEqual("true")
    })
})

describe("hand2", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {
        expect(hand2()).toEqual("false")
    })
})

describe("hand3", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {
        expect(hand3()).toEqual("false")
    })
})


// b) Create the function that makes the test pass.
