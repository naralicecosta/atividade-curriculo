//string, boolean, number,...
let x: number = 10;
x = 12
console.log(x);

//inferencia x annotation
let y = 12 //inferencia /suscinto

let z:number = 12 //annotation /explicito

//tipos básicos
let firtName: string = "Nara"
let age: number = 20
let isAdmin: boolean = true

//String !=string
console.log(typeof firtName)
firtName = "Vic"
console.log(firtName)

//object 
const myNumbers: number[] = [1,2,3]
console.log(myNumbers)
console.log(myNumbers.length)
//console.log(myNumbers.toUppercase()) NÃO VAI FUNCIONAR . É APENAS STRING LETRAS MAIUSCULAS
console.log(firtName.toUpperCase())


//adc elemento ao array
myNumbers.push(5)
console.log(myNumbers)

//tuplas 
let myTuple: [number,string,string[]]
myTuple = [5,"teste",["a","b"]]
//myTuple = [true,false,true]

//object literals -> {prop: value}
const user:{name: string, age: number} = {
    name: "nara",
    age: 20
}
console.log(user)
console.log(user.name)

//user.job = "Programador" /NÃO CONSEGUE ADICIONAR

//any /VALOR QUE ACEITA QUALQUER TIPO DE DADO / VAI CONTRA A FILOSOFIA / EVITAR USAR / RAROS CASOS / MÁ PRÁTICA
let a:any = 0
a = "teste";
a = true 
a = []

//SOLUÇÃO PARA O ANY
//union type
let id: string | number = "10"
id = 200

/* não serve para esse tipo d dado
id = true
id = []*/


//type alias
type myIdType = number | string
const userId: myIdType = 10
const productId: myIdType = "000002"
const shirId: myIdType = 123

//enum / enumera uma coleção e consegue utilizar uma coleção dados mais complexos de uma forma mais simples
//tamanho de roupas(size: medio. size: pequeno)
enum Size{
    P = "Pequeno",
    M  = "Médio",
    G = "Grande"
}
const camisa = {
    name: "camisa gola v",
    size: Size.G
}
console.log(camisa)

//literal types / determina um valor como um tipo
let teste: "algum valor" | null;
teste = "algum valor";
teste = null

//funcoes
function sum(a: number,b: number){
    return a + b;
}
console.log(sum(12,12));
//console.log(sum('12,true')) NÃO ACEITA

function sayHelloTo(name: string): string{
    return `Hello ${name}`
}
console.log(sayHelloTo('nara'))