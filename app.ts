let NAME: string = 'Tom';

let num: number = 10;

let b: boolean = true;

let all: any = 'any can be any types';

let test: string | number = 'Test';
test = 10;
//test = true //error

let arr: string[] = ['mon', 'tue', 'web', 'other'];

let arr1: any[] = [1, 'mon', true];

// console.log(NAME +" "+ num+" "+ b+" "+ all);
// console.log(arr);

// function Plus(a:number,b:number):number{
// return a+b
// };

// console.log(Plus(10,10));


// function show(str:string):void{
//     console.log(str);
// }
// show('bobik');

// let person: Person = {
//     name: 'Sam',
//     surname: 'Jakson',
//     age: 34,
//     showInfo(): void {
//         console.log(`Person:  ${this.name} ${this.surname} ${this.age}`);
//     },
//     getJob(): void {
//         console.log('programmer');
//     }
// }

// type Person = {
//     name: string, surname: string, age: number, showInfo: () => void, getJob?: () => void
// }


// person.showInfo();
// person.getJob();


 class Dog {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    protected showDog(): void {
        console.log(`Dog's Name ==> ${this.name}!`)
    }
 
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name
    }
}



let Bobik = new Dog('Bobik');

// // Bobik.name = 'Tuzik';
// Bobik.showDog();
// console.log(Bobik.getName());
// Bobik.setName('Tuzik');
// console.log(Bobik.getName());

class HunterDog extends Dog{
    private skill:string;
    constructor(name:string,skill:string){
        super(name);
        this.skill = skill;
    }
    // public showDogH():void{
    //     console.log(`Hunter Dog ==> ${this.name} ${this.skill}`);
    // }

    public showDog():void{
     super.showDog();
     console.log(`Hunter Dog ==> ${this.skill} `)  
    }
}

let Bob = new HunterDog('Bark','kick');

console.log(Bob);

Bob.showDog();