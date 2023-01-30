const operations = ['sum', 'rest', 'mult', 'div']

const calculator = (a:number, b:number, op:string) => {
    if (!operations.includes(op)) {
        console.log('The operation is not valid')
    }
    if (op === 'sum') return a + b
    if (op === 'rest') return a - b
    if (op === 'mult') return a * b
    if (op === 'div') return a / b
}

const calculatorv2 = (a:number, b:number, op:'sum'|'rest'|'mult'|'div'):number => {
    if (op === 'sum') return a + b
    if (op === 'rest') return a - b
    if (op === 'mult') return a * b
    if (op === 'div') return a / b
}

type Operation = 'sum'|'rest'|'mult'|'div'
type Result = number
const calculatorv3 = (a:number, b:number, op:Operation):Result => {
    if (op === 'sum') return a + b
    if (op === 'rest') return a - b
    if (op === 'mult') return a * b
    if (op === 'div'){
        if (b === 0) {
            throw new Error('Division by zero')
        }
        return a / b
    }
    throw new Error('Operation not valid')
}



let result = calculator(2,4,'sum')
console.log(result)
result = calculator(2,4,'div')
console.log(result)
result = calculatorv2(2,4,'sum')
console.log(result)
result = calculatorv3(2,4,'rest')
console.log(result)

try{
    result = calculatorv3(2,0,'div')
    console.log(result)
}catch(error){
    console.log('err',error)
}

console.log(process.argv)