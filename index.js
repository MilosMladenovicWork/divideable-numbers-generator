const numberOfResults = 30

const two1Button = document.querySelector('#two-1')
const three1Button = document.querySelector('#three-1')
const four1Button = document.querySelector('#four-1')
const five1Button = document.querySelector('#five-1')
const six1Button = document.querySelector('#six-1')

const three2Button = document.querySelector('#three-2')
const four2Button = document.querySelector('#four-2')
const five2Button = document.querySelector('#five-2')

const threeNum2Button = document.querySelector('#three-num-2')
const threeNum3Button = document.querySelector('#three-num-3')
const threeNum4Button = document.querySelector('#three-num-4')
const threeNum5Button = document.querySelector('#three-num-5')
const threeNum6Button = document.querySelector('#three-num-6')
const threeNum7Button = document.querySelector('#three-num-7')
const threeNum8Button = document.querySelector('#three-num-8')
const threeNum9Button = document.querySelector('#three-num-9')

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

const generateRandom6Digit = () => {
    return randomBetweenRanges(100000, 999999)
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

const generateFilledTable = (pair, index) => {
    let row = createRow()
    let column1 = createColumn()
    let column2 = createColumn()
    let column3 = createColumn()
    let column4 = createColumn()
    let column5 = createColumn()
    column1.innerText = index
    column2.innerText = pair[0]
    column3.innerText = '/'
    column4.innerText = pair[1]
    column5.innerText = '='
    row.appendChild(column1)
    row.appendChild(column2)
    row.appendChild(column3)
    row.appendChild(column4)
    row.appendChild(column5)
    generatedNumbersTable.appendChild(row)
}

two1Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom2Digit, generateRandom1Digit)
        generateFilledTable(pair, i + 1)    
    }
})

three1Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, generateRandom1Digit)
        generateFilledTable(pair, i + 1)    
    }
})

four1Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom4Digit, generateRandom1Digit)
        generateFilledTable(pair, i + 1)    
    }
})

five1Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom5Digit, generateRandom1Digit)
        generateFilledTable(pair, i + 1)    
    }
})

six1Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom6Digit, generateRandom1Digit)
        generateFilledTable(pair, i + 1)    
    }
})

three2Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, generateRandom2Digit)
        generateFilledTable(pair, i + 1)    
    }
})

four2Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom4Digit, generateRandom2Digit)
        generateFilledTable(pair, i + 1)    
    }
})

five2Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom5Digit, generateRandom2Digit)
        generateFilledTable(pair, i + 1)    
    }
})

threeNum2Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, () => 2)
        generateFilledTable(pair, i + 1)    
    }
})

threeNum3Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, () => 3)
        generateFilledTable(pair, i + 1)    
    }
})

threeNum4Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, () => 4)
        generateFilledTable(pair, i + 1)    
    }
})

threeNum5Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, () => 5)
        generateFilledTable(pair, i + 1)    
    }
})

threeNum6Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, () => 6)
        generateFilledTable(pair, i + 1)    
    }
})


threeNum7Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, () => 7)
        generateFilledTable(pair, i + 1)    
    }
})


threeNum8Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, () => 8)
        generateFilledTable(pair, i + 1)    
    }
})

threeNum9Button.addEventListener('click', function(){
    for(let i = 0; i <= numberOfResults; i++){
        let pair = returnDivedablePair(generateRandom3Digit, () => 9)
        generateFilledTable(pair, i + 1)    
    }
})