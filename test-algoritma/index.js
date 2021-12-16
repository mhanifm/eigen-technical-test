//1.
const string = 'NEGIE1'

function reverses(string){
    let output = ''
    for(let i = string.length-2; i >= 0; i--) {
        output += string[i]
    }
    const idx = string.split('')
    let last = string[idx.length-1]
    output += last
    return output
}

console.log(reverses(string))

//2.
const sentence = "Saya sangat senang mengerjakan soal algoritma"

function longest(sentence) {
    const tempArr = sentence.split(' ')
    const longest = tempArr.sort((strA, strB) => {
        return strB.length - strA.length
    })
    return longest[0]
}

console.log(longest(sentence))

//3.
const INPUT = ['xc', 'dz', 'bbb', 'dz']
const QUERY = ['bbb', 'ac', 'dz']

let OUTPUT = [0, 0, 0]

for (let i = 0; i <= INPUT.length; i++){
    if (INPUT[i] === QUERY[0]) {
        OUTPUT[0]++
    } else if (INPUT[i] === QUERY[1]) {
        OUTPUT[1]++
    } else if (INPUT[i] === QUERY[2]) {
        OUTPUT[2]++
    }
}

console.log(OUTPUT)

//4.
const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
let diagonalPertama = Matrix[0][0] + Matrix[1][1] + Matrix[2][2]
let diagonalKedua = Matrix[0][2] + Matrix[1][1] + Matrix[2][0]
let result = diagonalPertama - diagonalKedua

console.log(result)