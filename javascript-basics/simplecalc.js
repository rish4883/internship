let a = Number(prompt('Enter first num: '))
let b = Number(prompt('Enter 2nd num: '))
let op = prompt('Enter operator (+, -, *, /)')

if (op == '+') {
    alert(`${a} + ${b} = ${a+b}`)
} else if (op == '-') {
    alert(`${a} - ${b} = ${a-b}`)
} else if (op == '*') {
    alert(`${a} * ${b} = ${a*b}`)
} else if (op == '/') {
    alert(`${a} / ${b} = ${a/b}`)
} else {
    alert('Invalid Operator')
}