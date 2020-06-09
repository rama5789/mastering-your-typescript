"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../../utils/helper");
console.log('\n\n<------ data_types.ts ----->');
var tag = 'DataTypes';
{
    helper_1.log(tag, 'basic_static_types');
    {
        helper_1.log(tag, 'a_built-in_types');
        {
            helper_1.log(tag, '1_number');
            var decimal = 6;
            var hex = 0xf00d;
            var binary = 10;
            var octal = 484;
            console.log('decimal: ', decimal); // 6
            console.log('hex: ', hex); // 61453
            console.log('binary: ', binary); // 10
            console.log('octal: ', octal); // 484
        }
        {
            helper_1.log(tag, '2_string');
            var fullName = "Bob Bobbington";
            var age = 37;
            var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
            console.log('sentence: ', sentence); // Hello, my name is Bob Bobbington. I'll be 38 years old next month.
        }
        {
            helper_1.log(tag, '3_boolean');
            var isDone = false;
            console.log('isDone: ', isDone); // false
            isDone = true;
            console.log('isDone [changed]: ', isDone); // true
        }
        {
            helper_1.log(tag, '4_void');
            var warnUser = function () {
                console.log('This is my warning message');
            };
            var unusable = undefined;
            console.log('unusable [undefined]: ', unusable); // undefined
            // unusable = null; // OK if `--strictNullChecks` is not given
            // console.log('unusable [null]: ', unusable); // null
            warnUser(); // This is my warning message
        }
        {
            helper_1.log(tag, '5_null_undefined');
            var u = undefined;
            var n = null;
            console.log('u [undefined]: ', u); // undefined
            console.log('n [null]: ', n); // null
            // u = null;
            // n = undefined;
            // console.log('u [null]: ', u); // null
            // console.log('n [undefined]: ', n); // undefined
        }
        {
            helper_1.log(tag, '6_any');
            var notSure = 4;
            console.log('notSure [number]: ', notSure); // 4
            notSure = 'maybe a string instead';
            console.log('notSure [string]: ', notSure); // maybe a string instead
            notSure = false;
            console.log('notSure [boolean]: ', notSure); // false
            console.log('notSure.ifItExists [object]: ', notSure.ifItExists); // undefined
            var notSureList = [1, true, 'free'];
            console.log('notSureList [random]: ', notSureList); // [ 1, true, 'free' ]
            notSureList[1] = 100;
            console.log('notSureList [random]: ', notSureList); // [ 1, 100, 'free' ]
        }
    }
    {
        helper_1.log(tag, 'b_user-defined_types');
        {
            helper_1.log(tag, '1_Array');
            var numList = [1, 2, 3];
            console.log('numList: ', numList); // [ 1, 2, 3 ]
            var strList = ['a', 'b', 'c'];
            console.log('strList: ', strList); // [ 'a', 'b', 'c' ]
        }
        {
            helper_1.log(tag, '2_Tuple');
            var x = void 0;
            x = ['a', 10, true];
            console.log('x: ', x); // [ 'a', 10, true ]
            console.log('x[0]: ', x[0]); // 'a'
            console.log('x[1]: ', x[1]); // 10
            console.log('x[2]: ', x[2]); // true
            // x = [20, "b"];  // Type 'number' is not assignable to type 'string'
            // x = ["a", 10, true, "b", 20, false]; // Type '[string, number, true, string, number, false]' is not assignable to type '[string, number, boolean]'.
        }
        {
            helper_1.log(tag, '3_Enum');
            var Color = void 0;
            (function (Color) {
                Color[Color["Red"] = 0] = "Red";
                Color[Color["Green"] = 1] = "Green";
                Color[Color["Blue"] = 2] = "Blue";
            })(Color || (Color = {})); // default values: [0, 1, 2]
            var Color2 = void 0;
            (function (Color2) {
                Color2[Color2["Red"] = 3] = "Red";
                Color2[Color2["Green"] = 4] = "Green";
                Color2[Color2["Blue"] = 10] = "Blue";
            })(Color2 || (Color2 = {})); // custom values: [3, 4(3+1), 10]
            var Color3 = void 0;
            (function (Color3) {
                Color3["Red"] = "red";
                Color3[Color3["Green"] = 4] = "Green";
                Color3["Blue"] = "blue";
            })(Color3 || (Color3 = {})); // custom values: ['red', 4, 'green']
            var red = Color.Red;
            var colorName = Color[1];
            console.log('Color: ', Color); // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
            console.log('Color.Red: ', red); // 0
            console.log('Color.Green: ', Color.Green); // 1
            console.log('Color.Blue: ', Color.Blue); // 2
            console.log('Color[0] key: ', Color[0]); // Red
            console.log('Color[1] key: ', colorName); // Green
            console.log('Color[2] key: ', Color[2]); // Blue
            console.log('Color[3] key: ', Color[3]); // undefined
            var red2 = Color2.Red;
            var color2Name = Color2[4];
            console.log('Color2: ', Color2); // { '3': 'Red', '4': 'Green', '10': 'Blue', Red: 3, Green: 4, Blue: 10 }
            console.log('Color2.Red: ', red2); // 3
            console.log('Color2[4] key: ', color2Name); // Green
            console.log('Color2[11] key: ', Color2[11]); // undefined
            var red3 = Color3.Red;
            var color3Name = Color3[4];
            console.log('Color3: ', Color3); // { '4': 'Green', Red: 'red', Green: 4, Blue: 'blue' }
            console.log('Color3.Red: ', red3); // 'red'
            console.log('Color3[4] key: ', color3Name); // Green
            // console.log('Color3["blue"] key: ', Color3['blue']); // undefined
        }
        {
            helper_1.log(tag, '4_Function');
            var sum = function (a, b) {
                if (b === void 0) { b = 5; }
                return a + b;
            };
            console.log('sum(3,4): ', sum(3, 4)); // 7
            console.log('sum(3): ', sum(3)); // 8
        }
        {
            helper_1.log(tag, '5_Class');
            var Student_1 = /** @class */ (function () {
                /* constructor */
                function Student(rollNo, fullName) {
                    this._rollNo = rollNo;
                    this.fullName = fullName;
                    this._stream = 'ETC';
                }
                Object.defineProperty(Student.prototype, "rollNo", {
                    /* Getters and Setters */
                    get: function () {
                        return this._rollNo;
                    },
                    set: function (newRoll) {
                        if (newRoll && newRoll < 100) {
                            throw new Error('Roll No. must be greater than or equal to 100');
                        }
                        this._rollNo = newRoll;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Student.prototype, "stream", {
                    get: function () {
                        return this._stream;
                    },
                    set: function (newStream) {
                        this._stream = newStream;
                    },
                    enumerable: false,
                    configurable: true
                });
                /* private methods */
                Student.prototype.getSecret = function () {
                    return 'Secret#' + Student.studentType;
                };
                /* public instance methods */
                // public showDetails() {
                Student.prototype.showDetails = function () {
                    // all methods are public by default
                    var bio = {
                        rollNo: this._rollNo,
                        stream: this._stream,
                        fullName: this.fullName,
                        studentType: Student.studentType,
                        studentMotto: Student.studentMotto(),
                        secretCode: this.getSecret(),
                    };
                    console.log('Student Bio: ', bio);
                };
                /* static methods */
                Student.studentMotto = function () {
                    return 'Always Learning';
                };
                /* static vars */
                Student.studentType = 'BTech';
                return Student;
            }());
            console.log('Student: ', Student_1); // [Function: Student] { studentMotto: [Function], studentType: 'BTech' }
            console.log('Student.studentType: ', Student_1.studentType); // BTech
            console.log('Student.studentMotto(): ', Student_1.studentMotto()); // Always Learning
            var stu1 = new Student_1(100, 'Sachin Tendulkar');
            console.log('stu1: ', stu1); // Student { _rollNo: 100, fullName: 'Sachin Tendulkar' }
            console.log('stu1.rollNo: ', stu1.rollNo); // 100
            console.log('stu1.stream: ', stu1.stream); // ETC
            console.log('stu1.fullName: ', stu1.fullName); // Sachin Tendulkar
            // console.log('stu1.studentType: ', stu1.studentType);  // Err: Property 'studentType' is a static member of type 'Student'
            // console.log('stu1.getSecret(): ', stu1.getSecret());  // Err: Property 'getSecret' is private and only accessible within class 'Student'.
            stu1.showDetails();
            /* Student Bio:  {
              rollNo: 100,
              stream: ETC,
              fullName: 'Sachin Tendulkar',
              studentType: 'BTech',
              studentMotto: 'Always Learning',
              secretCode: 'Secret#BTech'
            } */
            // override static fields and methods
            Student_1.studentType = 'BE';
            Student_1.studentMotto = function () {
                return 'To hell with Learning';
            };
            console.log('Student: ', Student_1); // [Function: Student] { studentMotto: [Function], studentType: 'BE' }
            console.log('Student.studentType: ', Student_1.studentType); // BE
            console.log('Student.studentMotto(): ', Student_1.studentMotto()); // To hell with Learning
            stu1.rollNo = 200;
            stu1.stream = 'IT';
            stu1.fullName = 'Virat Kohli';
            console.log('stu1: ', stu1); // Student { _rollNo: 200, fullName: 'Virat Kohli', _stream: 'IT' }
            stu1.showDetails();
            /* Student Bio:  {
              rollNo: 200,
              stream: 'IT',
              fullName: 'Virat Kohli',
              studentType: 'BE',
              studentMotto: 'To hell with Learning',
              secretCode: 'Secret#BE'
            } */
            // stu1.rollNo = 99; // Error: Roll No. must be greater than or equal to 100
        }
        {
            helper_1.log(tag, '6_Interface');
            var Calculator = {
                add: function (first, second) {
                    return first + second;
                },
                subtract: function (first, second) {
                    return first - second;
                },
            };
            console.log('Calculator: ', Calculator); // { add: [Function: add], subtract: [Function: subtract] }
            console.log('Calculator.add(2,3): ', Calculator.add(2, 3)); // 5
            console.log('Calculator.subtract(2,3): ', Calculator.subtract(2, 3)); // -1
            var printLabel = function (labeledObj) {
                return labeledObj.label;
            };
            var myObj = { size: 10, label: 'Size 10 Object' };
            console.log('printLabel(myObj): ', printLabel(myObj)); // Size 10 Object
            var empObject = {};
            empObject.name = 'Max Muller';
            empObject.age = 40;
            empObject.gender = 'Male';
            empObject.empCode = 200;
            var empObject2 = {
                name: 'Max Muller',
                age: 40,
                gender: 'Male',
                empCode: 201,
            };
            console.log('empObject: ', empObject); // { name: 'Max Muller', age: 40, gender: 'Male', empCode: 200 }
            console.log('empObject2: ', empObject2); // { name: 'Max Muller', age: 40, gender: 'Male', empCode: 201 }
            var GoogleEmployee = /** @class */ (function () {
                function GoogleEmployee(googliteDetails, ssn) {
                    this.name = googliteDetails.name;
                    this.age = googliteDetails.age;
                    this.gender = googliteDetails.gender;
                    this.empCode = googliteDetails.empCode;
                    this.id = "G#" + googliteDetails.empCode;
                    this.ssn = ssn;
                }
                GoogleEmployee.prototype.getDetails = function () {
                    return {
                        id: this.id,
                        ssn: this.ssn,
                        name: this.name,
                        gender: this.gender,
                        age: this.age,
                    };
                };
                return GoogleEmployee;
            }());
            var gEmpObject = new GoogleEmployee(empObject, 'NY2020USA');
            console.log('gEmpObject.getDetails(): ', gEmpObject.getDetails()); // { id: 'G#200', ssn: 'NY2020USA', name: 'Max Muller', gender: 'Male', age: 40 }
        }
    }
}
{
    helper_1.log(tag, 'generic_types');
    var identityFn = function (arg) {
        return arg;
    };
    /* const loggingIdentityFn = <T>(arg: T[]): T[] => {
      console.log(arg.length);
      return arg;
    } */
    var loggingIdentityFn = function (arg) {
        console.log(arg.length);
        return arg;
    };
    var i1 = identityFn('Sachin');
    var i2 = identityFn(100);
    console.log('i1: ', i1); // Sachin
    console.log('i2: ', i2); // 100
    var arr1 = ['Sachin', 'Virat'];
    var arr2 = [1, 2, 3];
    var l1 = loggingIdentityFn(arr1);
    var l2 = loggingIdentityFn(arr2);
    console.log('l1: ', l1); // 2 [ 'Sachin', 'Virat' ]
    console.log('l2: ', l2); // 3 [ 1, 2, 3 ]
}
{
    helper_1.log(tag, 'decorator_types');
    // decorator (experimental feature)
    var classDecorator = function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.newProperty = 'new property';
                _this.hello = 'override';
                return _this;
            }
            return class_1;
        }(constructor));
    };
    // without decorator
    var Greeter = /** @class */ (function () {
        function Greeter(m) {
            this.property = 'property';
            this.hello = m;
        }
        return Greeter;
    }());
    var greeter = new Greeter('world');
    console.log('greeter: ', greeter);
    // with decorator
    var Greeter2 = /** @class */ (function () {
        function Greeter2(m) {
            this.property = 'property';
            this.hello = m;
        }
        Greeter2 = __decorate([
            classDecorator
        ], Greeter2);
        return Greeter2;
    }());
    var greeter2 = new Greeter2('world');
    console.log('greeter2: ', greeter2);
    /*
     */
}
exports.default = tag;
