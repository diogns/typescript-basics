const multiplicator = (a:number, b:number, printText:string) => {
    console.log(printText, a * b)
}

const parseArguments = (args: Array<string>):Array<number> => {
    if (args.length < 4) throw new Error('Not enough arguments')
    if (args.length > 4) throw new Error('Too many arguments')
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return [Number(args[2]), Number(args[3])]
    } else {
        throw new Error('Provided values were not numbers!')
    }

}
console.log(process.argv)
const cleanArguments = parseArguments(process.argv)
// multiplicator(2,4,'El resultado es:')
// const a: number = Number(process.argv[2])
// const b: number = Number(process.argv[3])
const a: number = Number(cleanArguments[0])
const b: number = Number(cleanArguments[1])
multiplicator(a,b,`Multiplicación: ${a} * ${b} =`)

