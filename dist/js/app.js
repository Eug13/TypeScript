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
// interface t{
//     gender:string
// }
var User = /** @class */ (function () {
    function User(name, surname, color, hair_color, made_in) {
        this.name = name;
        this.surname = surname;
        this.color = color;
        this.hair_color = hair_color;
        this.made_in = made_in;
        this.showPerson();
    }
    User.prototype.showPerson = function () {
        console.log("Name: " + this.name + " , Surname: " + this.surname + " , Color:" + this.color + ", Hair color: " + this.hair_color + ", Made in: " + this.made_in);
    };
    return User;
}());
var persona = new User('Vasya', 'Bubkin', 'Black', 'red', 'Africa');
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, surname, color, hair_color, made_in, age) {
        var _this = _super.call(this, name, surname, color, hair_color, made_in) || this;
        _this.age = age;
        _this.showPerson();
        return _this;
    }
    Child.prototype.showPerson = function () {
        _super.prototype.showPerson.call(this);
        console.log(" Age: " + this.age);
    };
    return Child;
}(User));
var Boy = new Child('Tom', 'Thomson', 'white', 'white', 'Ukraine', 12);
//# sourceMappingURL=app.js.map