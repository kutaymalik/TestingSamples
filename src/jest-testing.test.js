const {
    sumInt, subInt
} = require("./jest-testing")

describe("test of sumInt function", ()=> {

    test("sumInt function should return sum of given two integer", async ()=> {
        let result = sumInt(3,5)
        expect(result).toBe(8)
    })
})

describe("test of subInt function", ()=> {
    
    test("subInt function should returns the absolute value of the difference of a-b", ()=> {
        let result = subInt(7,10)
        expect(result).toBe(3)
    })
})