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

//literal naratypes / determina um valor como um tipo
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

//funcoes que nao retornam nada, como tipar?
function logger(msg:string): void{ //void é para funções que não possuem retorno
    console.log(msg);
}
logger("Teste!")


//argumentos opcionais, algo que pode ou não ser inserido
function greeting(name: string, greet?: string){
    if(greet){
        console.log(`Olá ${greet} ${name}`)
        return;
    }
        console.log(`Olá ${name}`)
}
greeting("Nara")
greeting("Nara", "estagiária");


//interfaces
//pode tipar um objecto
interface MathFunctionParams {
    n1: number,
    n2: number,
}
function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2
}
console.log(sumNumbers({ n1: 1, n2: 2}))

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2
} 
//tipar a variavel
const someNumbers:MathFunctionParams = {
    n1: 5,
    n2: 10
}
console.log(multiplyNumbers(someNumbers))

//narrowing
//checagem de tipos / fizemos isso com o greet
function doSomething(info: number | boolean){
    //checando se  um ddo é numérico
    if(typeof info === "number"){
        console.log(`O número é ${info}`)
        return
    }
    console.log("Não foi passado um número")
}// o que foi feito? foi verficado um narrowing de typeof para verificar se o tipo de dado é numérico


//generics
function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}
const a1 = [1,2,3]
const a2 = ["a", "b", "c"]

showArraysItems(a1)
showArraysItems(a2) 
//se temos algo que não esta determinado por um tipo e precisamos que aceite vários, iremos usar os generics


//ORIENTAÇÃO A OBJETOS
//classes
 class User {
    name: string
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }
    //podemos utilziar metodos
    showUserName(){
        console.log(`o nome do usuário é ${this.name}`)
    }
    //podemos utilizar argumentos
    showUserRole(canShow: boolean){
        if(canShow){
            console.log(`idade do usuário é ${this.role}`)
            return
        }
        console.log("informação restrita")
    }
}
const zeca = new User("Zéca", "Admin", true)
console.log(zeca)
zeca.showUserName()
zeca.showUserRole(false)



//interfaces em classes / dita como a classe vai se comportar/ pode servir quando um projeto tem muitas classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle{
    brand 
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`a marca do carro é: ${this.brand}`)
    }
}
const fusca = new Car ("VW", 4);
fusca.showBrand();

//heranca
class SuperCar extends Car{
    engine;

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels);
        this.engine = engine
    }
}
const a4 = new SuperCar("Audi", 4,2.0)
console.log(a4)
a4.showBrand()

//decorators /validação de dados/ bem complexo
function BaseParamters(){
    return function<T extends{new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random()
            createdAt = new Date()
        }

    }
}
@BaseParamters()
class Person{
    name;

    constructor(name: string){
        this.name = name
    }
}
const sam = new Person("Sam");
console.log(sam)