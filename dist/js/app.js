"use strict";
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
var NAME = 'Tom';
var num = 10;
var b = true;
var all = 'any can be any types';
var test = 'Test';
test = 10;
//test = true //error
var arr = ['mon', 'tue', 'web', 'other'];
var arr1 = [1, 'mon', true];
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
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.showDog = function () {
        console.log("Dog's Name ==> " + this.name + "!");
    };
    Dog.prototype.getName = function () {
        return this.name;
    };
    Dog.prototype.setName = function (name) {
        this.name = name;
    };
    return Dog;
}());
var Bobik = new Dog('Bobik');
// // Bobik.name = 'Tuzik';
// Bobik.showDog();
// console.log(Bobik.getName());
// Bobik.setName('Tuzik');
// console.log(Bobik.getName());
var HunterDog = /** @class */ (function (_super) {
    __extends(HunterDog, _super);
    function HunterDog(name, skill) {
        var _this = _super.call(this, name) || this;
        _this.skill = skill;
        return _this;
    }
    // public showDogH():void{
    //     console.log(`Hunter Dog ==> ${this.name} ${this.skill}`);
    // }
    HunterDog.prototype.showDog = function () {
        _super.prototype.showDog.call(this);
        console.log("Hunter Dog ==> " + this.skill + " ");
    };
    return HunterDog;
}(Dog));
var Bob = new HunterDog('Bark', 'kick');
console.log(Bob);
Bob.showDog();
//# sourceMappingURL=app.js.map