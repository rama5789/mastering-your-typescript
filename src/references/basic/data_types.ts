import { log } from '../../utils/helper';

console.log('\n\n<------ data_types.ts ----->');

const tag = 'DataTypes';

{
  log(tag, 'basic_static_types');

  {
    log(tag, 'a_built-in_types');

    {
      log(tag, '1_number');

      const decimal: number = 6;
      let hex: number = 0xf00d;
      const binary: number = 0b1010;
      let octal: number = 0o744;

      console.log('decimal: ', decimal); // 6
      console.log('hex: ', hex); // 61453
      console.log('binary: ', binary); // 10
      console.log('octal: ', octal); // 484
    }

    {
      log(tag, '2_string');

      let fullName: string = `Bob Bobbington`;
      let age: number = 37;
      let sentence: string = `Hello, my name is ${fullName}. I'll be ${
        age + 1
      } years old next month.`;

      console.log('sentence: ', sentence); // Hello, my name is Bob Bobbington. I'll be 38 years old next month.
    }

    {
      log(tag, '3_boolean');

      let isDone: boolean = false;

      console.log('isDone: ', isDone); // false
      isDone = true;
      console.log('isDone [changed]: ', isDone); // true
    }

    {
      log(tag, '4_void');

      const warnUser = (): void => {
        console.log('This is my warning message');
      };
      let unusable: void = undefined;

      console.log('unusable [undefined]: ', unusable); // undefined
      // unusable = null; // OK if `--strictNullChecks` is not given
      // console.log('unusable [null]: ', unusable); // null

      warnUser(); // This is my warning message
    }

    {
      log(tag, '5_null_undefined');

      let u: undefined = undefined;
      let n: null = null;

      console.log('u [undefined]: ', u); // undefined
      console.log('n [null]: ', n); // null
      // u = null;
      // n = undefined;
      // console.log('u [null]: ', u); // null
      // console.log('n [undefined]: ', n); // undefined
    }

    {
      log(tag, '6_any');

      let notSure: any = 4;
      console.log('notSure [number]: ', notSure); // 4
      notSure = 'maybe a string instead';
      console.log('notSure [string]: ', notSure); // maybe a string instead
      notSure = false;
      console.log('notSure [boolean]: ', notSure); // false
      console.log('notSure.ifItExists [object]: ', notSure.ifItExists); // undefined

      let notSureList: any[] = [1, true, 'free'];
      console.log('notSureList [random]: ', notSureList); // [ 1, true, 'free' ]
      notSureList[1] = 100;
      console.log('notSureList [random]: ', notSureList); // [ 1, 100, 'free' ]
    }
  }

  {
    log(tag, 'b_user-defined_types');

    {
      log(tag, '1_Array');

      const numList: number[] = [1, 2, 3];
      console.log('numList: ', numList); // [ 1, 2, 3 ]

      const strList: Array<string> = ['a', 'b', 'c'];
      console.log('strList: ', strList); // [ 'a', 'b', 'c' ]
    }

    {
      log(tag, '2_Tuple');

      let x: [string, number, boolean];

      x = ['a', 10, true];
      console.log('x: ', x); // [ 'a', 10, true ]
      console.log('x[0]: ', x[0]); // 'a'
      console.log('x[1]: ', x[1]); // 10
      console.log('x[2]: ', x[2]); // true
      // x = [20, "b"];  // Type 'number' is not assignable to type 'string'
      // x = ["a", 10, true, "b", 20, false]; // Type '[string, number, true, string, number, false]' is not assignable to type '[string, number, boolean]'.
    }

    {
      log(tag, '3_Enum');

      enum Color {
        Red,
        Green,
        Blue,
      } // default values: [0, 1, 2]
      enum Color2 {
        Red = 3,
        Green,
        Blue = 10,
      } // custom values: [3, 4(3+1), 10]
      enum Color3 {
        Red = 'red',
        Green = 4,
        Blue = 'blue',
      } // custom values: ['red', 4, 'green']

      let red: Color = Color.Red;
      let colorName: string = Color[1];
      console.log('Color: ', Color); // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
      console.log('Color.Red: ', red); // 0
      console.log('Color.Green: ', Color.Green); // 1
      console.log('Color.Blue: ', Color.Blue); // 2
      console.log('Color[0] key: ', Color[0]); // Red
      console.log('Color[1] key: ', colorName); // Green
      console.log('Color[2] key: ', Color[2]); // Blue
      console.log('Color[3] key: ', Color[3]); // undefined

      let red2: Color2 = Color2.Red;
      let color2Name: string = Color2[4];
      console.log('Color2: ', Color2); // { '3': 'Red', '4': 'Green', '10': 'Blue', Red: 3, Green: 4, Blue: 10 }
      console.log('Color2.Red: ', red2); // 3
      console.log('Color2[4] key: ', color2Name); // Green
      console.log('Color2[11] key: ', Color2[11]); // undefined

      let red3: Color3 = Color3.Red;
      let color3Name: string = Color3[4];
      console.log('Color3: ', Color3); // { '4': 'Green', Red: 'red', Green: 4, Blue: 'blue' }
      console.log('Color3.Red: ', red3); // 'red'
      console.log('Color3[4] key: ', color3Name); // Green
      // console.log('Color3["blue"] key: ', Color3['blue']); // undefined
    }

    {
      log(tag, '4_Function');

      let sum = (a: number, b: number = 5): number => a + b;

      console.log('sum(3,4): ', sum(3, 4)); // 7
      console.log('sum(3): ', sum(3)); // 8
    }

    {
      log(tag, '5_Class');

      class Student {
        /* private vars */
        private _rollNo: number;
        private _stream: string;

        /* protected vars */

        /* public vars */
        // public fullName: string;
        fullName: string; // all fields are public by default

        /* static vars */
        static studentType: string = 'BTech'; // also public

        /* constructor */
        constructor(rollNo: number, fullName: string) {
          this._rollNo = rollNo;
          this.fullName = fullName;
          this._stream = 'ETC';
        }

        /* Getters and Setters */
        get rollNo(): number {
          return this._rollNo;
        }
        set rollNo(newRoll: number) {
          if (newRoll && newRoll < 100) {
            throw new Error('Roll No. must be greater than or equal to 100');
          }
          this._rollNo = newRoll;
        }

        get stream(): string {
          return this._stream;
        }
        set stream(newStream: string) {
          this._stream = newStream;
        }

        /* private methods */
        private getSecret(): string {
          return 'Secret#' + Student.studentType;
        }

        /* public instance methods */
        // public showDetails() {
        showDetails() {
          // all methods are public by default
          const bio = {
            rollNo: this._rollNo, // private field
            stream: this._stream, // private field
            fullName: this.fullName, // public field
            studentType: Student.studentType, // static field
            studentMotto: Student.studentMotto(), // static method
            secretCode: this.getSecret(), // private method
          };
          console.log('Student Bio: ', bio);
        }

        /* static methods */
        static studentMotto(): string { // also public
          return 'Always Learning';
        }
      }

      console.log('Student: ', Student); // [Function: Student] { studentMotto: [Function], studentType: 'BTech' }
      console.log('Student.studentType: ', Student.studentType); // BTech
      console.log('Student.studentMotto(): ', Student.studentMotto()); // Always Learning

      const stu1: Student = new Student(100, 'Sachin Tendulkar');

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
      Student.studentType = 'BE';
      Student.studentMotto = () => {
        return 'To hell with Learning';
      };
      console.log('Student: ', Student); // [Function: Student] { studentMotto: [Function], studentType: 'BE' }
      console.log('Student.studentType: ', Student.studentType); // BE
      console.log('Student.studentMotto(): ', Student.studentMotto()); // To hell with Learning

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
      log(tag, '6_Interface');

      // Object implementing Interface
      interface ICalculator {
        add(first: number, second: number): number;
        subtract(first: number, second: number): number;
      }
      let Calculator: ICalculator = {
        add(first, second) {
          return first + second;
        },
        subtract(first, second) {
          return first - second;
        },
      };
      console.log('Calculator: ', Calculator); // { add: [Function: add], subtract: [Function: subtract] }
      console.log('Calculator.add(2,3): ', Calculator.add(2, 3)); // 5
      console.log('Calculator.subtract(2,3): ', Calculator.subtract(2, 3)); // -1

      // Function implementing Interface
      interface ILabeledValue {
        label: string;
      }
      const printLabel = (labeledObj: ILabeledValue): string => {
        return labeledObj.label;
      };
      let myObj = { size: 10, label: 'Size 10 Object' };
      console.log('printLabel(myObj): ', printLabel(myObj)); // Size 10 Object

      // Class implementing Interface
      interface IPerson {
        name: string;
      }
      interface IPersonDetail {
        age: number;
        gender: string;
      }
      interface IEmployee extends IPerson, IPersonDetail {
        empCode: number;
      }
      let empObject = <IEmployee>{};
      empObject.name = 'Max Muller';
      empObject.age = 40;
      empObject.gender = 'Male';
      empObject.empCode = 200;
      let empObject2: IEmployee = {
        name: 'Max Muller',
        age: 40,
        gender: 'Male',
        empCode: 201,
      };
      console.log('empObject: ', empObject); // { name: 'Max Muller', age: 40, gender: 'Male', empCode: 200 }
      console.log('empObject2: ', empObject2); // { name: 'Max Muller', age: 40, gender: 'Male', empCode: 201 }

      class GoogleEmployee implements IEmployee {
        name: string;
        age: number;
        gender: string;
        empCode: number;
        id: string;
        ssn: string;

        constructor(googliteDetails: IEmployee, ssn: string) {
          this.name = googliteDetails.name;
          this.age = googliteDetails.age;
          this.gender = googliteDetails.gender;
          this.empCode = googliteDetails.empCode;
          this.id = `G#${googliteDetails.empCode}`;
          this.ssn = ssn;
        }

        getDetails() {
          return {
            id: this.id,
            ssn: this.ssn,
            name: this.name,
            gender: this.gender,
            age: this.age,
          };
        }
      }

      let gEmpObject = new GoogleEmployee(empObject, 'NY2020USA');
      console.log('gEmpObject.getDetails(): ', gEmpObject.getDetails()); // { id: 'G#200', ssn: 'NY2020USA', name: 'Max Muller', gender: 'Male', age: 40 }
    }
  }
}

