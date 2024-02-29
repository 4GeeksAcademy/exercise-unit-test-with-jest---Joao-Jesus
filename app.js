const sum = (num1, num2) => {
    return num1 + num2
    }

console.log (sum(7,3));

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = (eur) => {
    return eur * oneEuroIs['USD'] ;
}

const fromDollarToYen = (dollar) => {
    let eur = dollar / oneEuroIs['USD'];
    let yen = eur * oneEuroIs['JPY'];
    return yen
}

const fromYenToPound = (yen) => {
let eur = yen / oneEuroIs['JPY'];
let pound = eur * oneEuroIs['GBP']; 
return pound
}



module.exports = {sum, fromDollarToYen, fromYenToPound, fromEuroToDollar};