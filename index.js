const numberOfResults = 100

const two1Button = document.querySelector('#two-1')
const three1Button = document.querySelector('#three-1')
const four1Button = document.querySelector('#four-1')
const five1Button = document.querySelector('#five-1')

const three2Button = document.querySelector('#three-2')
const four2Button = document.querySelector('#four-2')
const five2Button = document.querySelector('#five-2')

const generatedNumbersTable = document.querySelector('#generated-numbers')

const randomBetweenRanges = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateRandom1Digit = () => {
    return randomBetweenRanges(2, 9)
}

const generateRandom2Digit = () => {
    return randomBetweenRanges(10, 99)
}

const generateRandom3Digit = () => {
    return randomBetweenRanges(100, 999)
}

const generateRandom4Digit = () => {
    return randomBetweenRanges(1000, 9999)
}

const generateRandom5Digit = () => {
    return randomBetweenRanges(10000, 99999)
}

const returnDivedablePair = (numberFunction, dividerFunction) => {
    let number = numberFunction()
    let divider = dividerFunction()
    if(number % divider == 0 && number != divider && divider != 1){
        return [number, divider]
    }else{
        return returnDivedablePair(numberFunction, dividerFunction)
    }
}

const createRow = () => {
    let row = document.createElement('tr')
    return row
}

const createColumn = () => {
    let column = document.createElement('td')
    return column
}

const generateFilledTable = (pair) => {
    let row = createRow()
    let column1 = createColumn()
    let column2 = createColumn()
    let column3 = createColumn()
    column1.innerText = pair[0]
    column2.innerText = pair[1]
    column3.innerText = pair[0] / pair[1]
    row.appendChild(column1)
    row.appendChild(column2)
    row.appendChild(column3)
    generatedNumbersTable.appendChild(row)
}

two1Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom2Digit, generateRandom1Digit)
        generateFilledTable(pair)    
    }
})

three1Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, generateRandom1Digit)
        generateFilledTable(pair)    
    }
})

four1Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom4Digit, generateRandom1Digit)
        generateFilledTable(pair)    
    }
})

five1Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom5Digit, generateRandom1Digit)
        generateFilledTable(pair)    
    }
})

three2Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, generateRandom2Digit)
        generateFilledTable(pair)    
    }
})

four2Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom4Digit, generateRandom2Digit)
        generateFilledTable(pair)    
    }
})

five2Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom5Digit, generateRandom2Digit)
        generateFilledTable(pair)    
    }
})