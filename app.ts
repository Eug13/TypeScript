// let NAME: string = 'Tom';

// let num: number = 10;

// let b: boolean = true;

// let all: any = 'any can be any types';

// let test: string | number = 'Test';
// test = 10;
// //test = true //error

// let arr: string[] = ['mon', 'tue', 'web', 'other'];

// let arr1: any[] = [1, 'mon', true];

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


//abstract

//  class Dog {
//     protected name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     protected showDog(): void {
//         console.log(`Dog's Name ==> ${this.name}!`)
//     }

//     public getName(): string {
//         return this.name;
//     }

//     public setName(name: string): void {
//         this.name = name
//     }
// }



// let Bobik = new Dog('Bobik');

// // // Bobik.name = 'Tuzik';
// // Bobik.showDog();
// // console.log(Bobik.getName());
// // Bobik.setName('Tuzik');
// // console.log(Bobik.getName());

// class HunterDog extends Dog{
//     private skill:string;
//     constructor(name:string,skill:string){
//         super(name);
//         this.skill = skill;
//     }
//     // public showDogH():void{
//     //     console.log(`Hunter Dog ==> ${this.name} ${this.skill}`);
//     // }

//     public showDog():void{
//      super.showDog();
//      console.log(`Hunter Dog ==> ${this.skill} `)  
//     }
// }

// let Bob = new HunterDog('Bark','kick');

// console.log(Bob);

// Bob.showDog();



//=============================================================>

class Group {
    protected groupName: string;
    protected course: string;
    protected study: string;
    constructor(groupName: string, course: string, study: string) {
        this.groupName = groupName;
        this.course = course;
        this.study = study;
    }
    public showGroup(): void {
        console.log(`Group's Name ==> ${this.groupName} ${this.course} ${this.study}!`)
    }

}

let group = new Group('FrontEnd','Js','Programming');

group.showGroup();

class Students extends Group{
    public students:string[];
    constructor(groupName: string, course: string, study: string,students:string[]){
        super(groupName,course,study);
        this.students = students;
    }
    public getGroupName(): string {
        return this.groupName;
    }

    public setGroupName(groupName: string): void {
        this.groupName = groupName;
    }

    public getCourse(): string {
        return this.course;
    }

    public setStudy(study: string): void {
        this.study = study;
    }

    public getStudy(): string {
        return this.study;
    }

    public setCourse(study: string): void {
        this.study = study;
    }

    public showStudents():void{
             super.showGroup();
             console.log(`Students ==> ${this.students} `)  
            }
}

let FrontEndGroup = new Students('FrontEnd','JS','Programming',['Vasya','Petya','Masha']);
