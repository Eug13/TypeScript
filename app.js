"use strict";
// let NAME: string = 'Tom';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Group = /** @class */ (function () {
    function Group(groupName, course, study) {
        this.groupName = groupName;
        this.course = course;
        this.study = study;
    }
    Group.prototype.showGroup = function () {
        console.log("Group's Name ==> " + this.groupName + " " + this.course + " " + this.study + "!");
    };
    return Group;
}());
var group = new Group('FrontEnd', 'Js', 'Programming');
group.showGroup();
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(groupName, course, study, students) {
        var _this = _super.call(this, groupName, course, study) || this;
        _this.students = students;
        return _this;
    }
    Students.prototype.getGroupName = function () {
        return this.groupName;
    };
    Students.prototype.setGroupName = function (groupName) {
        this.groupName = groupName;
    };
    Students.prototype.getCourse = function () {
        return this.course;
    };
    Students.prototype.setStudy = function (study) {
        this.study = study;
    };
    Students.prototype.getStudy = function () {
        return this.study;
    };
    Students.prototype.setCourse = function (study) {
        this.study = study;
    };
    Students.prototype.showStudents = function () {
        _super.prototype.showGroup.call(this);
        console.log("Students ==> " + this.students + " ");
    };
    return Students;
}(Group));
var FrontEndGroup = new Students('FrontEnd', 'JS', 'Programming', ['Vasya', 'Petya', 'Masha']);