{
  log(tag, 'generic_types');

  const identityFn = <T>(arg: T): T => {
    return arg;
  };
  /* const loggingIdentityFn = <T>(arg: T[]): T[] => {
    console.log(arg.length);
    return arg;
  } */
  const loggingIdentityFn = <T>(arg: Array<T>): Array<T> => {
    console.log(arg.length);
    return arg;
  };

  let i1 = identityFn<string>('Sachin');
  let i2 = identityFn<number>(100);
  console.log('i1: ', i1); // Sachin
  console.log('i2: ', i2); // 100

  let arr1: string[] = ['Sachin', 'Virat'];
  let arr2: number[] = [1, 2, 3];
  let l1 = loggingIdentityFn<string>(arr1);
  let l2 = loggingIdentityFn<number>(arr2);
  console.log('l1: ', l1); // 2 [ 'Sachin', 'Virat' ]
  console.log('l2: ', l2); // 3 [ 1, 2, 3 ]
}

{
  log(tag, 'decorator_types');

  // decorator (experimental feature)
  const classDecorator = <T extends { new (...args: any[]): {} }>(
    constructor: T
  ) => {
    return class extends constructor {
      newProperty = 'new property';
      hello = 'override';
    };
  };

  // without decorator
  class Greeter {
    property = 'property';
    hello: string;

    constructor(m: string) {
      this.hello = m;
    }
  }
  let greeter = new Greeter('world');
  console.log('greeter: ', greeter); // Greeter { property: 'property', hello: 'world' }

  // with decorator
  @classDecorator
  class Greeter2 {
    property = 'property';
    hello: string;

    constructor(m: string) {
      this.hello = m;
    }
  }
  let greeter2 = new Greeter2('world');
  console.log('greeter2: ', greeter2);
  /* 
  class_1 {
    property: 'property',
    hello: 'override',
    newProperty: 'new property'
  }
  */
}

export default tag;
