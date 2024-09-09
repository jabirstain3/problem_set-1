
# The significance of union and intersection type on typescript.

TypeScript is versatile. For the most part you define the type of the data in TypeScript, which helps to use them correctly. We can use it in various scenarios. Union and intersection add a significant boost  to TypeScript. For example, modeling data to make it more flexible like, a data can be a combination of more than one type. Let’s explore in detail.



## Union Types:

What is union? In mathematical terms union is one among multiple options. In programming it stands the same. Union type can allow a  variable to have multiple typed data. If a variable has to store one of  multiple data types to ensure safety when handling it, use union type. syntax,

```bash
  let variable: Type1 | Type2;

```
In this case, the variable can either be of Type1 or Type2.

#### Lets see some example of union type,
```bash
const print(text: string | number) => {
    if (typeof text === 'string') {
        console.log(`String value: ${text}`);
    } 
    else {
        console.log(`Number value: ${text}`);
    }
}

print("Hello!");  // Output: String value: Hello!
print(42);         // Output: Number value: 42
```
In this case, the parameter text had the possibility to be a string type or a number type. Typescript forces you to consider both types and maintain safety.

Like primitive types object types can be unioned.
```bash
type Dog = {
    breed: string;
    bark: () => void;
};

type Cat = {
    breed: string;
    meow: () => void;
};

const makeSound = (animal: Dog | Cat) => {
    if ("bark" in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}

const dog: Dog = { breed: 'German Shepared', bark: () => console.log("Woof Woof") };
const cat: Cat = { breed: 'Siamese', meow: () => console.log("Meow Meow") };

makeSound(dog); // Output: Woof Woof
makeSound(cat); // Output: Meow Meow
```
In this case, the function can use either Dog or Cat, and TypeScript ensures that you handle each type appropriately.
## Intersection type: 

Intersection means you can use multiple options at once. To be precise, interaction of several types is referred to as merging these types in one. A value of an intersection type must satisfy all the combined types.  This is useful when you want to use a type that merges properties or methods from different types. syntax,

```bash
  let variable: Type1 & Type2;

```
In this case, the variable must satisfy both of Type1 and Type2.

#### Lets see some example of intersection type,
```bash
type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type Engineer = Person & Employee;  // Must satisfy both Person and Employee

const engineer: Engineer = {
    name: "Joe",
    employeeId: 21205,
};

console.log(engineer); // Output: { name: 'Joe', employeeId: 21205 }

```
In this case, the type Engineer must have both the property of type Person and type Employe.

class intersecting,
```bash
class PersonClass {
    name: string = "John";
}

class EmployeeClass {
    employeeId: number = 1201;
}

type PersonEmployee = PersonClass & EmployeeClass;

const worker: PersonEmployee = { name: "John", employeeId: 1201 };

console.log(worker); // Output: { name: 'John', employeeId: 1201 }
```
Here, we use intersection types to create a new type that merges two classes.