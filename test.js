const {sum, fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23)
});


test("One euro should be 1.07 dollars", () => {
const dollars = fromEuroToDollar(3.5);
const expected = 3.5 * 1.07; 
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should convert to yen", () => {
    const dollars = fromDollarToYen(10);
    const expectedDollarToEur = 10 / 1.07;
    const expectedDollarsToYen = expectedDollarToEur * 1.56
    expect(dollars).toBeCloseTo(expectedDollarsToYen);
}) 

test("One yen should convert to Pound", () => {
    const yen = fromYenToPound(10);
    const expectedYenToEur = 10 / 1.56;
    const expectedYenToPound = expectedYenToEur * 0.87
    expect(yen).toBeCloseTo(expectedYenToPound);
})